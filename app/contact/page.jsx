import { PageHero } from '../../components/Ui';
import Icon from '../../components/Icon';
import ContactForm from '../../components/ContactForm';
import { clinic } from '../../lib/clinic';

export const metadata = {
  title: 'Contact & Book Appointment | DermaPlus Clinic, Sector 38 Gurgaon',
  description: 'Call, WhatsApp or visit DermaPlus Clinic at Plot 130-P, Medicity, Sector 38, Gurugram. Mon–Sat 10 AM – 7 PM.',
  alternates: { canonical: '/contact' },
};

export default function Contact() {
  return (
    <>
      <PageHero crumbs={[[null, 'Contact']]} title="Contact us" text="Book a consultation or ask us anything. We usually reply on WhatsApp the same day." />
      <section className="section"><div className="container grid g2" style={{ alignItems: 'start' }}>
        <div>
          <ul className="info-list">
            <li><Icon name="pin" /><span><b>Address</b><br />{clinic.address}<br /><a href={clinic.mapsLink} target="_blank" rel="noopener" style={{ color: 'var(--brand)', fontWeight: 600 }}>Get directions →</a></span></li>
            <li><Icon name="phone" /><span><b>Phone</b><br /><a href={clinic.phoneHref}>{clinic.phone}</a> · {clinic.landline}</span></li>
            <li><Icon name="mail" /><span><b>Email</b><br /><a href={`mailto:${clinic.email}`}>{clinic.email}</a></span></li>
            <li><Icon name="clock" /><span><b>Hours</b><br />Mon–Sat 10:00 AM – 7:00 PM<br />Sunday by appointment</span></li>
          </ul>
          <div className="map" style={{ marginTop: 26 }}><iframe title="DermaPlus Clinic map" src={clinic.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </div>
        <div className="side-card"><h3>Send us a message</h3><ContactForm /></div>
      </div></section>
    </>
  );
}
