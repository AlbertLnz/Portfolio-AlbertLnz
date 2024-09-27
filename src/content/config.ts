import { defineCollection, z } from 'astro:content'

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number(),
    name: z.string(),
    author: z.string(),
    img: z.string(),
    shortDescription: z.string(),
    shortTechs: z.array(z.string()),
    links: z.object({
      github: z.string().url(),
      deploy: z.string().url().nullable(),
    }),
  }),
})

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number(),
    title: z.string(),
    language: z.string(),
    date: z.string(),
    tag: z.string(),
    author: z.string(),
    img: z.string(),
    description: z.string(),
  }),
})

export const collections = { projects, posts }
