import Icon from './Icon';
import { lcName } from '../lib/treatments';

export default function TreatmentBody({ t, intro, angle, locName }) {
  return (
    <div className="prose">
      {intro && <p style={{ fontSize: '1.12rem', color: 'var(--ink)' }}>{intro}</p>}
      <h2>What is {lcName(t.name)}?</h2>
      <p>{t.overview}</p>
      {angle && <p>{angle}</p>}
      <div className="facts">
        <div className="fact"><small>Sessions</small><b>{t.sessions}</b></div>
        <div className="fact"><small>Downtime</small><b>{t.downtime}</b></div>
        <div className="fact" style={{ gridColumn: '1/-1' }}><small>Typical timeline</small><b>{t.timeline}</b></div>
      </div>
      <h2>Who is it for?</h2>
      <ul className="checks">{t.who.map((x) => <li key={x}><Icon name="check" />{x}</li>)}</ul>
      <h2>Benefits{locName ? ` for patients from ${locName}` : ''}</h2>
      <ul className="checks">{t.benefits.map((x) => <li key={x}><Icon name="check" />{x}</li>)}</ul>
      <h2>How the treatment works</h2>
      <ol style={{ paddingLeft: 22 }}>{t.steps.map((x) => <li key={x}>{x}</li>)}</ol>
      <h2>Aftercare tips</h2>
      <ul className="checks">{t.care.map((x) => <li key={x}><Icon name="check" />{x}</li>)}</ul>
      <div className="note">Results vary from person to person. The exact plan, number of sessions and cost are decided by the doctor after an in-person consultation.</div>
    </div>
  );
}
