import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero, TreatmentCard, SecHead, CtaBanner } from '../../../components/Ui';
import Reveal from '../../../components/Reveal';
import { localities } from '../../../lib/localities';
import { treatments } from '../../../lib/treatments';
import { getLocality, comboUrl } from '../../../lib/pages';
import { clinic } from '../../../lib/clinic';

export const dynamicParams = false;
export const generateStaticParams = () => localities.map((l) => ({ locality: l.slug }));

export async function generateMetadata({ params }) {
  const { locality } = await params; const l = getLocality(locality); if (!l) return {};
  return { title: `Hair & Skin Clinic near ${l.name}, Gurgaon | DermaPlus Clinic`, description: `Hair transplant, PRP, acne, pigmentation, laser and cosmetic treatments for patients from ${l.name}, Gurgaon. Dermatologist-led care at Sector 38.`, alternates: { canonical: `/areas/${l.slug}` } };
}

export default async function Page({ params }) {
  const { locality } = await params; const l = getLocality(locality); if (!l) notFound();
  return (
    <>
      <PageHero crumbs={[[null, l.name]]} title={`Hair & Skin Treatments near ${l.name}, Gurgaon`} text={l.intro} />
      <section className="section">
        <div className="container">
          <SecHead eyebrow="Getting here" title={`Visiting DermaPlus from ${l.name}`} text={l.reach} />
          <p style={{ marginBottom: 36 }}><b>Clinic address:</b> {clinic.address}. Nearby areas we serve: {l.nearby.join(', ')}.</p>
          <div className="grid g3">
            {treatments.map((t) => <Reveal key={t.slug}><TreatmentCard t={t} href={comboUrl(t, l)} /></Reveal>)}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
