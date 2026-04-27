# /migrate-sawad-clone

Migrate the **Sawad portfolio clone** from the legacy project at
`/Users/derrint/Work/Derrint/sawad-clone/` into **this** freshly scaffolded
`create-next-app` project. Adapt the code to whatever conventions this project
already uses (Tailwind v3 vs v4, `src/` vs root, App Router defaults, etc.) —
don't blindly copy.

> Copy this file into your new project's `.cursor/commands/` folder, then type
> `/migrate-sawad-clone` in chat.

---

## 0. Detect this project's conventions before copying anything

Run these checks first and remember the results — every subsequent step depends
on them:

1. **`src/` layout?** — does this project have `src/app/` or `app/` at the root?
   Use whichever exists for all destination paths below.
2. **Tailwind version?** — read `package.json` and look at `tailwindcss`. If
   `^4.x` → use the **Tailwind v4** branch in §4. If `^3.x` → use the **v3**
   branch.
3. **Path alias?** — read `tsconfig.json` for `paths`. If `@/*` maps to `./src/*`,
   then `@/components/...` resolves to `src/components/...`. If it maps to
   `./*`, no `src/` prefix.
4. **Existing files** — `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
   already exist from the scaffold. **Replace contents**, don't create
   duplicates.
5. **PostCSS config** — Tailwind v4 uses `@tailwindcss/postcss`, v3 uses
   `tailwindcss`. Don't touch this if the scaffold set it up correctly.

State the detected stack to the user before proceeding.

---

## 1. Source of truth

All code lives at:

```
/Users/derrint/Work/Derrint/sawad-clone/
```

Use the `Read` tool on each file below — **never** copy raw content from this
prompt. Files there are the canonical source.

---

## 2. Target folder layout (kebab-case, App Router)

Copy these files **preserving the folder hierarchy**. If the project uses
`src/`, prepend `src/` to every destination path.

### Data layer (new top-level folder)

| Source                                                | → | Destination               |
| ----------------------------------------------------- | - | ------------------------- |
| `data/nav.ts`                                         | → | `data/nav.ts`             |
| `data/profile.ts`                                     | → | `data/profile.ts`         |
| `data/hero.ts`                                        | → | `data/hero.ts`            |
| `data/projects.ts`                                    | → | `data/projects.ts`        |
| `data/experience.ts`                                  | → | `data/experience.ts`      |
| `data/tools.ts`                                       | → | `data/tools.ts`           |
| `data/thoughts.ts`                                    | → | `data/thoughts.ts`        |

### Components — split by responsibility

| Source                                                | → | Destination                                |
| ----------------------------------------------------- | - | ------------------------------------------ |
| `components/icons.tsx`                                | → | `components/icons.tsx`                     |
| `components/layout/navbar.tsx`                        | → | `components/layout/navbar.tsx`             |
| `components/layout/footer.tsx`                        | → | `components/layout/footer.tsx`             |
| `components/sections/hero.tsx`                        | → | `components/sections/hero.tsx`             |
| `components/sections/recent-projects.tsx`             | → | `components/sections/recent-projects.tsx`  |
| `components/sections/experience.tsx`                  | → | `components/sections/experience.tsx`       |
| `components/sections/premium-tools.tsx`               | → | `components/sections/premium-tools.tsx`    |
| `components/sections/design-thoughts.tsx`             | → | `components/sections/design-thoughts.tsx` |
| `components/sections/contact-form.tsx`                | → | `components/sections/contact-form.tsx`     |
| `components/ui/section.tsx`                           | → | `components/ui/section.tsx`                |
| `components/ui/section-heading.tsx`                   | → | `components/ui/section-heading.tsx`        |
| `components/ui/profile-card.tsx`                      | → | `components/ui/profile-card.tsx`           |
| `components/ui/stat-card.tsx`                         | → | `components/ui/stat-card.tsx`              |
| `components/ui/tag-card.tsx`                          | → | `components/ui/tag-card.tsx`               |
| `components/ui/project-card.tsx`                      | → | `components/ui/project-card.tsx`           |
| `components/ui/experience-item.tsx`                   | → | `components/ui/experience-item.tsx`        |
| `components/ui/tool-card.tsx`                         | → | `components/ui/tool-card.tsx`              |
| `components/ui/thought-card.tsx`                      | → | `components/ui/thought-card.tsx`           |

### App entry — overwrite scaffolded versions

| Source                                                | → | Destination                                |
| ----------------------------------------------------- | - | ------------------------------------------ |
| `app/page.tsx`                                        | → | `app/page.tsx` (or `src/app/page.tsx`)     |
| `app/layout.tsx`                                      | → | `app/layout.tsx` (replace, see §3)         |
| `app/globals.css`                                     | → | `app/globals.css` (merge or replace, §4)   |

---

## 3. `app/layout.tsx` adaptation

The source uses `next/font/google` for `Inter` (body) + `Poppins` (display)
exposed as CSS variables `--font-sans` and `--font-display`. Keep this approach
verbatim. The metadata strings (`title`, `description`) reference Lorensio
Derrint — keep them.

If the scaffolded `layout.tsx` already imports a font (e.g. Geist), **replace**
that import with the Inter + Poppins setup from the source.

---

## 4. Tailwind setup — branches by version

### 4a. Tailwind v3 branch

If this project uses Tailwind 3:

1. **Replace** `tailwind.config.ts` with the source version. It defines the
   custom `ink.*` palette, `accent`, `font-sans` / `font-display` mapped to the
   CSS vars from §3, and `letterSpacing.tightest`.
2. **Replace** `app/globals.css` contents with the source version. It uses
   `@tailwind base/components/utilities` and contains:
   - `.container-site`, `.pill`, `.card-surface`, `.heading-display` in
     `@layer components`
   - `.text-outline`, `.grain` in `@layer utilities`
   - `color-scheme: light` in `:root`

### 4b. Tailwind v4 branch (most likely with a fresh `create-next-app`)

Tailwind v4 dropped `tailwind.config.ts` in favour of CSS-first theming. **Do
not** copy `tailwind.config.ts`. Instead, port everything into
`app/globals.css`:

```css
@import "tailwindcss";

