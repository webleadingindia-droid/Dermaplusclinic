import { SITE_URL } from '../lib/clinic';
import { treatments } from '../lib/treatments';
import { localities } from '../lib/localities';
import { posts } from '../lib/blog';
import { allCombos, comboUrl } from '../lib/pages';

export default function sitemap() {
  const now = new Date();
  const core = ['', '/about', '/services', '/doctors', '/gallery', '/testimonials', '/blog', '/contact'];
  const urls = [
    ...core,
    ...treatments.map((t) => `/services/${t.slug}`),
    ...localities.map((l) => `/areas/${l.slug}`),
    ...posts.map((p) => `/blog/${p.slug}`),
    ...allCombos().map(({ t, l }) => comboUrl(t, l)),
  ];
  return urls.map((u) => ({ url: SITE_URL + u, lastModified: now, priority: u === '' ? 1 : u.startsWith('/gurgaon') ? 0.6 : 0.8 }));
}
