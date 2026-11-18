import Link from 'next/link';
import Logo from './Logo';
import Icon from './Icon';
import { clinic } from '../lib/clinic';
import { treatments } from '../lib/treatments';
import { localities } from '../lib/localities';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="cols">
          <div>
            <Logo />
            <p>Hair transplant, dermatology and cosmetic care in Gurugram, led by Dr. Ravi Kant Bhusan and Dr. Anchal Sehrawat. Honest advice, natural results.</p>
            <div className="socials">
              <a href={clinic.social.facebook} target="_blank" rel="noopener" aria-label="Facebook"><Icon name="facebook" /></a>
              <a href={clinic.social.instagram} target="_blank" rel="noopener" aria-label="Instagram"><Icon name="instagram" /></a>
              <a href={clinic.social.youtube} target="_blank" rel="noopener" aria-label="YouTube"><Icon name="youtube" /></a>
            </div>
          </div>
          <div>
            <h4>Treatments</h4>
            <ul>{treatments.slice(0, 8).map((t) => <li key={t.slug}><Link href={`/services/${t.slug}`}>{t.name}</Link></li>)}
              <li><Link href="/services">View all →</Link></li></ul>
          </div>
          <div>
            <h4>Areas We Serve</h4>
            <ul>{localities.map((l) => <li key={l.slug}><Link href={`/areas/${l.slug}`}>{l.name}</Link></li>)}</ul>
            <h4 style={{ marginTop: 22 }}>Company</h4>
            <ul><li><Link href="/about">About</Link></li><li><Link href="/doctors">Doctors</Link></li><li><Link href="/blog">Blog</Link></li><li><Link href="/contact">Contact</Link></li></ul>
          </div>
          <div>
            <h4>Visit Us</h4>
            <ul className="ct">
              <li><Icon name="pin" /><span>{clinic.address}<br /><a href={clinic.mapsLink} target="_blank" rel="noopener" style={{ color: 'var(--gold)' }}>Get directions →</a></span></li>
              <li><Icon name="phone" /><span><a href={clinic.phoneHref}>{clinic.phone}</a>, {clinic.landline}</span></li>
              <li><Icon name="mail" /><a href={`mailto:${clinic.email}`}>{clinic.email}</a></li>
              <li><Icon name="clock" /><span>Mon–Sat 10 AM – 7 PM<br />Sunday by appointment</span></li>
            </ul>
          </div>
        </div>
        <div className="fbar">
          <span>© {new Date().getFullYear()} DermaPlus Clinic. All rights reserved.</span>
          <span>Results vary from person to person. Treatments are advised after consultation.</span>
        </div>
      </div>
    </footer>
  );
}
