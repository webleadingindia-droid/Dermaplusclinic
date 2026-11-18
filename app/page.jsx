import Link from 'next/link';
import Image from 'next/image';
import Hero from '../components/Hero';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import Faq from '../components/Faq';
import JsonLd from '../components/JsonLd';
import ReviewCarousel from '../components/ReviewCarousel';
import ResultsGallery from '../components/ResultsGallery';
import { SecHead, TreatmentCard, CtaBanner } from '../components/Ui';
import { BookButton } from '../components/BookingProvider';
import { treatments } from '../lib/treatments';
import { localities } from '../lib/localities';
import { reviews, results } from '../lib/clinic';

const featured = ['hair-transplant', 'prp-hair-treatment', 'acne-treatment', 'laser-hair-removal', 'botox', 'pigmentation-treatment'];
const faqs = [
  ['Where is DermaPlus Clinic located?', 'We are at Plot No 130-P, Medicity, Islampur Colony, Sector 38, Gurugram, Haryana 122003.'],
  ['Who will treat me?', 'Your treatment is planned and supervised by our dermatologists, Dr. Ravi Kant Bhusan (MBBS, MD, Gold Medalist) and Dr. Anchal Sehrawat (MBBS, DDVL, DNB).'],
  ['Do I need an appointment?', 'We recommend booking so that the doctor can give you enough time. Call or WhatsApp us, or use the Book Consultation button.'],
  ['Is hair transplant permanent?', 'Yes. Transplanted follicles are taken from a hair-loss-resistant area and keep growing for life. Your doctor will explain how to protect your existing hair too.'],
  ['Do you offer EMI or finance options?', 'Easy EMI and finance options are available for selected treatments. Please ask our team at the time of consultation.'],
];

export const metadata = {
  title: 'DermaPlus Clinic | Best Hair Transplant & Skin Clinic in Gurgaon',
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <Hero />
      <section className="strip">
        <div className="container">
          <div><Icon name="award" /><span><b>Gold-medalist doctors</b><small>MBBS, MD · DDVL, DNB</small></span></div>
          <div><Icon name="users" /><span><b>1345+ happy patients</b><small>Natural, honest results</small></span></div>
          <div><Icon name="shield" /><span><b>Safe & hygienic</b><small>Modern equipment</small></span></div>
          <div><Icon name="heart" /><span><b>Transparent pricing</b><small>EMI options available</small></span></div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal className="photo">
            <Image src="/img/clinic-front.jpg" alt="DermaPlus Clinic, Sector 38 Gurugram" width={680} height={510} sizes="(max-width:1020px) 100vw, 50vw" style={{ height: 'auto' }} />
            <div className="photo-badge"><b>1345+</b><small>happy patients</small></div>
          </Reveal>
          <Reveal>
            <span className="eyebrow">Welcome to DermaPlus</span>
            <h2>A centre of excellence for hair and skin</h2>
            <p style={{ margin: '18px 0' }}>DermaPlus is managed by Dr. Ravi Kant Bhusan and Dr. Anchal Sehrawat, experienced dermatologists, cosmetologists and trichologists. We treat every skin, hair and nail concern, from medical dermatology to hair restoration and cosmetic care.</p>
            <ul className="checks">
              {['Hair transplant (FUE & FUT) at affordable, transparent prices', 'PRP, laser, peels, Botox and fillers', 'Personalised plans, never a one-size package', 'Comfortable clinic in Sector 38, Gurugram'].map((x) => <li key={x}><Icon name="check" />{x}</li>)}
            </ul>
            <div className="row-btns" style={{ marginTop: 28 }}>
              <BookButton>Book Consultation</BookButton>
              <Link href="/about" className="btn btn-outline">About the clinic</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SecHead center eyebrow="Our Treatments" title="Expert care for hair, skin and aesthetics" text="Every plan starts with a proper diagnosis. Choose a treatment to learn how it works, who it suits and what to expect." />
          <div className="grid g3">
            {featured.map((s) => <Reveal key={s}><TreatmentCard t={treatments.find((t) => t.slug === s)} /></Reveal>)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}><Link href="/services" className="btn btn-outline">View all {treatments.length} treatments</Link></div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <SecHead center eyebrow="How It Works" title="From first visit to final result" />
          <div className="steps">
            {[['Consultation', 'We listen, examine your hair or skin and explain what is causing the problem.'], ['Personal plan', 'You get a clear plan with treatment options, timeline and pricing.'], ['Treatment', 'Procedures are done by qualified doctors in a hygienic, comfortable setting.'], ['Follow-up', 'Regular reviews and aftercare so your results keep improving.']].map(([h, p]) => (
              <Reveal className="step" key={h}><h3>{h}</h3><p>{p}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SecHead center eyebrow="Real Results" title="Before & after from our patients" text="Photos from our own clinic. Results vary from person to person." />
          <ResultsGallery items={results} limit={8} />
          <div style={{ textAlign: 'center', marginTop: 30 }}><Link href="/gallery" className="btn btn-outline">See full results gallery</Link></div>
        </div>
      </section>

      <section className="section dark" style={{ padding: '64px 0' }}>
        <div className="container stats">
          <div className="stat"><CountUp to={1345} suffix="+" /><span>Happy patients</span></div>
          <div className="stat"><CountUp to={20} /><span>Treatments offered</span></div>
          <div className="stat"><CountUp to={2} /><span>Expert dermatologists</span></div>
          <div className="stat"><CountUp to={5} suffix="/5" /><span>Average patient rating</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SecHead center eyebrow="Patient Stories" title="What our patients say" />
          <ReviewCarousel items={reviews} />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SecHead center eyebrow="Serving Gurugram" title="Patients visit us from across Gurgaon" text="Our clinic is in Sector 38. Find treatment information for your area." />
          <div className="grid g3" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }}>
            {localities.map((l) => (
              <Link key={l.slug} href={`/areas/${l.slug}`} className="card"><span className="ico-wrap"><Icon name="pin" /></span><h3>{l.name}</h3><p>{l.full}</p><span className="more">Treatments near you <Icon name="arrow" /></span></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SecHead center eyebrow="FAQs" title="Questions we hear often" />
          <Faq items={faqs} />
        </div>
      </section>
      <CtaBanner />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }} />
    </>
  );
}
