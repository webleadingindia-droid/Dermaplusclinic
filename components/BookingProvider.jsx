'use client';
import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import Icon from './Icon';
import { clinic } from '../lib/clinic';
import { treatments } from '../lib/treatments';

const Ctx = createContext({ open: () => {} });
export const useBooking = () => useContext(Ctx);

export function BookButton({ children = 'Book Consultation', className = 'btn btn-primary', service, icon = true }) {
  const { open } = useBooking();
  return (
    <button type="button" className={className} onClick={() => open(service)}>
      {children}
      {icon && <Icon name="arrow" />}
    </button>
  );
}

export default function BookingProvider({ children }) {
  const [isOpen, setOpen] = useState(false);
  const [service, setService] = useState('');
  const [errors, setErrors] = useState({});
  const open = useCallback((s) => { setService(s || ''); setOpen(true); }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    const k = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [isOpen]);

  function submit(e) {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget));
    const er = {};
    if (!f.name || f.name.trim().length < 2) er.name = 'Please enter your name';
    if (!/^[+\d][\d\s-]{8,14}$/.test((f.phone || '').trim())) er.phone = 'Enter a valid phone number';
    setErrors(er);
    if (Object.keys(er).length) return;
    const msg = [
      'Hello DermaPlus Clinic, I would like to book a consultation.',
      `Name: ${f.name}`, `Phone: ${f.phone}`,
      f.service && `Treatment: ${f.service}`,
      f.date && `Preferred date: ${f.date}`,
      f.message && `Concern: ${f.message}`,
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    setOpen(false);
  }

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      <div className={`modal ${isOpen ? 'open' : ''}`} onClick={(e) => e.target === e.currentTarget && setOpen(false)} role="dialog" aria-modal="true" aria-label="Book consultation">
        <div className="box">
          <button className="x" onClick={() => setOpen(false)} aria-label="Close"><Icon name="x" /></button>
          <h3>Book a Consultation</h3>
          <p className="sub">Share your details and we will confirm your appointment on WhatsApp.</p>
          {isOpen && (
            <form className="form" onSubmit={submit} noValidate>
              <div className="field"><label htmlFor="bn">Full name *</label><input id="bn" name="name" autoComplete="name" />{errors.name && <span className="err">{errors.name}</span>}</div>
              <div className="two">
                <div className="field"><label htmlFor="bp">Phone *</label><input id="bp" name="phone" type="tel" autoComplete="tel" />{errors.phone && <span className="err">{errors.phone}</span>}</div>
                <div className="field"><label htmlFor="bd">Preferred date</label><input id="bd" name="date" type="date" /></div>
              </div>
              <div className="field"><label htmlFor="bs">Treatment</label>
                <select id="bs" name="service" defaultValue={service}>
                  <option value="">Select a treatment</option>
                  {treatments.map((t) => <option key={t.slug} value={t.name}>{t.name}</option>)}
                  <option value="General consultation">General consultation</option>
                </select>
              </div>
              <div className="field"><label htmlFor="bm">Your concern (optional)</label><textarea id="bm" name="message" /></div>
              <button className="btn btn-primary" type="submit"><Icon name="whatsapp" /> Send on WhatsApp</button>
            </form>
          )}
        </div>
      </div>
    </Ctx.Provider>
  );
}
