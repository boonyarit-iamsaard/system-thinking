# Agent instructions

This repo is a personal systems-thinking course run with the `/teach` skill. Before teaching, read [MISSION.md](MISSION.md), [NOTES.md](NOTES.md) and the files in [learning-records/](learning-records/) to find where the learner stands. Draw knowledge from [RESOURCES.md](RESOURCES.md), not from memory.

## Layout

| Path                  | What it holds                                                              |
| --------------------- | -------------------------------------------------------------------------- |
| `MISSION.md`          | Why the learner is studying this; every lesson ties back to it             |
| `RESOURCES.md`        | Verified sources (knowledge) and communities (wisdom), plus known gaps     |
| `NOTES.md`            | Teaching preferences and working notes                                     |
| `GLOSSARY.md`         | Canonical terms, added only once the learner has shown they understand one |
| `learning-records/`   | `0001-slug.md`, ADR-style records of demonstrated understanding            |
| `lessons/0001-*.html` | One short, self-contained lesson per file                                  |
| `reference/*.html`    | Printable cheat sheets distilled from lessons                              |
| `assets/`             | Shared components: `course.css`, `quiz.js`, `prediction.js`                |

Every lesson and reference page links `assets/course.css`. Reuse the existing components before writing new ones, and put anything a second lesson could use in `assets/`.

## Keep files tidy

Every file you create or edit must pass the project's formatter and linter. The rules live in config, not here:

- Prettier: [.prettierrc.json](.prettierrc.json), [.prettierignore](.prettierignore). Covers `md`, `json`, `yaml`, `yml`, `html`, `css`, `js`.
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
- Number lessons and learning records with four digits, then a kebab-case slug.
- Cite a source from `RESOURCES.md` for every claim in a lesson.
