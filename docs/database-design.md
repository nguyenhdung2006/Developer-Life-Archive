# Database Design

This document describes the planned PostgreSQL schema for Developer Life Archive / HuyDung Lab. It is a design document only, not an executable migration.

The v1 schema should stay practical for a personal developer archive and portfolio CMS. Project case studies are the most important content. Admin users, authentication, analytics, comments, GitHub sync, CV generation, and file uploads are intentionally deferred.

## Design Principles

- Prefer simple relational tables with manual ordering fields.
- Keep public content honest: do not store fake stats, fake screenshots, or fake demo URLs.
- Use slugs for public routes, but keep numeric primary keys for persistence.
- Store asset URLs only after real assets exist.
- Avoid multi-user profile logic in v1.

## Table: `profiles`

Purpose: Store public personal profile information for the portfolio owner.

| Column | PostgreSQL type | Nullable | Constraints / default | Notes |
| --- | --- | --- | --- | --- |
| `id` | `bigserial` | No | Primary key | Single-row use is expected in v1. |
| `full_name` | `varchar(120)` | No |  | Legal or full display name. |
| `display_name` | `varchar(80)` | No |  | Short public name. |
| `headline` | `varchar(180)` | Yes |  | Short role/focus line. |
| `bio` | `text` | Yes |  | Public profile paragraph. |
| `location` | `varchar(120)` | Yes |  | Example: Hanoi, Vietnam. |
| `email` | `varchar(180)` | Yes | Unique if present | Do not add until confirmed. |
| `github_url` | `varchar(255)` | Yes |  | Confirmed GitHub profile only. |
| `linkedin_url` | `varchar(255)` | Yes |  | Nullable until confirmed. |
| `facebook_url` | `varchar(255)` | Yes |  | Nullable until confirmed. |
| `cv_url` | `varchar(255)` | Yes |  | Only real CV asset URL. |
| `avatar_url` | `varchar(255)` | Yes |  | Only real avatar asset URL. |
| `created_at` | `timestamptz` | No | Default `now()` |  |
| `updated_at` | `timestamptz` | No | Default `now()` | Update from application code or trigger later. |

Indexes and constraints:

- Primary key on `id`.
- Optional unique index on `email` where `email is not null`.

Relationships:

- No required v1 relationships.

Implementation warnings:

- This project likely only needs one profile row.
- Do not design multi-user account/profile logic yet.
- Do not store unconfirmed contact links.

## Table: `projects`

Purpose: Store the main project and case study records.

| Column | PostgreSQL type | Nullable | Constraints / default | Notes |
| --- | --- | --- | --- | --- |
| `id` | `bigserial` | No | Primary key |  |
| `slug` | `varchar(140)` | No | Unique | Public route identifier. |
| `title` | `varchar(160)` | No |  | Required project title. |
| `subtitle` | `varchar(255)` | Yes |  | Short one-line description. |
| `summary` | `text` | Yes |  | List/card summary. |
| `description` | `text` | Yes |  | Longer detail body if needed. |
| `problem` | `text` | Yes |  | Problem statement. |
| `solution` | `text` | Yes |  | Implementation or solution summary. |
| `category` | `varchar(40)` | No |  | Suggested values below. |
| `status` | `varchar(40)` | No |  | Suggested values below. |
| `role` | `varchar(180)` | Yes |  | Honest role description. |
| `thumbnail_url` | `varchar(255)` | Yes |  | Only real asset URL. |
| `cover_image_url` | `varchar(255)` | Yes |  | Only real asset URL. |
| `demo_url` | `varchar(255)` | Yes |  | Only confirmed real demo URL. |
| `github_url` | `varchar(255)` | Yes |  | Only confirmed real repository URL. |
| `video_url` | `varchar(255)` | Yes |  | Only confirmed real video URL. |
| `featured` | `boolean` | No | Default `false` | Home page highlight flag. |
| `display_order` | `integer` | No | Default `0` | Manual ordering. |
| `started_at` | `date` | Yes |  | Approximate dates are acceptable only if clearly represented in UI. |
| `completed_at` | `date` | Yes |  | Nullable for in-progress work. |
| `created_at` | `timestamptz` | No | Default `now()` |  |
| `updated_at` | `timestamptz` | No | Default `now()` |  |

