# aybasaran.github.io

Personal site of Ahmet Yusuf Başaran. Built with [Nuxt 4](https://nuxt.com) and [Nuxt UI](https://ui.nuxt.com), deployed to [GitHub Pages](https://aybasaran.github.io).

## Setup

```bash
pnpm install
```

## Development

```bash
pnpm dev        # dev server at http://localhost:3000
pnpm lint:fix   # lint + format (ESLint stylistic, no Prettier)
pnpm typecheck  # vue-tsc
```

VS Code: ESLint is the formatter — `.vscode/settings.json` silences stylistic rules in the editor and fixes them on save; recommended extensions are in `.vscode/extensions.json`.

## Deployment

Every push runs lint + typecheck; pushes to `main` also generate the static site (`nuxt generate` with the `github_pages` Nitro preset) and deploy it to GitHub Pages — see [.github/workflows/ci.yml](.github/workflows/ci.yml).

Dependencies are pinned exactly and guarded by pnpm's `minimumReleaseAge`; [Renovate](https://github.com/apps/renovate) keeps them updated.
