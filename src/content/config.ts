import { defineCollection, z } from "astro:content"

const books = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        date: z.string(),
        description: z.string(),
        readtime: z.number(),
        buy: z.object({
            spain: z.string(),
            usa: z.string()
        })
    })
})

export const collections = { books }