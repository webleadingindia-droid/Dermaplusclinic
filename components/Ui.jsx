import Link from 'next/link';
import Icon from './Icon';
import Reveal from './Reveal';
import { BookButton } from './BookingProvider';
import { clinic } from '../lib/clinic';

export function PageHero({ crumbs = [], title, text }) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          {crumbs.map(([h, l]) => (<span key={l} style={{ display: 'contents' }}><i>/</i>{h ? <Link href={h}>{l}</Link> : <span>{l}</span>}</span>))}
        </nav>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}

export function SecHead({ eyebrow, title, text, center }) {
  return (
    <Reveal className={`sec-head ${center ? 'center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  );
}

export function TreatmentCard({ t, href }) {
  return (
    <Link href={href || `/services/${t.slug}`} className="card">
      <span className="ico-wrap"><Icon name={t.icon} /></span>
      <span className="tag">{t.cat}</span>
      <h3>{t.name}</h3>
      <p>{t.tagline}</p>
      <span className="more">Learn more <Icon name="arrow" /></span>
    </Link>
  );
}

export function CtaBanner({ title = 'Ready for natural, confident results?', text = 'Book a consultation with our dermatologists. We will assess your concern and explain the options honestly.' }) {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="cta">
          <div><h2>{title}</h2><p>{text}</p></div>
          <div className="row-btns">
            <BookButton className="btn btn-gold">Book Consultation</BookButton>
            <a className="btn btn-ghost" href={clinic.phoneHref}><Icon name="phone" /> Call Now</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SideCard() {
  return (
    <div className="side">
      <div className="side-card brand">
        <h3>Book your consultation</h3>
        <p>Meet our dermatologists for an honest assessment and a clear plan.</p>
        <BookButton className="btn btn-gold">Book Consultation</BookButton>
        <a className="btn btn-ghost" href={clinic.phoneHref} style={{ color: '#fff' }}><Icon name="phone" /> {clinic.phone}</a>
      </div>
      <div className="side-card">
        <h3>Clinic hours</h3>
        <ul className="info-list" style={{ marginBottom: 6 }}>
          {clinic.hours.map(([d, h]) => <li key={d}><Icon name="clock" /><span><b>{d}</b><br />{h}</span></li>)}
        </ul>
        <p style={{ fontSize: '.88rem' }}>{clinic.address}</p>
      </div>
    </div>
  );
}
