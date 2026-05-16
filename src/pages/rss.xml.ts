import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../lib/config';
import { noteURL } from '../lib/content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const notes = (await getCollection('notes'))
    .filter((n) => n.data.visibility === 'public')
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site!.toString(),
    items: notes.map((note) => ({
      title: note.data.title,
      description: note.data.summary,
      pubDate: note.data.date,
      link: noteURL(note),
    })),
    customData: `<language>en</language>`,
  });
}
