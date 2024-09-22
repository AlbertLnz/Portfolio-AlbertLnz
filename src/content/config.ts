import { defineCollection, z } from 'astro:content'

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    author: z.string(),
    img: z.string(),
    shortDescription: z.string(),
    links: z.object({
      github: z.string().url(),
      deploy: z.string().url().nullable(),
    }),
  }),
})

export const collections = { projects }