@theme {
  --color-ink-50: #f6f6f5;
  --color-ink-100: #e7e6e3;
  --color-ink-200: #c9c7c1;
  --color-ink-300: #a8a59c;
  --color-ink-400: #7d7a70;
  --color-ink-500: #56534b;
  --color-ink-600: #3a3833;
  --color-ink-700: #26241f;
  --color-ink-800: #181714;
  --color-ink-900: #0f0e0c;
  --color-ink-950: #070605;

  --color-accent: #e8ff5a;
  --color-accent-soft: #f2ff8a;

  --font-sans: var(--font-sans);
  --font-display: var(--font-display);

  --tracking-tightest: -0.04em;
}

:root {
  color-scheme: light;
}

html,
body {
  @apply bg-ink-50 text-ink-900 antialiased;
  font-feature-settings: "ss01", "cv11";
}

::selection {
  @apply bg-accent text-ink-950;
}

@layer components {
  .container-site {
    @apply mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8;
  }
  .pill {
    @apply inline-flex items-center gap-2 rounded-full border border-ink-200
           bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-wider
           text-ink-600 backdrop-blur;
  }
  .card-surface {
    @apply rounded-3xl border border-ink-200 bg-white/70 backdrop-blur
           transition-colors duration-300;
  }
  .card-surface:hover {
    @apply border-ink-300 bg-white;
  }
  .heading-display {
    @apply font-display tracking-tightest text-ink-950;
  }
}

@utility text-outline {
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(15, 14, 12, 0.28);
}

@utility grain {
  background-image:
    radial-gradient(rgba(0, 0, 0, 0.045) 1px, transparent 1px),
    radial-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  background-size: 3px 3px, 5px 5px;
  background-position: 0 0, 1px 2px;
}
```

> **Why `@utility` not `@layer utilities`?** Tailwind v4 promotes `@utility` for
> custom utilities (variants like `hover:` and `lg:` work automatically).
> Custom letter-spacing flows through `--tracking-*` tokens.

After porting, **delete** the scaffolded `tailwind.config.ts` and any
`postcss.config.js` that still references the v3 plugin name — the scaffold's
`@tailwindcss/postcss` plugin is correct for v4.

---

## 5. Code-level adaptations

- All source imports use the `@/` alias. Verify it's set up in `tsconfig.json`.
  If the project uses `src/`, `@/*` → `./src/*` and the imports work as-is.
- The source targets React 18 + Next 14. Compatible with React 19 + Next 16
  out of the box — no JSX/typing changes needed.
- `components/sections/contact-form.tsx` uses `"use client"` and `<style jsx>`.
  `<style jsx>` ships in Next via `styled-jsx` which is bundled by default —
  works in Next 14/15/16 unchanged.
- The `ContactForm` `setTimeout` is a stub — leave it; it's flagged as a
  placeholder in the comments.

---

## 6. Cleanup

After copying, delete any scaffolded boilerplate files that are no longer used:

- `public/next.svg`, `public/vercel.svg`, `public/file.svg`, `public/globe.svg`,
  `public/window.svg` — none are referenced.
- Any default CSS module files like `app/page.module.css`.

---

## 7. Verification

Run all of these and report the output back:

```bash
pnpm install                  # or npm / yarn / bun, match the lockfile
pnpm lint                     # zero errors expected
pnpm build                    # ✓ Compiled successfully expected
pnpm dev                      # smoke-test the dev server
```

Visually verify:

- ✅ Tiny icon-only navbar pill centred at top
- ✅ Hero shows light profile card on the left + `SOFTWARE` (solid) /
  `ENGINEER` (outlined) headline on the right
- ✅ Three stats `+12 / +46 / +20`
- ✅ Two coloured tag cards (orange `Dynamic Animation…`, lime `Framer, Figma…`)
- ✅ Vertical project list with thumbnails + arrow buttons
- ✅ Experience rows separated by hairline borders
- ✅ 2-column tools grid with branded icon tiles
- ✅ Three article cards in `Design Thoughts`
- ✅ Contact form, light theme, orange focus rings
- ✅ Minimal footer with social links

---

## 8. What NOT to copy

- `node_modules/`, `.next/`, `pnpm-lock.yaml` — let this project's package
  manager regenerate them.
- `package.json` and `tsconfig.json` — keep the scaffold's. Only add missing
  dependencies (none required beyond what `create-next-app` ships).
- `next.config.mjs` / `next-env.d.ts` — already present in the scaffold.
- `.eslintrc.json` — the scaffold uses `eslint.config.mjs` (flat config) on
  modern Next versions; do not regress to legacy.
- `README.md` — write a fresh one for the new project if needed.

---

## 9. Final report

When done, output:

1. The detected stack (Tailwind version, `src/` layout, path alias).
2. A bullet list of every file you wrote / replaced / deleted.
3. The result of `pnpm lint` and `pnpm build`.
4. Any deviations from this command's plan and the reason for each.
