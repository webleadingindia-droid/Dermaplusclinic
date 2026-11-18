export const posts = [
  {
    slug: 'hair-transplant-recovery-timeline', title: 'Hair Transplant: What to Expect and the Recovery Timeline', date: '2026-01-17', cat: 'Hair Transplant', img: '/img/work/work-16.jpg',
    excerpt: 'From the first week to the final result at 12 months, here is what actually happens after a hair transplant.',
    body: [
      ['p', 'A hair transplant is a minor surgical procedure that moves healthy follicles to thinning areas. Knowing what to expect at each stage removes most of the anxiety people feel beforehand.'],
      ['h', 'Week 1: healing'], ['p', 'You may notice redness, swelling and small scabs. Most people return to desk work within about a week. Follow your wash routine and avoid touching the grafts.'],
      ['h', 'Weeks 2 to 6: shedding'], ['p', 'The transplanted hairs often shed. This is normal and the follicles remain alive under the skin, getting ready to grow new hair.'],
      ['h', 'Months 3 to 6: new growth'], ['p', 'Fine new hair starts to appear and gradually thickens. Patience is important, since hair has a slow growth cycle.'],
      ['h', 'Months 9 to 12: final result'], ['p', 'Most patients see their full result between nine and twelve months. A follow-up visit lets your doctor review density and advise on supportive treatments such as PRP.'],
    ],
  },
  {
    slug: 'skin-care-routine-for-healthy-glow', title: 'A Dermatologist\'s Simple Skin Care Routine for a Healthy Glow', date: '2026-01-10', cat: 'Skin Care', img: '/img/hero-2.jpg',
    excerpt: 'You do not need ten products. Four steps, done consistently, make the biggest difference.',
    body: [
      ['p', 'Your skin reflects your overall health. Dermatologists usually recommend a simple routine that you can actually keep up.'],
      ['h', '1. Cleanse gently'], ['p', 'Use a mild cleanser twice a day. Harsh scrubbing damages the skin barrier.'],
      ['h', '2. Treat your concern'], ['p', 'An antioxidant serum, a retinoid or an acne treatment can be added, but introduce one product at a time and ideally under a doctor\'s advice.'],
      ['h', '3. Moisturise'], ['p', 'Even oily skin needs hydration. Pick a lightweight, non-comedogenic formula.'],
      ['h', '4. Sunscreen every morning'], ['p', 'Daily SPF is the single best step against pigmentation, tanning and early ageing. Reapply if you spend long hours outdoors.'],
    ],
  },
  {
    slug: 'prp-for-hair-fall-how-it-works', title: 'PRP for Hair Fall: How It Works and Who It Suits', date: '2025-12-20', cat: 'PRP Treatment', img: '/img/work/work-10.jpg',
    excerpt: 'PRP uses your own blood to energise weak follicles. Here is when it helps and when it does not.',
    body: [
      ['p', 'Platelet-rich plasma (PRP) is made from a small sample of your own blood. The concentrated plasma is rich in growth factors and is injected into the scalp to support weak follicles.'],
      ['h', 'Who benefits most'], ['p', 'People with early or moderate thinning, where follicles are still alive but weak, usually respond best. It is also used after a hair transplant to support healing.'],
      ['h', 'What to expect'], ['p', 'PRP is generally planned as a series of sessions. There is little downtime, and many patients notice less shedding first and better thickness later.'],
      ['h', 'When PRP is not enough'], ['p', 'On completely bald areas, PRP cannot create new follicles. In such cases a transplant may be discussed after an examination.'],
    ],
  },
  {
    slug: 'laser-hair-removal-what-to-know', title: 'Laser Hair Removal: What to Know Before Your First Session', date: '2025-12-05', cat: 'Laser Hair Removal', img: '/img/laser.jpg',
    excerpt: 'How many sessions, how to prepare and what to avoid, answered simply.',
    body: [
      ['p', 'Laser hair removal reduces unwanted hair by targeting the pigment in the follicle. It is popular because it replaces regular shaving and waxing with a course of sessions.'],
      ['h', 'How many sessions do I need?'], ['p', 'Most areas need six or more sessions spaced several weeks apart, because hair grows in cycles and only active hairs respond at a time.'],
      ['h', 'How to prepare'], ['p', 'Avoid sun exposure and tanning, and do not wax or thread the area. Shave before the session only if you are advised to.'],
      ['h', 'Aftercare'], ['p', 'Mild redness is normal. Moisturise, avoid hot showers and saunas for a day, and use sunscreen on treated areas.'],
    ],
  },
];
export const getPost = (s) => posts.find((p) => p.slug === s);
