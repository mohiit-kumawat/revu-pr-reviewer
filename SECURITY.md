# Security policy

revu handles GitHub authentication, GitHub App installations, repository
content, generated review output, and subscription webhooks. Please report
security issues responsibly and avoid testing against accounts, repositories,
or deployments that you do not own.

## Reporting a vulnerability

Use GitHub's private vulnerability reporting flow from the repository's
**Security** tab when it is available. If private reporting is not enabled,
contact the repository maintainers through a private channel associated with
the repository rather than opening a public issue.

Include:

- A clear description of the issue and its impact.
- The affected route, component, or integration.
- Reproduction steps or a minimal proof of concept.
- Any logs, versions, or configuration details needed to reproduce it.
- Whether the issue may expose credentials, repository content, or user data.

Please do not include real secrets, tokens, private keys, or private
repository content in a report.

## Scope and safe testing

Relevant security surfaces include:

- Better Auth sessions and GitHub OAuth callbacks.
- GitHub App installation state and webhook signature verification.
- Inngest event handling and background review jobs.
- PostgreSQL and Prisma access control.
- Pinecone namespaces and repository synchronization.
- OpenRouter prompts and generated review content.
- Razorpay checkout and subscription webhooks.

Only test with accounts, repositories, provider applications, and databases
you control. Do not attempt denial-of-service testing, social engineering,
credential harvesting, or access to another user's data.

## Maintainer guidance

Rotate exposed credentials immediately, preserve relevant logs, and assess
whether GitHub installations, sessions, repository content, or billing state
could have been affected. Coordinate disclosure with the reporter before
publishing technical details.

This document describes the project's reporting expectations; it is not a
guarantee of a particular response time or security certification.
