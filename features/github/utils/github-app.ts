import { App } from '@octokit/app';

let githubApp: App | null = null;

export function getGithubApp(): App {
  if (!githubApp) {
    githubApp = new App({
      appId: process.env.GITHUB_APP_ID!,
      privateKey: process.env.GITHUB_APP_PRIVATE_KEY!.replace(/\\n/g, '\n'),
      webhhooks:{
        secret:process.env.GITHUB_APP_WEBHOOK_SECRET!,
      }
    });
  }
  return githubApp;
}

export function getGithubInstallUrl( userId: string) {
  const url = new URL(`https://github.com/apps/revu-pr-reviewer/installations/new`);
  url.searchParams.set('state', userId);
  return url.toString();
}     