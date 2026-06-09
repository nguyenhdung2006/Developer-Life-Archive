/**
 * timeline.js
 *
 * Development journey timeline for the HuyDung Lab portfolio.
 * Items are ordered chronologically (earliest first).
 *
 * Schema:
 *   id                   — kebab-case unique identifier
 *   date                 — approximate date string (broad if exact is unknown)
 *   title                — short human-readable milestone title
 *   type                 — "Learning" | "Project" | "Deployment" | "Research" | "Milestone"
 *   description          — honest, concise description
 *   relatedProjectSlug   — slug from projects.js, or "" if not linked
 *
 * Note: Dates are approximate. Exact dates are not claimed where not confirmed.
 */

export const timeline = [
  {
    id: "started-programming",
    date: "2023",
    title: "Started programming journey",
    type: "Milestone",
    description:
      "Began learning programming fundamentals — logic, problem solving, and basic algorithms. " +
      "Started with structured courses and self-study.",
    relatedProjectSlug: "",
  },

  {
    id: "java-fundamentals",
    date: "2024",
    title: "Java fundamentals and OOP",
    type: "Learning",
    description:
      "Studied Java core concepts: OOP principles, classes, inheritance, interfaces, collections, " +
      "and exception handling. Built small console exercises to solidify understanding.",
    relatedProjectSlug: "",
  },

  {
    id: "java-jdbc-practice",
    date: "2024",
    title: "Java JDBC and database access",
    type: "Project",
    description:
      "Practiced connecting Java applications to relational databases using JDBC directly — " +
      "PreparedStatement, CallableStatement, stored procedures, transactions, and CRUD patterns. " +
      "Deliberately skipped ORM to understand low-level database interaction first.",
    relatedProjectSlug: "java-jdbc-practice",
  },

  {
    id: "spring-boot-learning",
    date: "2024",
    title: "Spring Boot backend learning",
    type: "Learning",
    description:
      "Learned Spring Boot: dependency injection, REST controllers, JPA, Spring Security, " +
      "and application configuration. Built practice APIs to understand the framework before " +
      "applying it to a real project.",
    relatedProjectSlug: "",
  },

  {
    id: "python-rpg-started",
    date: "2024",
    title: "Python RPG / 2D game prototype started",
    type: "Project",
    description:
      "Started building a 2D action RPG prototype with Python and Pygame. Focused on " +
      "player movement, combat systems, enemy AI, and sprite workflow — applying programming " +
      "fundamentals to game development for immediate, tangible feedback.",
    relatedProjectSlug: "python-rpg-game",
  },

  {
    id: "wordarena-development",
    date: "2025",
    title: "WordArena development",
    type: "Project",
    description:
      "Built WordArena — a full-stack vocabulary learning platform with Spring Boot, PostgreSQL, " +
      "Google OAuth2, quiz mode, spaced repetition, analytics, and OpenAI API integration. " +
      "First project to bring backend, frontend, authentication, and AI together.",
    relatedProjectSlug: "wordarena",
  },

  {
    id: "wordarena-production",
    date: "2025",
    title: "WordArena deployed to production",
    type: "Deployment",
    description:
      "Deployed WordArena to production: frontend on Vercel, backend on Render, database on Supabase. " +
      "Encountered and resolved real production issues — schema mismatches, cold starts, OAuth session " +
      "behavior, and sync edge cases. First real production deployment experience.",
    relatedProjectSlug: "wordarena",
  },

  {
    id: "ai4se-research",
    date: "2025",
    title: "AI4SE research report",
    type: "Research",
    description:
      "Wrote and presented a research report analyzing AI tools in software engineering — " +
      "productivity impact, risks, ethics, and real case studies. Practiced critical thinking " +
      "about AI rather than uncritical enthusiasm.",
    relatedProjectSlug: "ai4se-report",
  },

  {
    id: "developer-life-archive-started",
    date: "2026",
    title: "Developer Life Archive started",
    type: "Project",
    description:
      "Started building this portfolio and devlog site — React + Vite + TailwindCSS frontend, " +
      "Spring Boot backend skeleton. Building frontend-first to get visible content live before " +
      "investing in backend infrastructure.",
    relatedProjectSlug: "developer-life-archive",
  },
]
