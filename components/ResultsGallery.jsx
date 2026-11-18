'use client';
import { useState } from 'react';
import Image from 'next/image';
import Icon from './Icon';

export default function ResultsGallery({ items, limit }) {
  const cats = ['All', ...Array.from(new Set(items.map((i) => i.cat)))];
  const [cat, setCat] = useState('All');
  const [lb, setLb] = useState(null);
  let shown = items.filter((i) => cat === 'All' || i.cat === cat);
  if (limit) shown = shown.slice(0, limit);
  return (
    <>
      {!limit && (
        <div className="filters center">
          {cats.map((c) => <button key={c} className={c === cat ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>)}
        </div>
      )}
      <div className="gal">
        {shown.map((i) => (
          <figure key={i.n} onClick={() => setLb(i)}>
            <Image src={`/img/work/work-${i.n}.jpg`} alt={`${i.label} at DermaPlus Clinic`} width={370} height={370} sizes="(max-width:680px) 100vw, 25vw" />
            <figcaption>{i.label}</figcaption>
          </figure>
        ))}
      </div>
      {lb && (
        <div className="lb" onClick={() => setLb(null)} role="dialog" aria-modal="true">
          <button aria-label="Close"><Icon name="x" /></button>
          <Image src={`/img/work/work-${lb.n}.jpg`} alt={lb.label} width={740} height={740} />
        </div>
      )}
    </>
  );
}
