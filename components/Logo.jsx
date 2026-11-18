import Link from 'next/link';
export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="DermaPlus Clinic home">
      <span className="logo-mark">D+</span>
      <span><b>DermaPlus</b><small>Hair &amp; Skin Clinic</small></span>
    </Link>
  );
}
