import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHero, SideCard, CtaBanner } from '../../../components/Ui';
import JsonLd from '../../../components/JsonLd';
import { posts, getPost } from '../../../lib/blog';
import { SITE_URL } from '../../../lib/clinic';

export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));
export async function generateMetadata({ params }) {
  const { slug } = await params; const p = getPost(slug); if (!p) return {};
  return { title: `${p.title} | DermaPlus Clinic`, description: p.excerpt, alternates: { canonical: `/blog/${p.slug}` } };
}

export default async function Post({ params }) {
  const { slug } = await params; const p = getPost(slug); if (!p) notFound();
  return (
    <>
      <PageHero crumbs={[['/blog', 'Blog'], [null, p.cat]]} title={p.title} text={p.excerpt} />
      <section className="section"><div className="container detail">
        <article className="prose">
          {p.body.map(([k, t], i) => (k === 'h' ? <h2 key={i}>{t}</h2> : <p key={i}>{t}</p>))}
          <div className="note">This article is for general information and is not a substitute for medical advice. <Link href="/contact" style={{ color: 'var(--brand)', fontWeight: 600 }}>Book a consultation</Link> for advice specific to you.</div>
        </article>
        <SideCard />
      </div></section>
      <CtaBanner />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: p.title, datePublished: p.date, image: SITE_URL + p.img, author: { '@type': 'Organization', name: 'DermaPlus Clinic' } }} />
    </>
  );
}
