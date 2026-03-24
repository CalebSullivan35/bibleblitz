# Bible Blitz

An equal blend of quiz game and Bible study/reference tool. Users learn the books of the Bible through fast-paced drills and a browsable reference organized by testament and division.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript (strict mode)
- **Auth:** Clerk (`@clerk/nextjs` — latest is v6+, see gotchas)
- **Database:** Neon Postgres via Drizzle ORM
- **UI:** shadcn (base-ui variant, not Radix), Tailwind CSS, Lucide icons
- **State:** Zustand
- **Animation:** Motion
- **Analytics:** PostHog
- **Package manager:** Yarn 1 (`yarn`, not npm/pnpm)

## Commands

- `yarn dev` — start dev server
- `yarn build` — production build (use to verify changes)
- `yarn lint` — run ESLint
- `db:push` — push Drizzle schema to Neon
- `db:studio` — open Drizzle Studio

## Project Structure

```
src/
├── app/
│   ├── components/     # App-level components (Sidebar, BookGrid, BookCard)
│   ├── about/          # /about page
│   ├── explore/        # /explore hub page
│   │   ├── old-testament/  # /explore/old-testament page
│   │   └── new-testament/  # /explore/new-testament page
│   ├── play/           # /play hub page (placeholder)
│   ├── layout.tsx      # Root layout (ClerkProvider, PostHog, Sidebar)
│   ├── page.tsx        # Home page
│   ├── providers.tsx   # PostHog provider (client component)
│   └── globals.css
├── components/ui/      # shadcn components (button, card, sheet)
├── data/
│   └── BibleBooks.ts   # Static data: all 66 books with testament, division, chapters
├── db/
│   ├── schema.ts       # Drizzle schema (userHighScoreTable)
│   ├── index.ts        # DB connection (Neon)
│   └── actions.ts      # Server actions (high scores, leaderboard)
├── lib/
│   └── utils.ts        # cn() utility
├── middleware.ts        # Clerk middleware
└── types/
    └── biblebooks.ts   # BibleBook interface
```

## Coding Conventions

### Components
- One component per file, named export (not default). Exception: page/layout files use default exports per Next.js convention.
- App-level components go in `src/app/components/`. Reusable UI primitives (shadcn) go in `src/components/ui/`.
- Keep components as server components by default. Only add `"use client"` when the component needs interactivity (hooks, event handlers, browser APIs).

### Styling
- Use Tailwind utility classes exclusively — no CSS modules, no inline `style` props.
- Use the `cn()` helper from `@/lib/utils` to merge conditional classes.
- Prefer shadcn components over custom markup when a suitable primitive exists.

### TypeScript
- Define shared types/interfaces in `src/types/`. Co-located types (only used in one file) can stay in that file.
- Use `type` imports (`import type { Foo }`) when importing only types.
- Prefer interfaces for object shapes, type aliases for unions/utility types.

### Data & State
- Static reference data lives in `src/data/`.
- Server actions live in `src/db/actions.ts`.
- Client-side state will use Zustand stores (not yet in use — planned for game loop state like score, timer, round progress).

### General
- Always verify changes with `yarn build` before considering work complete.
- Keep pages and components simple — avoid premature abstraction.

## Key Patterns

- **Path alias:** `@/*` maps to `./src/*`
- **shadcn uses base-ui, not Radix.** Components use the `render` prop for composition (not `asChild`). Example: `<SheetTrigger render={<Button />}>` instead of `<SheetTrigger asChild><Button /></SheetTrigger>`.
- **Server vs Client:** Pages are server components by default. Interactive components (Sidebar, providers) use `"use client"`.
- **Static data:** Bible book data lives in `src/data/BibleBooks.ts`, typed with `BibleBook` from `src/types/biblebooks.ts`. Divisions use singular form in data ("Major Prophet") — display labels are pluralized in `BookGrid`.

## Gotchas

- **Clerk v6+** does not export `SignedIn` or `SignedOut`. Use `useAuth()` hook (`isSignedIn`) in client components instead.
- **shadcn add command:** Use `npx shadcn@latest add <component>` to add new shadcn components.
- **Middleware deprecation:** Next.js 16 warns that `middleware` convention is deprecated in favor of `proxy`. The Clerk middleware still works but may need migration.

## Current Status

- Static pages are built: Home, About, Explore (hub + Old Testament + New Testament), Play (placeholder)
- Left sidebar navigation with collapsible sections, desktop collapse toggle, and mobile Sheet drawer
- Game/drill mode is **not yet rebuilt** — the Play CTA on Home is a disabled placeholder
- Leaderboard/stats pages are deferred until the game loop is rebuilt
- Individual book detail pages are deferred to a future phase
- DB schema exists for high scores from the previous version

## Roadmap

### Vision
Bible Blitz is more than a books-of-the-Bible quiz — it's a holistic Bible learning platform combining interactive games with rich study content.

### Study / Reference Content (`/explore`)
- **Book detail pages** — intro, author, date, outline, key themes for each of the 66 books
- **Division overviews** — what ties books in each division together
- **People of the Bible** — major figures with timelines and cross-references to books
- **Key passages / memory verses** — organized by topic or book
- **Timeline** — major events in chronological order across both testaments
- **Teachings** — static content on scripture's themes and doctrine

### Game Modes (`/play`)
- **Books drill** (original) — identify book by division, order, chapter count
- **Verse lookup** — given a reference, pick the correct passage (or vice versa)
- **People & places** — match figures to books, events, or time periods
- **Order challenge** — arrange books, events, or kings in correct sequence
- **Division sorting** — drag books into the right division/testament
- **Topic quiz** — questions drawn from study content

All game modes share a common game shell: timer, scoring, round management (Zustand), with routes like `/play/books-drill`, `/play/verse-lookup`, etc.

### XP & Leveling System
- Earn XP from any game mode — scales with difficulty, speed, and accuracy
- XP thresholds define levels (could be linear or gradually increasing)
- **XP sources:** completing rounds, accuracy/streak bonuses, daily engagement bonus, exploring study content
- **DB:** `user_progress` table alongside existing `user_high_score` — stores total XP, current level, per-game-mode stats, game history for trends
- **Display:** level badge in NavBar/leaderboard, progress bar toward next level, profile/stats page with per-mode breakdown
- Leaderboard can rank by level/total XP in addition to single-game high scores

### Next Up
1. Rebuild the books drill game mode (first playable game)
2. XP system and user progress tracking
3. Book detail pages (first study content)
4. Additional game modes

## Environment Variables

Required in `.env.local`:
- `DATABASE_URL` — Neon Postgres connection string
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` / `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_POSTHOG_KEY` / `NEXT_PUBLIC_POSTHOG_HOST`
