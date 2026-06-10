# Database Schema

This file summarizes the planned schema. It is documentation only, not an executable SQL migration.

See `docs/database-design.md` for the detailed table-by-table design and `docs/api-contract.md` for the planned public API contract.

## Planned V1 Table List

| Table | Purpose |
| --- | --- |
| `profiles` | Public owner profile and contact/CV metadata. |
| `projects` | Main project and case study records. |
| `project_features` | Ordered project feature bullets. |
| `project_techs` | Ordered technologies used by each project. |
| `project_screenshots` | Real screenshots/images for project detail pages. |
| `timeline_events` | Developer journey timeline entries. |
| `tech_stacks` | Global tech stack and skill section items. |
| `devlog_posts` | Devlog/blog posts. |
| `devlog_tags` | Reusable devlog tags. |
| `devlog_post_tags` | Many-to-many join between posts and tags. |
| `contact_messages` | Future contact form submissions. |

## Relationship Summary

- `projects` has many `project_features`.
- `projects` has many `project_techs`.
- `projects` has many `project_screenshots`.
- `devlog_posts` has many `devlog_tags` through `devlog_post_tags`.
- `timeline_events.related_project_slug` is a nullable soft link to a project slug in v1.
- `devlog_posts.related_project_slug` is a nullable soft link to a project slug in v1.
- `profiles`, `timeline_events`, `tech_stacks`, and `contact_messages` do not require parent relationships in v1.

## V1 Implementation Order

1. Safe test datasource setup.
2. Local development PostgreSQL config.
3. Base `projects` table and read-only project API.
4. Project detail relations: features, techs, screenshots.
5. Timeline API.
6. Tech stack API.
7. Devlog posts and tags API.
8. Contact message API.
9. Gradual frontend API integration.

## Future Tables Not Included Yet

The following ideas are intentionally excluded from v1:

- Admin users and roles.
- Spring Security account/session tables.
- GitHub sync metadata.
- Analytics events.
- CV generator content.
- Search index metadata.
- Multi-language translation tables.
- File upload and asset management tables.
- Comments, likes, or public user interaction tables.

## Notes

- PostgreSQL is the planned database.
- Migration files will be added later.
- Do not create fake screenshots, fake demo links, fake contact data, or exaggerated project metrics.
- Do not add executable SQL migrations until the backend persistence phase begins.
