import type { CollectionEntry } from 'astro:content';

export function noteSlug(note: CollectionEntry<'notes'>): string {
  return note.id.split('/').at(-1)!;
}

export function noteURL(note: CollectionEntry<'notes'>): string {
  return `/notes/${noteSlug(note)}`;
}

export function artifactSlug(artifact: CollectionEntry<'artifacts'>): string {
  return artifact.id.split('/').at(-1)!;
}

export function artifactURL(artifact: CollectionEntry<'artifacts'>): string {
  return `/artifacts/${artifactSlug(artifact)}`;
}
