import Link from 'next/link';
export default function NotFound() {
  return (
    <section className="section"><div className="container" style={{ textAlign: 'center' }}>
      <h1>Page not found</h1><p style={{ margin: '16px 0 28px' }}>The page you are looking for does not exist.</p>
      <Link href="/" className="btn btn-primary">Back to home</Link>
    </div></section>
  );
}
