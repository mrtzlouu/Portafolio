import { useEffect } from 'react';
import { absoluteUrl, site } from '../../data/site';
import { useApp } from '../../context/AppContext';

interface SEOProps {
  title: string;
  description: string;
  /** Route path, e.g. "/" or "/projects/cuencaos". */
  path: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  noindex?: boolean;
  /** schema.org structured data; must match visible content. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const upsertMeta = (attr: 'name' | 'property', key: string, content: string): void => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const upsertLink = (rel: string, href: string): void => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

/** Per-route document metadata (Requirements §11 title, §12 SEO, §14 social). */
export function SEO({
  title,
  description,
  path,
  image = site.ogImage,
  type = 'website',
  noindex = false,
  jsonLd,
}: SEOProps): null {
  const { lang } = useApp();

  useEffect(() => {
    const url = absoluteUrl(path);
    const img = image.startsWith('http') ? image : absoluteUrl(image);

    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');
    upsertLink('canonical', url);

    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:site_name', site.name);
    upsertMeta('property', 'og:locale', lang === 'en' ? 'en_US' : 'es_SV');
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', img);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', img);

    let script: HTMLScriptElement | null = null;
    if (jsonLd) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seo = 'route';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
    return () => {
      script?.remove();
    };
  }, [title, description, path, image, type, noindex, jsonLd, lang]);

  return null;
}
