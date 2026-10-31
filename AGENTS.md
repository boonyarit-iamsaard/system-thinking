# Agent instructions

This repo is a personal systems-thinking course: Markdown lessons, exercises and a progress log. Read [learning-log.md](learning-log.md) before teaching; it records where the course stands.

## Keep files tidy

Every file you create or edit must pass the project's formatter and linter. The rules live in config, not here:

- Prettier: [.prettierrc.json](.prettierrc.json), [.prettierignore](.prettierignore) — covers `md`, `json`, `yaml`, `yml`, `html`
- markdownlint: [.markdownlint.json](.markdownlint.json)

Before you finish any task that touched files, run:

```bash
pnpm fix
```

```bash
pnpm lint
```

`pnpm lint` must pass. If it fails after `pnpm fix`, fix the remaining issues by hand. Don't disable rules or add ignore comments to get it green.

If `node_modules` is missing, run `pnpm install` first (Node ≥ 24.22.1, pnpm 11).

A git pre-commit hook ([.githooks/pre-commit](.githooks/pre-commit)) runs `pnpm lint` and blocks the commit on failure. Don't bypass it with `--no-verify`. If hooks aren't active in a fresh clone, run `pnpm run prepare`.

## Conventions

- One `#` heading per Markdown file, and headings don't skip levels.
- Every fenced code block names its language (`bash`, `mermaid`, `text`, …). Plain-text diagrams use `text`.
- Keep line endings LF. Don't reformat `pnpm-lock.yaml`.
- Name new lesson or exercise files in kebab-case.
