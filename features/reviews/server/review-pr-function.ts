import { inngest } from "@/features/inngest/client";
import { prisma } from "@/lib/db";
import { generateReview } from "./generate-review";
import { getPullRequestFiles } from "./pr-files";
import { chunkPrFiles } from "../utils/chunk-code";

export const reviewPullRequest = inngest.createFunction(
    { id: "review-pull-request", triggers: { event: "github/pr.received" } },
    async ({ event, step }) => {
      const pullRequestId = event.data.pullRequestId;
  
      const pullRequest = await step.run("mark-processing", async () => {
        return prisma.pullRequest.update({
          where: { id: pullRequestId },
          data: { status: "processing" },
        });
      });
      
  
      const chunks = await step.run("breakdown-code", async () => {
        const files = await getPullRequestFiles(
          pullRequest.installationId,
          pullRequest.repoFullName,
          pullRequest.prNumber
        );
  
        // Turn unified diffs into fixed-size chunks for embedding
        return chunkPrFiles(pullRequest.prNumber, files);
      });
  
      if (chunks.length === 0) {
        await step.run("mark-reviewed-no-code", async () => {
          await prisma.pullRequest.update({
            where: { id: pullRequestId },
            data: { status: "reviewed" },
          });
        });
  
        return { pullRequestId, status: "reviewed", reason: "no code to review" };
      }

      const review = await step.run("generate-ai-review", async () => {
        return generateReview({
          repoFullName: pullRequest.repoFullName,
          title: pullRequest.title,
          contextSnippets: chunks.map((chunk) => chunk.text),
          repoContextSnippets: [],
        });
      });

      await step.run("save-review", async () => {
        await prisma.pullRequest.update({
          where: { id: pullRequestId },
          data: {
            status: "reviewed",
            reviewComment: review,
            reviewedAt: new Date(),
          },
        });
      });

      return { pullRequestId, status: "reviewed" };
    }
);