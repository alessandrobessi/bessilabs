import { SITE } from './config';

export interface SEOMeta {
  title: string;
  description: string;
  canonicalURL: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  articleDate?: Date;
  articleModified?: Date;
  noIndex?: boolean;
}

export function buildSEO(
  path: string,
  overrides: Partial<SEOMeta> = {}
): SEOMeta {
  const canonicalURL = `${SITE.url}${path}`;
  return {
    title: SITE.title,
    description: SITE.description,
    canonicalURL,
    ogType: 'website',
    ogImage: `${SITE.url}/og-image.png`,
    ...overrides,
  };
}

export function buildArticleSEO(
  path: string,
  overrides: Partial<SEOMeta> & { title: string; description: string; date: Date; updated?: Date }
): SEOMeta {
  return buildSEO(path, {
    ogType: 'article',
    articleDate: overrides.date,
    articleModified: overrides.updated,
    ...overrides,
    title: `${overrides.title} — ${SITE.title}`,
  });
}
