import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="DermaPlus Clinic home">
      <img
        src="https://plain-apac-prod-public.komododecks.com/202611/18/H9udiDzmNcw9K1r6yMw9/image.png"
        alt="DermaPlus logo"
        className="logo-mark"
        width={85}
      />
    </Link>
  );
}