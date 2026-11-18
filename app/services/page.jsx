import { PageHero, TreatmentCard, SecHead, CtaBanner } from '../../components/Ui';
import Reveal from '../../components/Reveal';
import { treatments, categories } from '../../lib/treatments';

export const metadata = {
  title: 'Hair, Skin & Aesthetic Treatments in Gurgaon | DermaPlus Clinic',
  description: 'Explore hair transplant, PRP, acne, pigmentation, laser hair removal, Botox, fillers and more at DermaPlus Clinic, Sector 38 Gurugram.',
  alternates: { canonical: '/services' },
};

export default function Services() {
  return (
    <>
      <PageHero crumbs={[[null, 'Treatments']]} title="Our Treatments" text="Evidence-based hair, skin and aesthetic care, planned after a proper consultation with our dermatologists." />
      {categories.map((c, i) => (
        <section key={c} className={`section ${i % 2 ? 'alt' : ''}`}>
          <div className="container">
            <SecHead eyebrow={c} title={c === 'Hair' ? 'Hair restoration & care' : c === 'Skin' ? 'Skin health & clarity' : 'Cosmetic & anti-ageing'} />
            <div className="grid g3">
              {treatments.filter((t) => t.cat === c).map((t) => <Reveal key={t.slug}><TreatmentCard t={t} /></Reveal>)}
            </div>
          </div>
        </section>
      ))}
      <CtaBanner />
    </>
  );
}
