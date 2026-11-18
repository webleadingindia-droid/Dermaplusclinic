'use client';
import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Icon from './Icon';
import { BookButton } from './BookingProvider';

const slides = [
  { img: '/img/hero-1.jpg', h: <>Natural hair, <em>restored</em> by specialists</>, p: 'Advanced FUE & FUT hair transplant with a hairline designed for your face. Honest advice, transparent pricing.' },
  { img: '/img/hero-2.jpg', h: <>Clear, glowing skin, <em>led by dermatologists</em></>, p: 'Acne, pigmentation, PRP, peels, Botox and fillers in one trusted Gurugram clinic.' },
];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="hero">
      {slides.map((s, k) => (
        <div key={k} className={`hero-slide ${k === i ? 'on' : ''}`}>
          <Image src={s.img} alt="" fill priority={k === 0} sizes="100vw" />
        </div>
      ))}
      <div className="container">
        <span className="eyebrow" style={{ color: 'var(--gold)' }}>DermaPlus Clinic · Sector 38, Gurugram</span>
        <h1>{slides[i].h}</h1>
        <p className="lead">{slides[i].p}</p>
        <div className="row-btns">
          <BookButton className="btn btn-gold">Book Consultation</BookButton>
          <Link href="/services" className="btn btn-ghost" style={{ color: '#fff' }}>Explore Treatments</Link>
        </div>
        <div className="hero-badges">
          <span><Icon name="award" />Gold-medalist dermatologist</span>
          <span><Icon name="users" />1345+ happy patients</span>
          <span><Icon name="shield" />Safe, hygienic procedures</span>
        </div>
      </div>
      <div className="hero-dots">{slides.map((_, k) => <button key={k} className={k === i ? 'on' : ''} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`} />)}</div>
    </section>
  );
}
