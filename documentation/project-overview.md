# Bible Blitz — Project Overview

**Bible Blitz** is a gamified Bible learning web app that helps users memorize the order of Bible books through timed multiple-choice quizzes.

## Tech Stack

- **Framework:** Next.js 14 (App Router) with TypeScript
- **Styling:** TailwindCSS + DaisyUI, Framer Motion for animations
- **State:** Zustand (game state), TanStack React Query (server state)
- **Database:** Neon PostgreSQL via Drizzle ORM (stores high scores)
- **Auth:** Clerk
- **Analytics:** PostHog

## Core Game Mechanic

The main game presents a Bible book and asks "What comes next?" with 4 multiple-choice options. A countdown timer (default 10s per round) adds pressure. Features include:

- Streak tracking (fire indicator at 4+ consecutive correct)
- Instant visual feedback (green/red answer highlighting)
- Score persistence — high scores saved to Postgres per user
- Game over screen with accuracy percentage and stats

## Routes

| Route | Description |
|---|---|
| `/` | Landing page with features and CTAs |
| `/learn` | Main game interface |
| `/oldtestament` | Browse 39 OT books by division |
| `/newtestament` | Browse 27 NT books by division |
| `/[book]` | Dynamic book detail (placeholder) |
| `/stats` | User stats (placeholder) |
| `/about` | About page (placeholder) |

## Key Directories

- `src/app/components/` — Game UI components (GameScreen, GameToolbar, GameOptions, GameOverScreen, etc.)
- `src/Stores/` — Zustand stores for game and practice tool state
- `src/data/BibleBooks.ts` — All 66 books with metadata (testament, division, chapter count)
- `src/db/` — Drizzle schema, DB connection, server actions for high scores
- `src/helpers/gamehelper.ts` — Game logic (random book selection, answer shuffling)

## In-Progress / Stub Features

- **Stats page** and **About page** are placeholders (sasquatch images)
- **GameSettings modal** exists but isn't fully wired up
- **Book detail pages** show "Coming soon" for detailed info
- **Practice tool store** exists as an alternative game mode concept

## Data Model

The `user_high_score` table stores: `userId`, `score`, `userName`, `userImage`, `createdAt`. Server actions handle create/update/read operations.

## Bible Content Data

All 66 books are stored in `src/data/BibleBooks.ts` with metadata:

- **Old Testament (39 books):** Law, History, Poetry, Major Prophet, Minor Prophet
- **New Testament (27 books):** Gospel Account, Church History, Pauline Epistle, General Epistle, Prophecy

Each book entry includes: name, testament, division, and chapter count.

## Key Components

| Component | Purpose |
|---|---|
| `NavBar` | Sidebar navigation with menu items |
| `BibleGame` | Game wrapper, switches between GameScreen/GameOverScreen |
| `GameScreen` | Main game UI: current book + answer options + next button |
| `GameToolbar` | Timer display, streak counter, game settings |
| `GameOptions` | 4 multiple-choice buttons with visual feedback |
| `GameFeedback` | Correct/Incorrect text feedback |
| `GameOverScreen` | Results screen with accuracy percentage, restart button |
| `BookCard` | Link card for individual Bible books |

## Authentication & Data Persistence

- **Clerk** handles user sign-in/sign-out and profile display
- High scores are persisted per user in Neon PostgreSQL
- Server actions: `createNewUserHighScore()`, `updateUserHighScore()`, `getUserHighScore()`

## Analytics

- **PostHog** tracks page views and game events (e.g. `GamePlayed` on restart)
- Configured with `identified_only` profile mode
