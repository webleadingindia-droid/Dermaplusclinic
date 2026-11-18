import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero, SideCard, CtaBanner, SecHead } from '../../../components/Ui';
import TreatmentBody from '../../../components/TreatmentBody';
import Faq from '../../../components/Faq';
import JsonLd from '../../../components/JsonLd';
import { treatments, getTreatment } from '../../../lib/treatments';
import { localities } from '../../../lib/localities';
import { comboUrl } from '../../../lib/pages';

export const dynamicParams = false;
export const generateStaticParams = () => treatments.map((t) => ({ slug: t.slug }));

export async function generateMetadata({ params }) {
  const { slug } = await params; const t = getTreatment(slug); if (!t) return {};
  return { title: `${t.name} in Gurgaon | DermaPlus Clinic, Sector 38`, description: `${t.tagline} ${t.name} at DermaPlus Clinic, Gurugram by Dr. Ravi Kant Bhusan and Dr. Anchal Sehrawat.`.slice(0, 158), alternates: { canonical: `/services/${t.slug}` } };
}

export default async function Page({ params }) {
  const { slug } = await params; const t = getTreatment(slug); if (!t) notFound();
  return (
    <>
      <PageHero crumbs={[['/services', 'Treatments'], [null, t.name]]} title={`${t.name} in Gurgaon`} text={t.tagline} />
      <section className="section">
        <div className="container detail">
          <div>
            <TreatmentBody t={t} />
            <h2 style={{ margin: '44px 0 18px' }}>Frequently asked questions</h2>
            <Faq items={t.faqs} />
            <h2 style={{ margin: '44px 0 16px' }}>{t.name} near you in Gurgaon</h2>
            <div className="pill-list">
              {localities.map((l) => <Link key={l.slug} className="pill" href={comboUrl(t, l)}>{t.name} in {l.name}</Link>)}
            </div>
          </div>
          <SideCard />
        </div>
      </section>
      <CtaBanner />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: t.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }} />
    </>
  );
}
