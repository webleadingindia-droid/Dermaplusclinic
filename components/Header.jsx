'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Icon from './Icon';
import { BookButton } from './BookingProvider';
import { clinic } from '../lib/clinic';
import { treatments, categories } from '../lib/treatments';

const links = [['/about', 'About'], ['/doctors', 'Doctors'], ['/gallery', 'Results'], ['/testimonials', 'Reviews'], ['/blog', 'Blog'], ['/contact', 'Contact']];

export default function Header() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 12);
    f(); window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  useEffect(() => { setDrawer(false); }, [path]);
  useEffect(() => { document.body.style.overflow = drawer ? 'hidden' : ''; }, [drawer]);

  const act = (h) => (path === h || path.startsWith(h + '/') ? 'active' : '');

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="l">
            <a href={clinic.phoneHref}><Icon name="phone" />{clinic.phone}</a>
            <span><Icon name="clock" />Mon–Sat 10 AM – 7 PM · Sun by appointment</span>
          </div>
          <div className="r">
            <a href={`mailto:${clinic.email}`}><Icon name="mail" />{clinic.email}</a>
          </div>
        </div>
      </div>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Logo />
          <ul className="nav">
            <li><Link href="/" className={`link ${path === '/' ? 'active' : ''}`}>Home</Link></li>
            <li>
              <Link href="/services" className={`link ${act('/services')}`}>Treatments <Icon name="chev" /></Link>
              <div className="dd">
                {categories.map((c) => (
                  <div key={c}>
                    <h4>{c}</h4>
                    {treatments.filter((t) => t.cat === c).map((t) => (
                      <Link key={t.slug} href={`/services/${t.slug}`}>{t.name}</Link>
                    ))}
                  </div>
                ))}
              </div>
            </li>
            {links.map(([h, l]) => (<li key={h}><Link href={h} className={`link ${act(h)}`}>{l}</Link></li>))}
          </ul>
          <div className="hdr-cta">
            <BookButton className="btn btn-primary btn-sm">Book Consultation</BookButton>
            <button className="menu-btn" onClick={() => setDrawer(true)} aria-label="Open menu"><Icon name="menu" /></button>
          </div>
        </div>
      </header>
      <div className={`drawer ${drawer ? 'open' : ''}`} onClick={(e) => e.target === e.currentTarget && setDrawer(false)}>
        <aside>
          <div className="top"><Logo /><button className="menu-btn" onClick={() => setDrawer(false)} aria-label="Close menu"><Icon name="x" /></button></div>
          <Link href="/" className="m">Home</Link>
          <details>
            <summary>Treatments <Icon name="chev" /></summary>
            <Link href="/services">All treatments</Link>
            {treatments.map((t) => <Link key={t.slug} href={`/services/${t.slug}`}>{t.name}</Link>)}
          </details>
          {links.map(([h, l]) => <Link key={h} href={h} className="m">{l}</Link>)}
          <BookButton className="btn btn-primary">Book Consultation</BookButton>
          <a className="btn btn-outline" style={{ marginTop: 12, width: '100%' }} href={clinic.phoneHref}><Icon name="phone" /> Call {clinic.phone}</a>
        </aside>
      </div>
    </>
  );
}
