# Backend Roadmap

This roadmap keeps backend work incremental and safe. The current frontend is static-data-first; backend/database work should be added only after the schema and public API contract are clear.

## Phase 1 - Database Design and API Contract

Status: current task.

Goals:

- Document planned PostgreSQL schema.
- Document public API response shapes.
- Avoid implementing entities, repositories, services, controllers, migrations, or datasource config.
- Keep v1 focused on public portfolio/devlog content.

Deliverables:

- `docs/database-design.md`
- `docs/api-contract.md`
- Updated `docs/database-schema.md`

## Phase 2 - Safe Test Datasource Setup

Goal:

- Make Maven tests pass safely.
- Decide between local PostgreSQL-only tests or adding an H2 test profile.
- Do not implement business entities yet.

Notes:

- Current Maven test failure from missing datasource is expected.
- Do not hide datasource problems with unsafe production config.

## Phase 3 - Dev PostgreSQL Config

Goal:

- Configure local development datasource safely.
- Use environment variables or clearly documented local-only values.
- Do not commit real secrets.

Notes:

- Keep production credentials out of Git.
- Decide whether `application-local.yaml` should be ignored or templated.

## Phase 4 - Project API v1

Goal:

- Project entity.
- Project DTOs.
- Repository/service/controller.
- `GET /api/projects`.
- `GET /api/projects/{slug}`.

Notes:

- Start with read-only API behavior.
- Keep external links nullable and guarded.
- Use slug lookup for public detail pages.

## Phase 5 - Project Detail Relations

Goal:

- `ProjectFeature`.
- `ProjectTech`.
- `ProjectScreenshot`.

Notes:

- Add child tables only after the base project API is stable.
- Screenshot records must point to real assets.

## Phase 6 - Timeline API

Goal:

- `GET /api/timeline`.

Notes:

- Keep `relatedProjectSlug` flexible in v1.
- Avoid fake exact dates.

## Phase 7 - TechStack API

Goal:

- `GET /api/tech-stack`.

Notes:

- Use realistic levels: `LEARNING`, `USED_IN_PROJECT`, `FOCUSED`.
- Do not add an expert level.

## Phase 8 - Devlog API

Goal:

- `GET /api/devlogs`.
- `GET /api/devlogs/{slug}`.

Notes:

- Decide whether public API exposes drafts or only published posts.
- Store detail content in `content_markdown` for v1.
- Do not add markdown parsing dependencies until implementation needs are clear.

## Phase 9 - Contact API

Goal:

- `POST /api/contact`.
- Validation.
- No email sending yet unless explicitly requested.

Notes:

- Contact form can remain static until this phase.
- Consider spam/rate limiting before exposing the endpoint publicly.

## Phase 10 - Frontend API Integration

Goal:

- Migrate frontend from static data to backend API gradually.

Recommended order:

1. Projects list.
2. Project detail.
3. Timeline.
4. Tech stack.
5. Devlog.

Notes:

- Keep static data as a fallback during migration if helpful.
- Do not migrate everything at once.

## Future Extensions

These are future ideas only, not v1 requirements:

- Admin dashboard.
- Spring Security.
- GitHub sync.
- Analytics.
- CV generator.
- Search.
- Multi-language content.
- File upload / asset management.
