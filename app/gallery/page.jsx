import { PageHero, CtaBanner } from '../../components/Ui';
import ResultsGallery from '../../components/ResultsGallery';
import { results } from '../../lib/clinic';

export const metadata = {
  title: 'Before & After Results Gallery | DermaPlus Clinic Gurgaon',
  description: 'Real before and after photos of hair transplant, PRP, acne and skin treatments at DermaPlus Clinic, Sector 38 Gurugram.',
  alternates: { canonical: '/gallery' },
};

export default function Gallery() {
  return (
    <>
      <PageHero crumbs={[[null, 'Results']]} title="Results gallery" text="Before and after photos from our own patients. Click any photo to view it larger." />
      <section className="section"><div className="container">
        <ResultsGallery items={results} />
        <p className="disclaimer">Patient photos are shared with consent. Individual results vary and depend on skin, hair type, health and aftercare.</p>
      </div></section>
      <CtaBanner />
    </>
  );
}
