import { treatments, getTreatment, lcName } from './treatments';
import { localities } from './localities';
import { clinic } from './clinic';

export const comboSlug = (t, l) => `${t.slug}-in-${l.slug}`;
export const comboUrl = (t, l) => `/gurgaon/${comboSlug(t, l)}`;
export const getLocality = (slug) => localities.find((l) => l.slug === slug);

export const allCombos = () =>
  treatments.flatMap((t) => localities.map((l) => ({ t, l, slug: comboSlug(t, l) })));

export function parseCombo(slug) {
  for (const t of treatments) {
    for (const l of localities) if (comboSlug(t, l) === slug) return { t, l };
  }
  return null;
}

const lc = lcName;

const angles = {
  Hair: [
    (t, l) => `Hair concerns are personal, and results depend on your scalp, donor density and goals. That is why people from ${l.name} start with a short in-person assessment instead of a one-size-fits-all package.`,
    (t, l) => `Most ${lc(t.name)} patients from ${l.name} tell us they want a natural look that nobody notices. We plan the density and direction of every graft or session with that in mind.`,
    (t, l) => `Hair growth is slow, so a clear plan and realistic timeline matter more than quick promises. We map out what to expect month by month before you commit to anything.`,
  ],
  Skin: [
    (t, l) => `Pollution, dust and strong sun in the Delhi–NCR climate affect skin all year, so the plan we build for ${l.name} residents always includes a daily sun-protection and home-care routine.`,
    (t, l) => `Good skin treatment is a mix of the right procedure and the right routine at home. At the consultation we look at both, so your results last after you leave the clinic.`,
    (t, l) => `Every skin type reacts differently. We check your skin first and choose the gentlest approach that can still deliver the change you are looking for.`,
  ],
  Aesthetics: [
    (t, l) => `Aesthetic treatments work best when they look like you, only fresher. We take a conservative, balanced approach and plan changes in stages for people visiting from ${l.name}.`,
    (t, l) => `For a treatment like ${lc(t.name)}, the doctor's judgement matters as much as the product or device. You are always seen and treated by a qualified dermatologist.`,
    (t, l) => `Busy professionals from ${l.name} often prefer treatments with little downtime. We will tell you plainly what the recovery looks like so you can plan your week.`,
  ],
};

const intros = [
  (t, l) => `Looking for ${lc(t.name)} near ${l.name}, Gurgaon? DermaPlus Clinic offers expert ${lc(t.name)} under qualified dermatologists at our Sector 38 clinic. ${l.intro}`,
  (t, l) => `${l.intro} If you are considering ${lc(t.name)}, our dermatologists will assess your concern, explain the options honestly and design a plan around you.`,
  (t, l) => `${t.tagline} Patients from ${l.name} and nearby areas visit DermaPlus Clinic in Sector 38, Gurugram for ${lc(t.name)} guided by Dr. Ravi Kant Bhusan and Dr. Anchal Sehrawat.`,
  (t, l) => `${t.overview} ${l.intro}`,
];

export function buildCombo(t, l) {
  const ti = treatments.indexOf(t);
  const li = localities.indexOf(l);
  const intro = intros[(ti + li) % intros.length](t, l);
  const angle = angles[t.cat][(ti + li * 2) % 3](t, l);
  const h1 = `${t.name} in ${l.name}, Gurgaon`;
  const title = `${t.name} in ${l.name}, Gurgaon | DermaPlus Clinic`;
  const description = `${t.name} for patients from ${l.name}, Gurgaon at DermaPlus Clinic, Sector 38. ${t.tagline} Book a consultation with our dermatologists.`.slice(0, 158);

  const localFaqs = [
    [`Do you offer ${lc(t.name)} near ${l.name}?`, l.here
      ? `Yes. DermaPlus Clinic is in ${l.full}, at ${clinic.address}. You can walk in for a consultation or book ahead.`
      : `Our clinic is at ${clinic.address}, and we regularly see patients from ${l.full}. ${l.reach}`],
    [`How do I book ${lc(t.name)} from ${l.name}?`, `Call ${clinic.phone} or message us on WhatsApp, or use the Book Consultation button on this page. Tell us your concern and we will suggest a suitable time.`],
  ];

  const faqs = [...t.faqs, ...localFaqs];

  const url = comboUrl(t, l);
  return {
    t, l, url, h1, title, description, intro, angle, faqs,
    relatedTreatments: treatments.filter((x) => x.slug !== t.slug && x.cat === t.cat).slice(0, 3)
      .concat(treatments.filter((x) => x.slug !== t.slug && x.cat !== t.cat).slice((ti * 2) % 10, ((ti * 2) % 10) + 3)).slice(0, 6),
    otherAreas: localities.filter((x) => x.slug !== l.slug),
  };
}

export { treatments, localities, getTreatment };
