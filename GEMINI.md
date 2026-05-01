# Project: sebastiandotdev

This is the personal website and portfolio of Joan Sebastian García (@sebastiandotdev), a software developer from Colombia.

## Tech Stack
- **Framework:** [Nuxt 4](https://nuxt.com/) (Vue 3)
- **Styling:** [UnoCSS](https://unocss.dev/) with `presetWind4`
- **Internationalization:** [@nuxtjs/i18n](https://i18n.nuxtjs.org/) (English & Spanish)
- **Icons:** [Iconify](https://iconify.design/) (Solar set via `@iconify-json/solar`)
- **Fonts:** [Geist](https://vercel.com/font) (Sans & Mono)
- **Tooling:** [oxlint](https://oxc-project.github.io/docs/guide/usage/linter.html) & [oxfmt](https://oxc-project.github.io/docs/guide/usage/formatter.html)
- **Package Manager:** `pnpm`

## Architecture & Directory Structure
This project follows the **Nuxt 4** directory structure.

## Development Conventions
- **Styling:** Use UnoCSS utility classes. Avoid custom CSS unless necessary (use `uno.config.ts` for theme extensions).
- **Internationalization:** Always use `$t()` for user-facing strings. Locales are managed in `i18n/locales/`.
- **Components:** Follow the `TheComponent.vue` naming convention for singleton components (layouts/nav) and `BaseComponent.vue` or descriptive names for others.
- **TypeScript:** Use `<script lang="ts" setup>` for all Vue components.
- **Linting:** Ensure code passes `pnpm lint` before committing.

## Agent Integration
The project includes specific instructions for Gemini in `.gemini/skills/`. Use these skills when working on Nuxt or UnoCSS related tasks.
