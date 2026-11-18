'use client';
import { useRef } from 'react';
import Icon from './Icon';
export default function ReviewCarousel({ items }) {
  const ref = useRef(null);
  const go = (d) => ref.current?.scrollBy({ left: d * 400, behavior: 'smooth' });
  return (
    <div className="rv-wrap">
      <div className="rv-track" ref={ref}>
        {items.map((r) => (
          <article className="rv" key={r.name}>
            <div className="stars" aria-label="5 out of 5">{[0, 1, 2, 3, 4].map((k) => <Icon key={k} name="star" />)}</div>
            <p>“{r.text}”</p>
            <footer><span className="av">{r.name[0]}</span><div><b>{r.name}</b><small>{r.treatment}</small></div></footer>
          </article>
        ))}
      </div>
      <div className="rv-nav">
        <button onClick={() => go(-1)} aria-label="Previous"><Icon name="left" /></button>
        <button onClick={() => go(1)} aria-label="Next"><Icon name="right" /></button>
      </div>
    </div>
  );
}
