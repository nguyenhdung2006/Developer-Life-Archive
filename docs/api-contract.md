# API Contract

This document describes the planned public API for Developer Life Archive. It is a contract plan only; the endpoints are not implemented here.

The v1 API should expose read-only portfolio content first. Admin APIs, authentication, search, analytics, file upload, and GitHub sync are future extensions.

## Shared Notes

- Base path: `/api`
- Response examples are shape examples, not final DTO classes.
- Public content should stay honest: no fake stats, fake screenshots, fake demo URLs, or unconfirmed contact links.
- Slugs are used for public project and devlog detail routes.

## `GET /api/health`

Purpose: Return basic application health.

Related table(s): none.

Response shape summary:

```json
{
  "status": "ok",
  "service": "Developer Life Archive API"
}
```

Notes / warnings:

- Already exists as the first backend skeleton endpoint.
- Should not require database access.

## `GET /api/profile`

Purpose: Return public profile information for the portfolio owner.

Related table(s): `profiles`.

Response shape summary:

```json
{
  "fullName": "Huy Dung",
  "displayName": "Huy Dung",
  "headline": "Backend Developer | Game Developer | Problem Solver",
  "bio": "...",
  "location": "Hanoi, Vietnam",
  "githubUrl": "https://github.com/nguyenhdung2006",
  "linkedinUrl": null,
  "facebookUrl": null,
  "cvUrl": null,
  "avatarUrl": null
}
```

Notes / warnings:

- Return only confirmed contact links.
- If no CV exists, return `cvUrl: null`.
- v1 likely reads a single profile row.

## `GET /api/projects`

Purpose: Return project cards for the project archive page.

Related table(s): `projects`, optionally `project_techs`.

List response shape example:

```json
[
  {
    "slug": "wordarena",
    "title": "WordArena",
    "subtitle": "AI-powered vocabulary learning platform with spaced repetition and cloud sync",
    "summary": "A full-stack vocabulary learning web app...",
    "category": "WEB",
    "status": "COMPLETED",
    "role": "Solo developer",
    "featured": true,
    "displayOrder": 1,
    "techStack": ["Java", "Spring Boot", "PostgreSQL"],
    "links": {
      "github": "https://github.com/nguyenhdung2006/Quiz-App",
      "demo": null,
      "video": null
    }
  }
]
```

Notes / warnings:

- Hide null or empty external links in the frontend.
- Sort by `displayOrder`, then title or creation date as a fallback.
- Do not include screenshots in the list unless the UI needs thumbnails.

## `GET /api/projects/featured`

Purpose: Return featured project cards for the home page.

Related table(s): `projects`, optionally `project_techs`.

Response shape summary:

- Same card shape as `GET /api/projects`.
- Filter where `featured = true`.

Notes / warnings:

- Keep this endpoint read-only.
- Use `displayOrder` for stable home page ordering.

## `GET /api/projects/{slug}`

Purpose: Return a full project case study by slug.

Related table(s): `projects`, `project_features`, `project_techs`, `project_screenshots`.

Detail response shape example:

```json
{
  "slug": "wordarena",
  "title": "WordArena",
  "subtitle": "...",
  "summary": "...",
  "description": "...",
  "problem": "...",
  "solution": "...",
  "category": "WEB",
  "status": "COMPLETED",
  "role": "Solo developer",
  "featured": true,
  "links": {
    "github": "https://github.com/nguyenhdung2006/Quiz-App",
    "demo": null,
    "video": null
  },
  "features": [
    {
      "title": "Google OAuth2 login",
      "description": null,
      "displayOrder": 1
    }
  ],
  "techStack": [
    {
      "name": "Spring Boot",
      "category": "BACKEND",
      "displayOrder": 1
    }
  ],
  "screenshots": [
    {
      "imageUrl": "/assets/wordarena-dashboard.png",
      "altText": "WordArena dashboard screenshot",
      "caption": "Dashboard view",
      "displayOrder": 1
    }
  ]
}
```

Notes / warnings:

- If no screenshots exist, return an empty array.
- Screenshot URLs must point to real assets.
- Return 404 when slug does not exist.

## `GET /api/timeline`

Purpose: Return developer journey timeline items.

Related table(s): `timeline_events`.

Response shape summary:

```json
[
  {
    "title": "Started Developer Life Archive",
    "description": "...",
    "eventDate": "2025-01-01",
    "type": "PROJECT",
    "relatedProjectSlug": "developer-life-archive",
    "imageUrl": null,
    "displayOrder": 1
  }
]
```

Notes / warnings:

- `relatedProjectSlug` is nullable and should be treated as a soft link in v1.
- Avoid fake precise dates if only broad timing is known.

## `GET /api/tech-stack`

Purpose: Return global tech stack and skills section.

Related table(s): `tech_stacks`.

Response shape summary:

```json
[
  {
    "name": "Java",
    "category": "BACKEND",
    "level": "FOCUSED",
    "description": "Primary language for OOP practice, JDBC, and Spring Boot projects.",
    "iconName": null,
    "displayOrder": 1
  }
]
```

Notes / warnings:

- Do not use an `EXPERT` level.
- Keep wording realistic for a student portfolio.

## `GET /api/devlogs`

Purpose: Return devlog post list items.

Related table(s): `devlog_posts`, `devlog_tags`, `devlog_post_tags`.

Response shape summary:

```json
[
  {
    "slug": "what-i-learned-deploying-spring-boot",
    "title": "What I learned from deploying my first Spring Boot app",
    "summary": "...",
    "status": "DRAFT",
    "readingMinutes": 6,
    "relatedProjectSlug": "wordarena",
    "publishedAt": null,
    "tags": ["Spring Boot", "Deployment"]
  }
]
```

Notes / warnings:

- Decide before implementation whether public API returns drafts or only published posts.
- Planned frontend placeholders should not be represented as published backend posts.

## `GET /api/devlogs/{slug}`

Purpose: Return a devlog detail by slug.

Related table(s): `devlog_posts`, `devlog_tags`, `devlog_post_tags`.

Response shape summary:

```json
{
  "slug": "what-i-learned-deploying-spring-boot",
  "title": "What I learned from deploying my first Spring Boot app",
  "summary": "...",
  "contentMarkdown": "Markdown content may be returned here.",
  "status": "DRAFT",
  "readingMinutes": 6,
  "relatedProjectSlug": "wordarena",
  "publishedAt": null,
  "tags": ["Spring Boot", "Deployment"]
}
```

Notes / warnings:

- `contentMarkdown` may be returned for detail pages.
- Do not add markdown parser dependencies as part of this documentation task.
- Return 404 when slug does not exist.

## `POST /api/contact`

Purpose: Accept contact form submissions.

Related table(s): `contact_messages`.

Request shape summary:

```json
{
  "name": "Visitor name",
  "email": "visitor@example.com",
  "subject": "Optional subject",
  "message": "Message body"
}
```

Response shape summary:

```json
{
  "success": true,
  "message": "Contact message received."
}
```

Notes / warnings:

- This can be implemented later.
- Use Bean Validation on request DTOs.
- Do not add email sending until explicitly requested.
- Consider spam/rate limiting before public deployment of this endpoint.

## Future Extension: Admin APIs

Admin APIs are intentionally excluded from v1. Possible future areas:

- CRUD for projects.
- CRUD for devlogs.
- Authentication with Spring Security.
- Asset upload and management.
- Search indexing.
- Analytics dashboards.