Suggested `category` values:

- `WEB`
- `BACKEND`
- `GAME`
- `JAVA`
- `AI`
- `STUDY`
- `RESEARCH`
- `OTHER`

Suggested `status` values:

- `PLANNED`
- `IN_PROGRESS`
- `COMPLETED`
- `ARCHIVED`

Indexes and constraints:

- Primary key on `id`.
- Unique index on `slug`.
- Index on `featured`.
- Index on `display_order`.
- Optional composite index on `(category, status)`.

Relationships:

- One project has many `project_features`.
- One project has many `project_techs`.
- One project has many `project_screenshots`.

Implementation warnings:

- Do not exaggerate project stats.
- Do not store fake screenshots, demo URLs, video URLs, or external links.
- Keep `display_order` explicit so the portfolio order does not depend on creation time.

## Table: `project_features`

Purpose: Store feature bullets for each project.

| Column | PostgreSQL type | Nullable | Constraints / default | Notes |
| --- | --- | --- | --- | --- |
| `id` | `bigserial` | No | Primary key |  |
| `project_id` | `bigint` | No | Foreign key to `projects(id)` | Delete behavior should be chosen before implementation. |
| `title` | `varchar(160)` | No |  | Short feature label. |
| `description` | `text` | Yes |  | Optional detail. |
| `display_order` | `integer` | No | Default `0` | Manual ordering inside project. |

Indexes and constraints:

- Primary key on `id`.
- Index on `project_id`.
- Optional unique constraint on `(project_id, display_order)` if strict ordering is desired.

Relationships:

- Many features belong to one project.

Implementation warnings:

- Use feature records for implemented or clearly planned features only.
- Avoid turning features into fake product claims.

## Table: `project_techs`

Purpose: Store technologies used by each project.

| Column | PostgreSQL type | Nullable | Constraints / default | Notes |
| --- | --- | --- | --- | --- |
| `id` | `bigserial` | No | Primary key |  |
| `project_id` | `bigint` | No | Foreign key to `projects(id)` |  |
| `name` | `varchar(100)` | No |  | Example: Java, Spring Boot, React. |
| `category` | `varchar(40)` | Yes |  | Suggested values below. |
| `icon_name` | `varchar(80)` | Yes |  | Optional UI icon key, not required for v1. |
| `display_order` | `integer` | No | Default `0` | Manual ordering. |

Suggested `category` values:

- `FRONTEND`
- `BACKEND`
- `DATABASE`
- `DEVOPS`
- `GAME`
- `AI`
- `TOOLS`
- `OTHER`

Indexes and constraints:

- Primary key on `id`.
- Index on `project_id`.
- Optional unique constraint on `(project_id, name)`.

Relationships:

- Many tech items belong to one project.

Implementation warnings:

- Do not duplicate a global `tech_stacks` row automatically unless a later sync design is added.
- Keep this table project-specific.

## Table: `project_screenshots`

Purpose: Store screenshots and images for project detail pages.

| Column | PostgreSQL type | Nullable | Constraints / default | Notes |
| --- | --- | --- | --- | --- |
| `id` | `bigserial` | No | Primary key |  |
| `project_id` | `bigint` | No | Foreign key to `projects(id)` |  |
| `image_url` | `varchar(255)` | No |  | Must point to a real image asset. |
| `alt_text` | `varchar(180)` | Yes |  | Safe accessibility text. |
| `caption` | `varchar(255)` | Yes |  | Optional visible caption. |
| `display_order` | `integer` | No | Default `0` | Manual ordering. |

