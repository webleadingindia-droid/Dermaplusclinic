import { PageHero, CtaBanner } from '../../components/Ui';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import { BookButton } from '../../components/BookingProvider';
import { doctors } from '../../lib/clinic';

export const metadata = {
  title: 'Our Doctors | Dr. Ravi Kant Bhusan & Dr. Anchal Sehrawat, Gurgaon',
  description: 'Meet DermaPlus Clinic dermatologists: Dr. Ravi Kant Bhusan (MBBS, MD, Gold Medalist) and Dr. Anchal Sehrawat (MBBS, DDVL, DNB).',
  alternates: { canonical: '/doctors' },
};

export default function Doctors() {
  return (
    <>
      <PageHero crumbs={[[null, 'Doctors']]} title="Meet our dermatologists" text="Experienced dermatologists, cosmetologists and trichologists who personally plan and supervise your treatment." />
      <section className="section">
        <div className="container" style={{ display: 'grid', gap: 28 }}>
          {doctors.map((d) => (
            <Reveal className="doc" key={d.name}>
              <div className="doc-av" aria-hidden="true">{d.initials}</div>
              <div>
                <span className="tag">{d.role}</span>
                <h2 style={{ fontSize: '2rem', margin: '10px 0 4px' }}>{d.name}</h2>
                <p style={{ color: 'var(--brand)', fontWeight: 600, marginBottom: 12 }}>{d.degrees}</p>
                <p>{d.bio}</p>
                <ul className="checks" style={{ margin: '14px 0 20px' }}>{d.focus.map((x) => <li key={x}><Icon name="check" />{x}</li>)}</ul>
                <BookButton service="General consultation" className="btn btn-primary btn-sm">Book with {d.name.split(' ')[1]}</BookButton>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
