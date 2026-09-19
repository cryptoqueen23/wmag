import { defineCollection, z } from "astro:content";

const stories = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    department: z.string(),
    contentType: z.enum(["Feature","Essay","Guide","Review","News","Explainer","Analysis","Opinion","Interview"]),
    author: z.string(),
    publishDate: z.coerce.date(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    issue: z.string().optional(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { stories };
