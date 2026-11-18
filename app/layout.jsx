import './globals.css';
import BookingProvider from '../components/BookingProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';
import JsonLd from '../components/JsonLd';
import { SITE_URL, clinic } from '../lib/clinic';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'DermaPlus Clinic | Best Hair Transplant & Skin Clinic in Gurgaon', template: '%s' },
  description: 'DermaPlus Clinic, Sector 38 Gurugram: hair transplant, PRP, laser hair removal, acne, pigmentation, Botox and fillers by Dr. Ravi Kant Bhusan and Dr. Anchal Sehrawat.',
  icons: { icon: '/img/favicon.png' },
  openGraph: { type: 'website', siteName: 'DermaPlus Clinic', locale: 'en_IN' },
  alternates: { canonical: './' },
};
export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#7a3a12' };

const org = {
  '@context': 'https://schema.org', '@type': 'MedicalClinic', name: clinic.name, url: SITE_URL,
  telephone: clinic.phone, email: clinic.email, image: `${SITE_URL}/img/clinic-front.jpg`,
  address: { '@type': 'PostalAddress', streetAddress: 'Plot No 130-P, Medicity, Islampur Colony, Sector 38', addressLocality: 'Gurugram', addressRegion: 'Haryana', postalCode: '122003', addressCountry: 'IN' },
  medicalSpecialty: 'Dermatology',
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '10:00', closes: '19:00' }],
  sameAs: Object.values(clinic.social),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <BookingProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </BookingProvider>
        <JsonLd data={org} />
      </body>
    </html>
  );
}
