import type { Snippet } from "svelte"

// biome-ignore lint/complexity/noBannedTypes: required for full type safety
export type WithChildrenSnippet<T extends object = {}> = {
  children?: Snippet
} & T