Indexes and constraints:

- Primary key on `id`.
- Index on `project_id`.
- Optional unique constraint on `(project_id, display_order)`.

Relationships:

- Many screenshots belong to one project.

Implementation warnings:

- Screenshots must be real assets or the UI should clearly say screenshots are coming soon.
- Do not add fake screenshots or decorative placeholders that look like real product images.

## Table: `timeline_events`

Purpose: Store developer journey timeline items.

| Column | PostgreSQL type | Nullable | Constraints / default | Notes |
| --- | --- | --- | --- | --- |
| `id` | `bigserial` | No | Primary key |  |
| `title` | `varchar(180)` | No |  | Event title. |
| `description` | `text` | Yes |  | Event summary. |
| `event_date` | `date` | Yes |  | Nullable for broad/approximate entries. |
| `type` | `varchar(40)` | No |  | Suggested values below. |
| `related_project_slug` | `varchar(140)` | Yes |  | Flexible soft link to `projects.slug`. |
| `image_url` | `varchar(255)` | Yes |  | Only real asset URL. |
| `display_order` | `integer` | No | Default `0` | Manual ordering. |
| `created_at` | `timestamptz` | No | Default `now()` |  |
| `updated_at` | `timestamptz` | No | Default `now()` |  |

Suggested `type` values:

- `LEARNING`
- `PROJECT`
- `DEPLOYMENT`
- `BUG_FIX`
- `MILESTONE`
- `REPORT`
- `OTHER`

Indexes and constraints:

- Primary key on `id`.
- Index on `event_date`.
- Index on `display_order`.
- Optional index on `related_project_slug`.

Relationships:

- `related_project_slug` can point to a project but should remain nullable.
- Do not force a foreign key to project slug in v1 unless it becomes clearly needed.

Implementation warnings:

- Keeping this as a soft link makes timeline entries flexible.
- Avoid storing fake dates if only a broad period is known.

## Table: `tech_stacks`

Purpose: Store global tech stack and skills section items.

| Column | PostgreSQL type | Nullable | Constraints / default | Notes |
| --- | --- | --- | --- | --- |
| `id` | `bigserial` | No | Primary key |  |
| `name` | `varchar(100)` | No |  | Technology name. |
| `category` | `varchar(40)` | No |  | Suggested values below. |
| `icon_name` | `varchar(80)` | Yes |  | Optional UI icon key. |
| `level` | `varchar(40)` | No |  | Suggested values below. |
| `description` | `text` | Yes |  | Honest usage note. |
| `display_order` | `integer` | No | Default `0` | Manual ordering. |
| `created_at` | `timestamptz` | No | Default `now()` |  |
| `updated_at` | `timestamptz` | No | Default `now()` |  |

Suggested `category` values:

- `FRONTEND`
- `BACKEND`
- `DATABASE`
- `DEVOPS`
- `GAME`
- `AI`
- `TOOLS`
- `OTHER`

Suggested `level` values:

- `LEARNING`
- `USED_IN_PROJECT`
- `FOCUSED`

Indexes and constraints:

- Primary key on `id`.
- Optional unique constraint on `(name, category)`.
- Index on `display_order`.

Relationships:

- No required v1 relationships.

Implementation warnings:

- Do not use an `EXPERT` level.
- Keep wording realistic for a student portfolio.

## Table: `devlog_posts`

Purpose: Store devlog and blog posts.

