import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const roomSlug = z.enum([
  'the-engine',
  'the-eye',
  'the-board',
  'the-ear',
  'the-body',
  'the-inner-lab',
  'field-notes',
]);

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    room: roomSlug,
    type: z.enum(['essay', 'lab-note', 'study', 'artifact', 'log']),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    status: z.enum(['seed', 'draft', 'field-note', 'polished', 'evergreen', 'archived']).default('draft'),
    featured: z.boolean().default(false),
    visibility: z.enum(['public', 'unlisted']).default('public'),
  }),
});

export const collections = { notes };
