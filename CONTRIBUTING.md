# Contributing to revu

Thanks for helping improve revu. Contributions should preserve the product's
GitHub-first workflow and keep provider integrations safe to operate.

## Before you start

1. Check existing issues and pull requests for related work.
2. For significant behavior or architecture changes, open an issue first so
   the approach can be discussed.
3. Never include credentials, private keys, production data, or copied
   customer code in a change, fixture, screenshot, or pull request.

## Development setup

Use the setup steps in [`README.md`](./README.md). A working local environment
requires PostgreSQL and may require test or development credentials for GitHub,
Inngest, Pinecone, OpenRouter, and Razorpay depending on the area being
changed.

Keep local secrets in `.env.local`. Do not add an environment file to git.

## Making changes

- Keep changes focused and follow the existing feature-oriented structure.
- Reuse existing helpers for authentication, database access, provider clients,
  and notifications.
- Update directly affected documentation and types.
- Treat webhook payloads, signatures, subscription events, and generated review
  content as untrusted or provider-controlled input.
- Add or update tests when behavior can be exercised deterministically.

## Quality checks

Run the smallest relevant checks before opening a pull request:

```bash
npm run lint
npm run build
```

If a check cannot run because a provider or service is unavailable, describe
the limitation and the commands you did run in the pull request.

For schema changes, create a Prisma migration and verify the generated client:

```bash
npx prisma migrate dev
npx prisma generate
```

## Pull requests

Pull requests should include:

- A concise explanation of the user or maintenance problem.
- The behavior that changed and any provider or migration implications.
- Validation commands and their results.
- Screenshots or a short recording for meaningful UI changes.
- Notes about new environment variables, webhook configuration, or rollout
  steps.

Keep commits focused, avoid drive-by formatting, and do not rewrite unrelated
history. Review your diff for secrets and generated files before submitting.