| Column | PostgreSQL type | Nullable | Constraints / default | Notes |
| --- | --- | --- | --- | --- |
| `id` | `bigserial` | No | Primary key |  |
| `slug` | `varchar(160)` | No | Unique | Public route identifier. |
| `title` | `varchar(200)` | No |  | Required post title. |
| `summary` | `text` | Yes |  | Card/list excerpt. |
| `content_markdown` | `text` | Yes |  | Markdown body for v1. |
| `cover_image_url` | `varchar(255)` | Yes |  | Only real asset URL. |
| `status` | `varchar(40)` | No | Default `DRAFT` | Suggested values below. |
| `reading_minutes` | `integer` | Yes |  | Optional estimate. |
| `related_project_slug` | `varchar(140)` | Yes |  | Soft link to project slug. |
| `published_at` | `timestamptz` | Yes |  | Nullable until published. |
| `created_at` | `timestamptz` | No | Default `now()` |  |
| `updated_at` | `timestamptz` | No | Default `now()` |  |

Suggested `status` values:

- `DRAFT`
- `PUBLISHED`
- `ARCHIVED`

Indexes and constraints:

- Primary key on `id`.
- Unique index on `slug`.
- Index on `status`.
- Optional index on `related_project_slug`.
- Optional index on `published_at`.

Relationships:

- Many-to-many with `devlog_tags` through `devlog_post_tags`.
- Optional soft link to `projects.slug`.

Implementation warnings:

- Store markdown in `content_markdown` for v1.
- Do not add a markdown parser dependency in this documentation task.
- Do not treat draft content as published.

## Table: `devlog_tags`

Purpose: Store reusable tags for devlog posts.

| Column | PostgreSQL type | Nullable | Constraints / default | Notes |
| --- | --- | --- | --- | --- |
| `id` | `bigserial` | No | Primary key |  |
| `name` | `varchar(80)` | No | Unique recommended | Display label. |
| `slug` | `varchar(100)` | No | Unique | URL-safe tag identifier if needed later. |

Indexes and constraints:

- Primary key on `id`.
- Unique index on `slug`.
- Unique index on `name`, or enforce uniqueness in service layer.

Relationships:

- Many-to-many with `devlog_posts` through `devlog_post_tags`.

Implementation warnings:

- Keep tags simple in v1.
- Avoid adding tag categories until the UI needs them.

## Table: `devlog_post_tags`

Purpose: Join table between devlog posts and tags.

| Column | PostgreSQL type | Nullable | Constraints / default | Notes |
| --- | --- | --- | --- | --- |
| `post_id` | `bigint` | No | Foreign key to `devlog_posts(id)` |  |
| `tag_id` | `bigint` | No | Foreign key to `devlog_tags(id)` |  |

Indexes and constraints:

- Composite primary key on `(post_id, tag_id)`.
- Index on `tag_id` for tag-to-post lookup.

Relationships:

- Many-to-many between `devlog_posts` and `devlog_tags`.

Implementation warnings:

- Keep this as a pure join table unless ordering or metadata becomes necessary.

## Table: `contact_messages`

Purpose: Store contact form submissions.

| Column | PostgreSQL type | Nullable | Constraints / default | Notes |
| --- | --- | --- | --- | --- |
| `id` | `bigserial` | No | Primary key |  |
| `name` | `varchar(120)` | No |  | Sender name. |
| `email` | `varchar(180)` | No |  | Validate format in DTO layer. |
| `subject` | `varchar(180)` | Yes |  | Optional subject. |
| `message` | `text` | No |  | Submission body. |
| `read` | `boolean` | No | Default `false` | Avoid reserved word issues by quoting in SQL or using `is_read` if preferred. |
| `created_at` | `timestamptz` | No | Default `now()` |  |

Indexes and constraints:

- Primary key on `id`.
- Index on `created_at`.
- Optional index on `read`.

Relationships:

- No required v1 relationships.

Implementation warnings:

- This table can be implemented later.
- The frontend contact section can remain static until a backend contact API is explicitly implemented.
- Do not add email sending until requested.

## Future Extensions

Future tables can be considered after public content APIs are stable:

- Admin users and roles.
- Spring Security account tables.
- GitHub sync metadata.
- Analytics events.
- Search index metadata.
- CV generator content.
- File upload and asset management.
- Multi-language content tables.
