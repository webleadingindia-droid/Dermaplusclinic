'use client';
import { useState } from 'react';
import Icon from './Icon';
import { clinic } from '../lib/clinic';

export default function ContactForm() {
  const [err, setErr] = useState({});
  function submit(e) {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget)); const er = {};
    if (!f.name?.trim()) er.name = 'Please enter your name';
    if (!/^[+\d][\d\s-]{8,14}$/.test((f.phone || '').trim())) er.phone = 'Enter a valid phone number';
    if (!f.message?.trim() || f.message.trim().length < 10) er.message = 'Please write a short message';
    setErr(er); if (Object.keys(er).length) return;
    const msg = `Hello DermaPlus Clinic,\nName: ${f.name}\nPhone: ${f.phone}\n${f.email ? `Email: ${f.email}\n` : ''}Message: ${f.message}`;
    window.open(`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  }
  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className="field"><label htmlFor="cn">Name *</label><input id="cn" name="name" autoComplete="name" />{err.name && <span className="err">{err.name}</span>}</div>
      <div className="two">
        <div className="field"><label htmlFor="cp">Phone *</label><input id="cp" name="phone" type="tel" autoComplete="tel" />{err.phone && <span className="err">{err.phone}</span>}</div>
        <div className="field"><label htmlFor="ce">Email</label><input id="ce" name="email" type="email" autoComplete="email" /></div>
      </div>
      <div className="field"><label htmlFor="cm">Message *</label><textarea id="cm" name="message" />{err.message && <span className="err">{err.message}</span>}</div>
      <button className="btn btn-primary" type="submit"><Icon name="whatsapp" /> Send on WhatsApp</button>
    </form>
  );
}
