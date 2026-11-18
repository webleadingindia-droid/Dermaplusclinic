export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dermaplusclinic.vercel.app';

export const clinic = {
  name: 'DermaPlus Clinic',
  tagline: 'Hair Transplant & Skin Care Clinic, Gurgaon',
  phone: '+91 9910901473',
  phoneHref: 'tel:+919910901473',
  landline: '0124 3163401',
  whatsapp: '919910901473',
  email: 'care@dermaplusclinicncr.com',
  address: 'Plot No 130-P, Medicity, Islampur Colony, Sector 38, Gurugram, Haryana 122003',
  mapsLink: 'https://maps.app.goo.gl/dSvrkrr85cVJT4W39',
  mapsEmbed: 'https://www.google.com/maps?q=Plot+No+130-P+Medicity+Islampur+Colony+Sector+38+Gurugram+122003&output=embed',
  hours: [
    ['Monday – Saturday', '10:00 AM – 7:00 PM'],
    ['Sunday', 'By appointment'],
  ],
  social: {
    facebook: 'https://www.facebook.com/dermaplusclinic',
    instagram: 'https://www.instagram.com/dermaplusclinic',
    youtube: 'https://www.youtube.com/dermaplus',
  },
  patients: 1345,
};

export const doctors = [
  {
    name: 'Dr. Ravi Kant Bhusan',
    degrees: 'MBBS, MD (Gold Medalist)',
    role: 'Dermatologist · Cosmetologist · Trichologist',
    initials: 'RB',
    bio: 'A gold-medalist dermatologist with a special focus on hair restoration and transplant. Known for planning natural hairlines and honest, no-pressure consultations.',
    focus: ['Hair transplant (FUE & FUT)', 'PRP for hair & skin', 'Medical dermatology'],
  },
  {
    name: 'Dr. Anchal Sehrawat',
    degrees: 'MBBS, DDVL, DNB',
    role: 'Dermatologist · Cosmetologist · Trichologist',
    initials: 'AS',
    bio: 'An experienced skin and cosmetic specialist treating acne, pigmentation, ageing concerns and hair fall with personalised, evidence-based plans.',
    focus: ['Acne, scars & pigmentation', 'Botox, fillers & anti-ageing', 'Laser treatments'],
  },
];

export const reviews = [
  { name: 'Rohit Sharma', treatment: 'Acne Treatment', text: 'Best dermatologist near me in Gurgaon. I took acne treatment here and got fast results. Truly the best skin clinic in Gurgaon.' },
  { name: 'Amit Verma', treatment: 'Hair Transplant', text: 'I had my hair transplant 6 months ago and the results are very natural. The doctor explained everything clearly and the staff was very supportive.' },
  { name: 'Deepak Yadav', treatment: 'Hair Transplant', text: 'I was very scared before the procedure, but the clinic made me feel comfortable. Results are better than I expected.' },
  { name: 'Shabnam Khan', treatment: 'Face PRP', text: 'Maine face PRP ka treatment liya. After 6 sessions meri skin tight and glowing ho gayi hai. Highly recommend.' },
  { name: 'Harbir Singh', treatment: 'Hair Transplant', text: 'Very satisfied with the hair transplant results. Looks completely natural and no visible scars. Thank you.' },
  { name: 'Vikas Gupta', treatment: 'Hair Treatment', text: 'Highly recommended for hair treatment in Gurugram. Very professional.' },
  { name: 'Pooja Sharma', treatment: 'Skin Glow', text: 'Maine skin glowing ke liye chemical peel, hydrafacial aur skin tightening treatment kiye. Main bahut khush hun.' },
  { name: 'Neha Singh', treatment: 'Clinic Experience', text: 'Clinic is well maintained and staff is polite. Results are gradually improving as promised.' },
  { name: 'Rahul Mehta', treatment: 'Hair PRP', text: 'Mujhe hair fall ki bahut problem thi. Doctor ne PRP suggest kiya aur maine 4 sessions liye. Mujhe bahut achha result mila.' },
  { name: 'Sana Ali', treatment: 'Chemical Peel', text: 'Doctor ne chemical peel suggest kiya aur maine 4 sessions liye. Kaafi improvement mila.' },
  { name: 'Salina Bibi', treatment: 'Laser Hair Removal', text: 'Maine full body laser hair removal ke 6 sessions liye aur mujhe bahut achha result mila.' },
];

export const results = [
  { n: 17, cat: 'Hair Transplant', label: 'Hair transplant – before & after' },
  { n: 2, cat: 'Hair Transplant', label: 'Hair transplant – before & after' },
  { n: 15, cat: 'Hair Transplant', label: 'Hair transplant – early growth' },
  { n: 16, cat: 'Hair Transplant', label: 'Hair transplant – before & after' },
  { n: 13, cat: 'Hair Transplant', label: 'Hairline restoration' },
  { n: 6, cat: 'Hair Transplant', label: 'Hairline design & result' },
  { n: 18, cat: 'Hair Transplant', label: 'Hairline design & result' },
  { n: 19, cat: 'Hair Transplant', label: 'Hairline design & result' },
  { n: 20, cat: 'Hair Transplant', label: 'Crown restoration' },
  { n: 10, cat: 'PRP', label: 'PRP hair results' },
  { n: 11, cat: 'PRP', label: 'PRP hair results' },
  { n: 7, cat: 'Acne & Scars', label: 'Acne treatment' },
  { n: 9, cat: 'Acne & Scars', label: 'Acne scar treatment' },
  { n: 8, cat: 'Acne & Scars', label: 'Mole / mark removal' },
  { n: 14, cat: 'Acne & Scars', label: 'Skin treatment' },
  { n: 1, cat: 'Minor Procedures', label: 'Cyst removal' },
  { n: 12, cat: 'Minor Procedures', label: 'Mole / wart removal' },
];
