'use client';
import { useEffect, useState } from 'react';
import Icon from './Icon';
import { clinic } from '../lib/clinic';

export default function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600);
    f(); window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  return (
    <div className="float">
      <button className={`top ${show ? 'show' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><Icon name="up" /></button>
      <a className="call" href={clinic.phoneHref} aria-label="Call us"><Icon name="phone" /></a>
      <a className="wa" href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noopener" aria-label="WhatsApp us"><Icon name="whatsapp" /></a>
    </div>
  );
}
