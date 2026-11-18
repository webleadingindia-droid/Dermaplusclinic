import { PageHero, CtaBanner } from '../../components/Ui';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import { reviews } from '../../lib/clinic';

export const metadata = {
  title: 'Patient Reviews | DermaPlus Clinic Gurgaon',
  description: 'Read what patients say about hair transplant, PRP, acne and skin treatments at DermaPlus Clinic, Sector 38 Gurugram.',
  alternates: { canonical: '/testimonials' },
};

export default function Testimonials() {
  return (
    <>
      <PageHero crumbs={[[null, 'Reviews']]} title="What our patients say" text="Average rating 5 out of 5 from patients across Gurugram." />
      <section className="section"><div className="container grid g3">
        {reviews.map((r) => (
          <Reveal className="rv" key={r.name} style={{ flex: 'none' }}>
            <div className="stars">{[0, 1, 2, 3, 4].map((k) => <Icon key={k} name="star" />)}</div>
            <p>“{r.text}”</p>
            <footer><span className="av">{r.name[0]}</span><div><b>{r.name}</b><small>{r.treatment}</small></div></footer>
          </Reveal>
        ))}
      </div></section>
      <CtaBanner />
    </>
  );
}
