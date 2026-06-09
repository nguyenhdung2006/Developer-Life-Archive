/**
 * projects.js
 *
 * Static project data for the HuyDung Lab portfolio.
 * This serves as an early draft of the future backend content schema.
 *
 * Schema:
 *   slug              — kebab-case unique identifier
 *   title             — concise human-readable name
 *   category          — "Web App" | "Game" | "Java Practice" | "Research" | "Portfolio"
 *   subtitle          — one-line pitch
 *   summary           — short professional description
 *   status            — "In Progress" | "Complete" | "Deployed" | "Paused"
 *   role              — your role on the project
 *   featured          — boolean, shown on home hero section
 *   priority          — integer, lower = shown first
 *   problem           — why the project exists
 *   features          — concrete implemented or planned features
 *   techStack         — technologies used or planned
 *   challenges        — real technical/product challenges
 *   lessons           — honest takeaways
 *   screenshots       — array of image paths (empty until real assets exist)
 *   links             — github / demo / video URLs ("" if not confirmed)
 */

export const projects = [
  {
    slug: "wordarena",
    title: "WordArena",
    category: "Web App",
    subtitle: "AI-powered vocabulary learning platform with spaced repetition and cloud sync",
    summary:
      "A full-stack vocabulary learning web app built with Spring Boot and plain JavaScript. " +
      "Features Google OAuth2 login, quiz mode, spaced repetition review, AI-powered wrong answer " +
      "explanations, AI deck generation, an analytics dashboard, and production deployment across " +
      "Vercel, Render, and Supabase.",
    status: "Deployed",
    role: "Solo developer — fullstack (backend, frontend, DevOps)",
    featured: true,
    priority: 1,
    problem:
      "Standard flashcard apps are passive. I wanted an app that actively surfaces weak vocabulary, " +
      "explains errors with AI context, and keeps learning data accessible across devices without " +
      "requiring constant manual sync.",
    features: [
      "Google OAuth2 login and session management",
      "Vocabulary CRUD (create, edit, delete, organize decks)",
      "Quiz mode with multiple choice questions",
      "Wrong answer review session",
      "Spaced repetition review scheduler",
      "Analytics dashboard (accuracy, streaks, progress)",
      "AI wrong answer explanation via OpenAI API",
      "AI deck generator from topic prompt",
      "Local-first behavior with cloud sync",
      "Production deployment on Vercel (frontend), Render (backend), Supabase (database)",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Supabase",
      "Google OAuth2",
      "JavaScript",
      "HTML",
      "CSS",
      "Vercel",
      "Render",
      "OpenAI API",
    ],
    challenges: [
      "Implementing reliable local-first sync that handles conflicts between client state and server state",
      "Diagnosing production schema mismatches between local PostgreSQL and Supabase",
      "Managing Spring Boot cold starts on Render free tier causing initial load delays",
      "OAuth2 session behavior across browser tabs and page refreshes",
      "Correctly handling loading, empty, and error UI states across all features",
    ],
    lessons: [
      "How to deploy and configure a Spring Boot application in production",
      "REST API design with proper error handling and status codes",
      "Google OAuth2 flow and session/token management in a real project",
      "PostgreSQL production issues: schema differences, migration discipline",
      "Sync reliability and the difficulty of local-first architectures",
      "Debugging real production bugs that only appear under deployment conditions",
    ],
    screenshots: [],
    links: {
      github: "https://github.com/nguyenhdung2006/Quiz-App",
      demo: "",
      video: "",
    },
  },

  {
    slug: "python-rpg-game",
    title: "Python RPG / 2D Game",
    category: "Game",
    subtitle: "2D action RPG combat prototype with enemy AI, boss skills, and wave system",
    summary:
      "A 2D action RPG prototype built with Python and Pygame. Implements player movement, " +
      "dash/dodge mechanics, combo attacks, projectile skills, enemy AI state machines, " +
      "boss pacing and special skills, and a wave-based encounter system.",
    status: "In Progress",
    role: "Solo developer — game design, programming, sprite integration",
    featured: true,
    priority: 2,
    problem:
      "I wanted to apply programming fundamentals to a domain where feedback is immediate and " +
      "concrete — game development. Building a combat system required thinking carefully about " +
      "state machines, game loops, hitbox logic, and modular code organization.",
    features: [
      "Player movement with directional control",
      "Dash, dodge, and block mechanics",
      "Combo attack system",
      "Projectile and skill attacks",
      "Enemy AI with multiple behavioral states",
      "Boss with pacing logic and special skills",
      "Wave and encounter system",
      "Sprite and animation workflow",
    ],
    techStack: [
      "Python",
      "Pygame",
    ],
    challenges: [
      "Making combat feel responsive — timing, hitboxes, and feedback",
      "Designing enemy AI that feels fair but challenging without complex pathfinding",
      "Managing animation state transitions cleanly across player and enemy entities",
      "Separating game logic from asset management and rendering",
    ],
    lessons: [
      "Game loop structure and frame-rate-independent update cycles",
      "Collision detection and hitbox design thinking",
      "State machine patterns applied to game entities",
      "Modular game architecture to keep code maintainable as scope grows",
    ],
    screenshots: [],
    links: {
      github: "",
      demo: "",
      video: "",
    },
  },

  {
    slug: "java-jdbc-practice",
    title: "Java JDBC Practice",
    category: "Java Practice",
    subtitle: "JDBC, SQL, OOP, and database-access exercises in Java",
    summary:
      "A collection of Java console and JDBC practice exercises covering database connection, " +
      "prepared and callable statements, stored procedures, transaction handling, and OOP-based " +
      "CRUD applications.",
    status: "Complete",
    role: "Solo developer — Java and database practice",
    featured: false,
    priority: 3,
    problem:
      "Before building full-stack apps, I needed a solid understanding of how Java communicates " +
      "with relational databases at a low level — without relying on ORM abstraction. These " +
      "exercises built that foundation.",
    features: [
      "JDBC database connection and configuration",
      "PreparedStatement for parameterized queries",
      "CallableStatement for stored procedure calls",
      "Transaction handling with commit and rollback",
      "CRUD console applications",
      "OOP modeling for database-backed entities",
    ],
    techStack: [
      "Java",
      "JDBC",
      "PostgreSQL",
      "MySQL",
    ],
    challenges: [
      "Proper SQL error handling and exception propagation in Java",
      "Understanding transaction boundaries and when to commit or roll back",
      "Mapping relational records to Java objects without ORM tooling",
      "Avoiding unsafe query construction and SQL injection risks",
    ],
    lessons: [
      "JDBC fundamentals and connection lifecycle management",
      "How SQL integrates with Java application code",
      "Database transaction basics: atomicity and rollback behavior",
      "OOP practice with persistence and data mapping",
    ],
    screenshots: [],
    links: {
      github: "",
      demo: "",
      video: "",
    },
  },

  {
    slug: "ai4se-report",
    title: "AI4SE Report",
    category: "Research",
    subtitle: "Research report on AI usage in software engineering: productivity, risks, and ethics",
    summary:
      "A research report and presentation analyzing how AI tools are changing software development " +
      "workflows, covering productivity benefits, failure risks, ethical considerations, and " +
      "real-world case studies.",
    status: "Complete",
    role: "Researcher and presenter",
    featured: false,
    priority: 4,
    problem:
      "AI coding tools are widely discussed but rarely analyzed critically. I wanted to produce " +
      "a balanced, evidence-based report that acknowledges both the real productivity gains and " +
      "the risks of over-relying on AI-generated code.",
    features: [
      "Research summary covering current AI coding tools",
      "Productivity and workflow analysis",
      "Risk and failure case discussion",
      "Ethics and responsible AI use in development",
      "Case studies of AI-assisted development outcomes",
      "Presentation deck for structured delivery",
    ],
    techStack: [
      "Research",
      "Presentation",
      "AI Tools",
    ],
    challenges: [
      "Avoiding one-sided AI optimism in the framing",
      "Balancing concrete benefits against real risks in a fair way",
      "Finding credible, citable sources for claims",
      "Turning a broad research topic into a focused, coherent presentation",
    ],
    lessons: [
      "Critical thinking about AI tools rather than accepting vendor claims",
      "Analyzing software engineering workflows objectively",
      "Structuring a research presentation with clear arguments",
      "Responsible and skeptical use of AI in development contexts",
    ],
    screenshots: [],
    links: {
      github: "",
      demo: "",
      video: "",
    },
  },

  {
    slug: "developer-life-archive",
    title: "Developer Life Archive",
    category: "Portfolio",
    subtitle: "Personal developer portfolio, project archive, and devlog — built in public",
    summary:
      "A modern developer portfolio and devlog site for presenting project case studies, " +
      "technical notes, a learning timeline, and a software development journey. " +
      "Built frontend-first with React, Vite, and TailwindCSS, with a Spring Boot backend planned.",
    status: "In Progress",
    role: "Solo developer — product design, frontend, backend (planned)",
    featured: true,
    priority: 5,
    problem:
      "I wanted a space that honestly documents my development journey — not just a polished " +
      "resume, but a living archive of projects, lessons, mistakes, and growth over time.",
    features: [
      "Project case studies with tech stack and lessons",
      "Devlog articles on technical topics",
      "Development journey timeline",
      "Tech stack section",
      "Contact and CV section (planned)",
      "Spring Boot backend API (planned)",
      "Admin dashboard for content management (planned)",
    ],
    techStack: [
      "React",
      "Vite",
      "TailwindCSS",
      "React Router",
      "Java",
      "Spring Boot",
      "PostgreSQL",
    ],
    challenges: [
      "Designing a professional personal brand without over-engineering the site",
      "Keeping frontend content structured so it migrates cleanly to a backend later",
      "Writing honest project case studies that show real learning, not just achievements",
      "Controlling scope — building incrementally rather than trying to ship everything at once",
    ],
    lessons: [
      "Frontend-first product planning reduces wasted backend effort early on",
      "Portfolio information architecture: what to show and in what order",
      "Treating static data files as early schema design for future database models",
      "Scope control and incremental delivery in a solo side project",
    ],
    screenshots: [],
    links: {
      github: "https://github.com/nguyenhdung2006/Developer-Life-Archive",
      demo: "",
      video: "",
    },
  },
]
