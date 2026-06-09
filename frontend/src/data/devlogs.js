/**
 * devlogs.js
 *
 * Static devlog/article data for the HuyDung Lab portfolio.
 * Entries are drafts or planned posts — not published until content is written and reviewed.
 *
 * Schema:
 *   slug                 — kebab-case unique identifier (also used as URL param)
 *   title                — article title
 *   date                 — approximate date string (broad if exact is unknown)
 *   excerpt              — one or two sentence summary shown in list view
 *   tags                 — array of topic tags
 *   readingTime          — rough estimate (e.g. "5 min read")
 *   relatedProjectSlug   — slug from projects.js, or "" if not linked
 *   status               — "Draft" | "Planned" | "Published"
 *   content              — array of paragraph strings (empty for Planned; brief draft for Draft)
 *
 * Note:
 *   content is intentionally minimal here — full article bodies belong in a future
 *   content management layer (admin dashboard or CMS), not in a static data file.
 */

export const devlogs = [
  {
    slug: "what-i-learned-deploying-spring-boot",
    title: "What I learned from deploying my first Spring Boot app",
    date: "2025",
    excerpt:
      "Deploying to Render was harder than writing the code. Cold starts, environment variables, " +
      "Supabase schema mismatches — here's what actually went wrong and how I fixed it.",
    tags: ["Spring Boot", "Deployment", "Render", "Supabase", "PostgreSQL", "Production"],
    readingTime: "6 min read",
    relatedProjectSlug: "wordarena",
    status: "Draft",
    content: [
      "When I first deployed WordArena's Spring Boot backend to Render, I assumed the hard part was already done — the app ran perfectly on localhost. I was wrong.",
      "The first issue was a schema mismatch. My local PostgreSQL schema had diverged from Supabase's state because I'd been running manual ALTER statements locally and never committed a proper migration. The app crashed on startup.",
      "Cold starts on Render's free tier added another layer of friction. The first request after a period of inactivity could take 20–30 seconds to respond, which confused users who assumed the app was broken.",
      "I also underestimated OAuth2 session behavior in a deployed environment. Redirect URIs, allowed origins, and cookie settings that worked on localhost required careful reconfiguration for the production domain.",
      "The main lesson: treat your database schema as code from day one. Use migrations. Test your environment variables. Understand what free-tier hosting trade-offs actually mean for user experience.",
    ],
  },

  {
    slug: "local-first-sync-is-harder-than-it-looks",
    title: "Why local-first sync is harder than it looks",
    date: "2025",
    excerpt:
      "WordArena stores data locally first for speed, then syncs to the server. " +
      "Getting this right — especially conflict handling and offline edge cases — turned out to be much more complex than I expected.",
    tags: ["Architecture", "Sync", "Local-first", "JavaScript", "WordArena"],
    readingTime: "5 min read",
    relatedProjectSlug: "wordarena",
    status: "Planned",
    content: [],
  },

  {
    slug: "building-ai-wrong-answer-explanations",
    title: "Building AI wrong answer explanations in WordArena",
    date: "2025",
    excerpt:
      "When a user gets a vocabulary question wrong, WordArena calls the OpenAI API to explain " +
      "why the correct answer is correct. Here's how I built it, what went wrong, and what I'd change.",
    tags: ["AI", "OpenAI API", "Spring Boot", "Product Design", "WordArena"],
    readingTime: "5 min read",
    relatedProjectSlug: "wordarena",
    status: "Planned",
    content: [],
  },

  {
    slug: "building-2d-combat-with-pygame",
    title: "Building a 2D combat system with Python and Pygame",
    date: "2025",
    excerpt:
      "Getting combat to feel right in a 2D game is harder than it sounds. " +
      "Hitboxes, timing windows, enemy AI states, and animation sync — lessons from building the Python RPG prototype.",
    tags: ["Python", "Pygame", "Game Dev", "Combat Systems", "State Machines"],
    readingTime: "6 min read",
    relatedProjectSlug: "python-rpg-game",
    status: "Planned",
    content: [],
  },

  {
    slug: "oauth2-in-a-real-student-project",
    title: "How OAuth2 works in my real project",
    date: "2025",
    excerpt:
      "OAuth2 looks clean in diagrams. In practice, integrating Google login into a Spring Boot app " +
      "with a separate JavaScript frontend taught me how many moving parts are actually involved.",
    tags: ["OAuth2", "Spring Boot", "Spring Security", "Google Login", "Authentication", "WordArena"],
    readingTime: "7 min read",
    relatedProjectSlug: "wordarena",
    status: "Planned",
    content: [],
  },
]
