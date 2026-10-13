# revu

**Context-aware AI pull-request reviews for GitHub.**

revu connects to GitHub, indexes a repository's codebase, and generates an
AI-assisted review for new or updated pull requests. It is designed for teams
that want review feedback grounded in the surrounding repository rather than
only the lines changed in a pull request.

## What it does

- Signs users in with GitHub OAuth.
- Connects a user's GitHub account through the revu GitHub App.
- Lists repositories available to the GitHub App installation.
- Synchronizes repository files into Pinecone vector storage for retrieval.
- Receives `opened`, `synchronize`, and `reopened` pull-request webhook events.
- Fetches pull-request files, chunks the diff, and generates a review through
  OpenRouter.
- Stores review status and generated review text in PostgreSQL.
- Tracks free usage and Pro subscriptions through Razorpay webhooks.
- Provides an authenticated dashboard for review activity, repositories, sync
  status, GitHub connection, and settings.

The public landing page also includes a sample review preview. The application
is currently under active development; verify provider configuration and
production readiness for your deployment before inviting users.

## User journey

1. Visit the landing page and sign in with GitHub.
2. Install the revu GitHub App for the account or repositories to review.
3. Choose a repository and request a codebase sync.
4. Open, update, or reopen a pull request in an installed repository.
5. GitHub sends the event to revu. The webhook is verified before the pull
   request is queued.
6. An Inngest worker fetches and chunks the pull-request files, generates a
   review using repository context, and saves the result for the dashboard.

The free plan currently allows five reviewed pull requests per calendar month.
An active Pro subscription is not capped by the application-level usage check.

## Architecture

```text
Browser
  -> Next.js App Router pages and API routes
  -> Better Auth + GitHub OAuth
  -> PostgreSQL via Prisma

GitHub App webhook
  -> signature verification
  -> pull-request record
  -> Inngest event
  -> diff chunking + OpenRouter review
  -> PostgreSQL review result

Repository sync
  -> GitHub repository files
  -> chunks and embeddings
  -> Pinecone namespace
  -> retrieval context for reviews

Razorpay webhook
  -> subscription status and plan updates in PostgreSQL
```

### Project map

| Path | Responsibility |
| --- | --- |
| [`app/`](./app) | App Router pages, layouts, and HTTP route handlers |
| [`components/`](./components) | Shared UI and landing-page components |
| [`features/auth/`](./features/auth) | Authentication actions, UI, and route protection |
| [`features/github/`](./features/github) | GitHub App integration, repositories, and webhooks |
| [`features/repo-sync/`](./features/repo-sync) | Repository synchronization and vector indexing |
| [`features/reviews/`](./features/reviews) | Pull-request retrieval, chunking, and AI review jobs |
| [`features/inngest/`](./features/inngest) | Inngest client and event-driven background functions |
| [`features/billing/`](./features/billing) | Razorpay subscriptions and usage limits |
| [`lib/`](./lib) | Database, authentication, and shared utilities |
| [`prisma/`](./prisma) | PostgreSQL schema and migrations |

## Requirements

- Node.js compatible with the installed Next.js 16 toolchain
- npm
- PostgreSQL
- A GitHub OAuth application
- A GitHub App with pull-request webhook delivery
- An Inngest application or local Inngest dev server
- A Pinecone index
- An OpenRouter API key
- Razorpay credentials if subscription billing is enabled

## Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a local environment file:

   ```bash
   cp .env.example .env.local
   ```

   `.env.example` is not committed in this repository yet. Create
   `.env.local` manually using the variable names below, and keep all values
   private.

3. Configure PostgreSQL and set `DATABASE_URL`.

4. Apply Prisma migrations:

   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable | Used for |
| --- | --- |
| `DATABASE_URL` | PostgreSQL connection used by Prisma |
| `GITHUB_CLIENT_ID` | GitHub OAuth client ID for sign-in |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth client secret |
| `GITHUB_APP_ID` | GitHub App numeric ID |
| `GITHUB_APP_PRIVATE_KEY` | GitHub App private key; escaped newlines are converted at runtime |
| `GITHUB_WEBHOOK_SECRET` or `GITHUB_APP_WEBHOOK_SECRET` | GitHub webhook signature verification |
| `OPENROUTER_API_KEY` | OpenRouter model access for review generation |
| `PINECONE_API_KEY` | Pinecone authentication |
| `PINECONE_INDEX` | Pinecone index name |
| `RAZORPAY_KEY_ID` | Razorpay server-side key ID |
| `RAZORPAY_KEY_SECRET` | Razorpay server-side key secret |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Razorpay key ID exposed to the browser checkout |
| `RAZORPAY_PLAN_ID` | Razorpay subscription plan ID |
| `RAZORPAY_WEBHOOK_SECRET` | Razorpay webhook verification |

Provider callback and webhook URLs must point to the corresponding deployed
routes:

- GitHub OAuth callback: `/api/auth/callback/github`
- GitHub App callback: `/api/github/callback`
- GitHub webhook: `/api/github/webhook`
- Razorpay webhook: `/api/razorpay/webhook`
- Inngest endpoint: `/api/inngest`

The exact callback URL shown in each provider's console may depend on the
deployment hostname and Better Auth configuration.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Next.js in development mode with webpack |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm start` | Start the production Next.js server |
| `npx prisma migrate dev` | Create/apply local database migrations |
| `npx prisma generate` | Generate the Prisma client |

## Data and integrations

The application stores users, sessions, GitHub installations, pull-request
metadata, review output, repository-sync state, and subscription fields in
PostgreSQL. Repository sync data is written to Pinecone, and review generation
uses OpenRouter. GitHub and Razorpay send webhook requests to the application.

Do not commit environment files, provider credentials, GitHub private keys, or
production database URLs. The repository ignores `.env*` files and generated
Prisma output by default.

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the local workflow and quality
checks, and [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md) for community
expectations. Security-sensitive reports should follow
[`SECURITY.md`](./SECURITY.md).

## License

This project is licensed under the [MIT License](./LICENSE).
