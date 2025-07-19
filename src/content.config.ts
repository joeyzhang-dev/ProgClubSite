import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const events = defineCollection({
  // Load Markdown and MDX files in the `src/content/events/` directory.
  loader: glob({ base: "./src/content/events", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    // Resource availability flags
    hasVideo: z.boolean().optional().default(false),
    hasSlides: z.boolean().optional().default(false),
    hasRecording: z.boolean().optional().default(false),
    // Resource URLs
    videoUrl: z.string().optional(),
    slidesUrl: z.string().optional(),
    recordingUrl: z.string().optional(),
  }),
});

export const collections = { events };
