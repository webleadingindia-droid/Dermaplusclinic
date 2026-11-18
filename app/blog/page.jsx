import Link from 'next/link';
import Image from 'next/image';
import { PageHero, CtaBanner } from '../../components/Ui';
import Reveal from '../../components/Reveal';
import { posts } from '../../lib/blog';

export const metadata = {
  title: 'Hair & Skin Care Blog | DermaPlus Clinic Gurgaon',
  description: 'Expert tips on hair transplant, PRP, laser hair removal and skin care from the dermatologists at DermaPlus Clinic.',
  alternates: { canonical: '/blog' },
};
const fmt = (d) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

export default function Blog() {
  return (
    <>
      <PageHero crumbs={[[null, 'Blog']]} title="Hair & skin care blog" text="Practical advice from our dermatologists." />
      <section className="section"><div className="container grid g2">
        {posts.map((p) => (
          <Reveal key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="card post-card">
              <div className="ph"><Image src={p.img} alt={p.title} width={600} height={375} sizes="(max-width:680px) 100vw, 50vw" /></div>
              <div className="bd"><span className="tag">{p.cat}</span><h3>{p.title}</h3><p>{p.excerpt}</p><span className="meta">{fmt(p.date)}</span></div>
            </Link>
          </Reveal>
        ))}
      </div></section>
      <CtaBanner />
    </>
  );
}
