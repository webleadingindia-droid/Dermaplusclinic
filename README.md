# DermaPlus Clinic – Next.js (Phase 2: redesign + 100 Gurgaon pages)

    npm install
    npm run dev        # http://localhost:3000
    npm run build && npm start

## What changed
- Naya design system (`app/globals.css`), jQuery poora hata diya. Sab kuch React hai, `next/link` se navigation bina page reload.
- 142 static pages: core pages, 20 treatment pages, 5 area hubs, 4 blog posts, aur **100 location pages**.
- SEO: unique title/description/canonical, FAQ + Breadcrumb + MedicalClinic JSON-LD, `sitemap.xml`, `robots.txt`.

## 100 location pages
`/gurgaon/<treatment>-in-<locality>`  e.g. `/gurgaon/hair-transplant-in-sohna-road`
20 treatments (`lib/treatments.js`) x 5 localities (`lib/localities.js`).
Naya locality add karne ke liye `lib/localities.js` me ek object add karein: 20 naye pages auto ban jayenge.
Naya treatment add karne par har locality ke liye ek naya page banega.

## Zaroori: update karein
- `NEXT_PUBLIC_SITE_URL` (default https://dermaplusclinic.vercel.app – domain email se assume kiya hai).
- Clinic timings: header me Mon–Sat 10–7 + Sunday by appointment hai, purane footer me Sun–Sat 10–8 tha. `lib/clinic.js` me sahi karein.
- Doctors ki real photos (`app/doctors/page.jsx` abhi initials dikhata hai) aur logo (`components/Logo.jsx`).
- Booking/contact forms WhatsApp (+91 9910901473) par prefilled message bhejte hain; email/CRM chahiye to API route add karein.
- Location pages me asli local content/reviews add karte rahein; sirf template wali content Google ko thin/doorway lag sakti hai.
