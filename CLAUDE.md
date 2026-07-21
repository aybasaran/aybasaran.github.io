# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # dev server at http://localhost:3000
pnpm lint       # ESLint (flat config via @nuxt/eslint)
pnpm lint:fix   # lint + format — ESLint stylistic is the formatter, no Prettier
pnpm typecheck  # vue-tsc via nuxt typecheck
pnpm generate   # static site (deployed build uses NITRO_PRESET=github_pages)
```

No test suite. CI (`.github/workflows/ci.yml`) runs lint + typecheck on every push; pushes to `main` also run `nuxt generate` and deploy to GitHub Pages.

## Architecture

Single-page personal site (CV/portfolio): Nuxt 4 + Nuxt UI 4 + @nuxtjs/i18n, statically prerendered (`/` and `/en/` in `routeRules`) and served from GitHub Pages at https://aybasaran.github.io.

- `app/pages/index.vue` — the entire page. Job/skill data lives in its `<script setup>` as plain arrays; job entries reference locale keys (`jobs.<key>.dates` / `.desc`) for translated text.
- `app/app.vue` — wraps everything in `UApp`, wires the Nuxt UI locale to the active i18n locale, and sets head/SEO meta via `useLocaleHead` + `useSeoMeta`.
- `app/components/SiteHeader.vue` — nav, locale switcher, color-mode toggle.
- `i18n/locales/{tr,en}.json` — all user-facing strings. `tr` is the default locale (`prefix_except_default` strategy, trailing slashes), so `/` is Turkish and `/en/` is English. Any string change must touch both files.

## Theming

- Colors: `app/app.config.ts` sets Nuxt UI colors (primary `amber`, neutral `zinc`); `app/assets/css/main.css` overrides the `--ui-*` CSS variables directly for both light and dark (`.dark`) — edit these vars, not Tailwind config, to change the palette.
- Font is Geomini via `fonts.families` in `nuxt.config.ts`.
- Known/intentional: primary `#d97706` (amber) and the dimmed text tokens fail WCAG AA contrast — kept deliberately for the design. Don't "fix" contrast without asking.

## Conventions

- ESLint stylistic rules come from `nuxt.config.ts` (`eslint.config.stylistic`): no trailing commas, 1tbs braces.
- Dependencies are pinned exactly (`savePrefix: ''` in `pnpm-workspace.yaml`) and gated by `minimumReleaseAge`; Renovate handles updates. Don't add version ranges.
- `pnpm-workspace.yaml` `allowBuilds` explicitly disables all postinstall build scripts — new deps needing build scripts must be added there deliberately.
