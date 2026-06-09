/**
 * index.js — data barrel export
 *
 * Re-exports all static data constants from a single entry point.
 * Import from here when a page or component needs multiple data sources.
 *
 * Usage:
 *   import { projects, devlogs } from '../data'
 *   import { techStack } from '../data'
 */

export { projects } from "./projects"
export { timeline } from "./timeline"
export { techStack } from "./techStack"
export { devlogs } from "./devlogs"
