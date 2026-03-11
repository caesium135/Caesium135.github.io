import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const journal = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		summary: z.string(),
		draft: z.boolean().default(false),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { journal };
