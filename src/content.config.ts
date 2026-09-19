import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const stories = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/stories" }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    department: z.string(),
    contentType: z.enum([
      "News","Feature","Longform","Interview","Essay","Explainer",
      "Analysis","Opinion","Guide","Review","Recipe","Shopping Edit","Photo Essay"
    ]),
    author: z.string(),
    publishDate: z.coerce.date(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageFocalPoint: z.string().optional(),
    heroTreatment: z.enum(["full-bleed", "split", "stacked", "offset"]).optional(),
    issue: z.string().optional(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { stories };
