/**
 * techStack.js
 *
 * Grouped tech stack data for the HuyDung Lab portfolio.
 *
 * Schema:
 *   group         — category label shown as a section heading
 *   description   — one-line description of this group's purpose
 *   items         — array of tech entries
 *     name        — technology name
 *     level       — "Currently focused on" | "Used in projects" | "Learning / practicing"
 *     note        — honest, specific context note
 *
 * Rules:
 *   - No numeric skill percentages.
 *   - No "expert" label.
 *   - Wording kept realistic for a student portfolio.
 */

export const techStack = [
  {
    group: "Backend",
    description: "Server-side development and API design",
    items: [
      {
        name: "Java",
        level: "Currently focused on",
        note: "Primary language — used for OOP practice, JDBC, and Spring Boot projects",
      },
      {
        name: "Spring Boot",
        level: "Currently focused on",
        note: "Used to build the WordArena REST API and the Developer Life Archive backend skeleton",
      },
      {
        name: "REST API",
        level: "Used in projects",
        note: "Designed and consumed REST APIs in WordArena; practicing proper HTTP semantics and error handling",
      },
      {
        name: "OAuth2",
        level: "Used in projects",
        note: "Implemented Google OAuth2 authentication in WordArena using Spring Security",
      },
      {
        name: "WebSocket",
        level: "Learning / practicing",
        note: "Exploring for potential real-time features in future projects",
      },
    ],
  },

  {
    group: "Database",
    description: "Relational databases and cloud data services",
    items: [
      {
        name: "PostgreSQL",
        level: "Currently focused on",
        note: "Used in WordArena (Supabase) and Developer Life Archive backend; practiced JDBC and JPA layers",
      },
      {
        name: "MySQL",
        level: "Used in projects",
        note: "Used in JDBC practice exercises for SQL and stored procedure work",
      },
      {
        name: "H2",
        level: "Used in projects",
        note: "Used as an in-memory database for Spring Boot testing and local development",
      },
      {
        name: "Supabase",
        level: "Used in projects",
        note: "Hosted PostgreSQL for WordArena production; learned about managed database configuration and migrations",
      },
    ],
  },

  {
    group: "Frontend",
    description: "UI development and styling",
    items: [
      {
        name: "React",
        level: "Currently focused on",
        note: "Building the Developer Life Archive frontend; learning component patterns, routing, and state management",
      },
      {
        name: "JavaScript",
        level: "Currently focused on",
        note: "Used across projects — WordArena frontend and Developer Life Archive; practicing ES6+ patterns",
      },
      {
        name: "HTML",
        level: "Used in projects",
        note: "Used in WordArena frontend; comfortable with semantic structure and accessibility basics",
      },
      {
        name: "CSS",
        level: "Used in projects",
        note: "Used in WordArena for layout and component styling; transitioning to TailwindCSS for new projects",
      },
      {
        name: "TailwindCSS",
        level: "Currently focused on",
        note: "Using for Developer Life Archive; learning utility-first approach and responsive design patterns",
      },
    ],
  },

  {
    group: "Tools / DevOps",
    description: "Development workflow, deployment, and tooling",
    items: [
      {
        name: "Git",
        level: "Used in projects",
        note: "Used daily for version control across all projects",
      },
      {
        name: "GitHub",
        level: "Used in projects",
        note: "All personal projects hosted on GitHub; practicing commit discipline and branching",
      },
      {
        name: "Docker",
        level: "Learning / practicing",
        note: "Learning containerization basics; not yet used in production projects",
      },
      {
        name: "Vercel",
        level: "Used in projects",
        note: "Deployed WordArena frontend to Vercel; familiar with environment config and deployment flow",
      },
      {
        name: "Render",
        level: "Used in projects",
        note: "Deployed WordArena Spring Boot backend to Render; experienced cold start issues on free tier",
      },
      {
        name: "IntelliJ IDEA",
        level: "Currently focused on",
        note: "Primary IDE for Java and Spring Boot development",
      },
      {
        name: "VS Code",
        level: "Used in projects",
        note: "Used for frontend (JavaScript, React, TailwindCSS) and Python development",
      },
    ],
  },

  {
    group: "Game Development",
    description: "2D game prototyping and game programming concepts",
    items: [
      {
        name: "Python",
        level: "Used in projects",
        note: "Used for the Python RPG / 2D game prototype; also used for scripting and tooling",
      },
      {
        name: "Pygame",
        level: "Used in projects",
        note: "Built a 2D action RPG prototype — player movement, combat, enemy AI, and sprite workflow",
      },
      {
        name: "Sprite workflow",
        level: "Used in projects",
        note: "Practiced integrating sprite sheets and animation state management in Pygame",
      },
      {
        name: "2D combat systems",
        level: "Used in projects",
        note: "Designed hitboxes, combo attacks, projectiles, boss skills, and wave encounters",
      },
    ],
  },
]
