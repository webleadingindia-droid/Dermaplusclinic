import Image from 'next/image';
import Link from 'next/link';
import { PageHero, SecHead, CtaBanner } from '../../components/Ui';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import { BookButton } from '../../components/BookingProvider';

export const metadata = {
  title: 'About DermaPlus Clinic | Hair & Skin Specialists in Gurgaon',
  description: 'DermaPlus is a centre of excellence for medical and cosmetic dermatology and hair restoration in Sector 38, Gurugram, led by Dr. Ravi Kant Bhusan and Dr. Anchal Sehrawat.',
  alternates: { canonical: '/about' },
};
const values = [['Excellence', 'Highest standards of medical care and precision for natural, lasting results.'], ['Compassion', 'We understand the emotional impact of hair loss and skin concerns and support you through every step.'], ['Integrity', 'Honest consultations and clear pricing with no hidden costs.']];
const adv = ['Gold-medalist dermatologists', 'Advanced FUE & FUT techniques', 'Natural hairline design', 'Affordable, transparent pricing', 'PRP & laser specialists', 'Premium brand products', 'Personalised treatment plans', 'High safety and hygiene standards', 'Easy EMI & finance options', 'Convenient location in Gurugram'];

export default function About() {
  return (
    <>
      <PageHero crumbs={[[null, 'About']]} title="A centre of excellence for hair & skin" text="Medical and cosmetic dermatology, hair restoration and transplant, under one roof in Gurugram." />
      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Who we are</span>
            <h2>About DermaPlus Clinic</h2>
            <p style={{ margin: '18px 0' }}>DermaPlus Hair Transplant & Skin Care Clinic is managed by Dr. Ravi Kant Bhusan (MBBS, MD, Gold Medalist) and Dr. Anchal Sehrawat (MBBS, DDVL, DNB). Both are experienced dermatologists, cosmetologists and trichologists.</p>
            <p>We treat skin, hair and nail conditions and offer aesthetic care including hair transplant, PRP, laser hair reduction, anti-ageing, pigmentation and acne scar treatment, fillers and Botox.</p>
            <div className="row-btns" style={{ marginTop: 26 }}><BookButton>Book Consultation</BookButton><Link href="/doctors" className="btn btn-outline">Meet our doctors</Link></div>
          </Reveal>
          <Reveal className="photo"><Image src="/img/clinic.jpg" alt="DermaPlus Clinic reception" width={770} height={475} sizes="(max-width:1020px) 100vw, 50vw" style={{ height: 'auto' }} /></Reveal>
        </div>
      </section>
      <section className="section alt">
        <div className="container grid g2">
          <Reveal className="card"><h3>Our mission</h3><p>To provide the highest quality dermatology and hair restoration services with compassion, integrity and excellence, delivering natural-looking results at affordable prices so every patient leaves with renewed confidence.</p></Reveal>
          <Reveal className="card"><h3>Our vision</h3><p>To be the most trusted hair transplant and skin care clinic in Gurgaon and NCR, continuously adopting advanced technology and expanding services to reach more patients.</p></Reveal>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SecHead center eyebrow="Why DermaPlus" title="The DermaPlus difference" />
          <div className="grid g2" style={{ maxWidth: 900, margin: '0 auto' }}>
            <ul className="checks">{adv.slice(0, 5).map((x) => <li key={x}><Icon name="check" />{x}</li>)}</ul>
            <ul className="checks">{adv.slice(5).map((x) => <li key={x}><Icon name="check" />{x}</li>)}</ul>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="container">
          <SecHead center eyebrow="Our values" title="What guides every consultation" />
          <div className="steps" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>{values.map(([h, p]) => <Reveal className="step" key={h}><h3>{h}</h3><p>{p}</p></Reveal>)}</div>
        </div>
      </section>
      <section className="section">
        <div className="container split rev">
          <Reveal className="photo"><Image src="/img/consult.jpg" alt="Consultation at DermaPlus" width={690} height={463} sizes="(max-width:1020px) 100vw, 50vw" style={{ height: 'auto' }} /></Reveal>
          <Reveal>
            <span className="eyebrow">Our clinic</span><h2>Comfortable, hygienic and modern</h2>
            <ul className="checks" style={{ marginTop: 18 }}>{['Hygienic, comfortable treatment rooms', 'Private consultation chambers', 'Advanced FUE hair transplant system', 'Latest laser technology', 'Friendly, trained staff', 'Easy EMI & finance options'].map((x) => <li key={x}><Icon name="check" />{x}</li>)}</ul>
          </Reveal>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
