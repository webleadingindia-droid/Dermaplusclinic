import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero, SideCard, CtaBanner } from '../../../components/Ui';
import TreatmentBody from '../../../components/TreatmentBody';
import Faq from '../../../components/Faq';
import Icon from '../../../components/Icon';
import JsonLd from '../../../components/JsonLd';
import { allCombos, parseCombo, buildCombo, comboUrl } from '../../../lib/pages';
import { clinic, SITE_URL } from '../../../lib/clinic';

export const dynamicParams = false;
export const generateStaticParams = () => allCombos().map(({ slug }) => ({ slug }));

export async function generateMetadata({ params }) {
  const { slug } = await params; const c = parseCombo(slug); if (!c) return {};
  const p = buildCombo(c.t, c.l);
  return { title: p.title, description: p.description, alternates: { canonical: p.url }, openGraph: { title: p.title, description: p.description, url: p.url } };
}

export default async function Page({ params }) {
  const { slug } = await params; const c = parseCombo(slug); if (!c) notFound();
  const p = buildCombo(c.t, c.l); const { t, l } = p;
  const ld = [
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: p.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [['Home', '/'], ['Gurgaon', `/areas/${l.slug}`], [p.h1, p.url]].map(([n, u], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: SITE_URL + u })) },
    { '@context': 'https://schema.org', '@type': 'MedicalWebPage', name: p.h1, url: SITE_URL + p.url, about: t.name, publisher: { '@type': 'MedicalClinic', name: clinic.name } },
  ];
  return (
    <>
      <PageHero crumbs={[[`/areas/${l.slug}`, l.name], [null, t.name]]} title={p.h1} text={t.tagline} />
      <section className="section">
        <div className="container detail">
          <div>
            <TreatmentBody t={t} intro={p.intro} angle={p.angle} locName={l.name} />
            <div className="prose">
              <h2>Visiting us from {l.name}</h2>
              <p>{l.reach}</p>
              <p>{l.here ? 'Nearby areas we serve include' : 'We also see patients from nearby areas such as'} {l.nearby.join(', ')}.</p>
              <ul className="checks">
                <li><Icon name="pin" />{clinic.address}</li>
                <li><Icon name="clock" />Mon–Sat 10 AM – 7 PM · Sunday by appointment</li>
                <li><Icon name="phone" />{clinic.phone} (call or WhatsApp)</li>
              </ul>
            </div>
            <h2 style={{ margin: '44px 0 18px', fontSize: '1.7rem' }}>{t.name} in {l.name}: FAQs</h2>
            <Faq items={p.faqs} />
            <h2 style={{ margin: '44px 0 16px', fontSize: '1.5rem' }}>More treatments for patients from {l.name}</h2>
            <div className="pill-list">{p.relatedTreatments.map((x) => <Link key={x.slug} className="pill" href={comboUrl(x, l)}>{x.name} in {l.name}</Link>)}</div>
            <h2 style={{ margin: '36px 0 16px', fontSize: '1.5rem' }}>{t.name} in other Gurgaon areas</h2>
            <div className="pill-list">{p.otherAreas.map((x) => <Link key={x.slug} className="pill" href={comboUrl(t, x)}>{t.name} in {x.name}</Link>)}</div>
            <p style={{ marginTop: 22 }}><Link href={`/services/${t.slug}`} className="more">Read the full {t.name} guide <Icon name="arrow" /></Link></p>
          </div>
          <SideCard />
        </div>
      </section>
      <CtaBanner title={`${t.name} for ${l.name} residents`} />
      {ld.map((d, i) => <JsonLd key={i} data={d} />)}
    </>
  );
}
