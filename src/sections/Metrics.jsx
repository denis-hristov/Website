import CountUp from '../ui/CountUp';
import SectionHead from '../ui/SectionHead';

export default function Metrics({ t }) {
  const days = date => Math.max(0, Math.floor((new Date().setHours(0, 0, 0, 0) - new Date(date).getTime()) / 86400000) + 1);
  const values = [3, 11, 27, days('2025-10-06'), 140, days('2025-09-01')];
  return <section className="metrics section" id="metrics">
    <img className="metrics-plant" src="/design_img/plant.png" alt="" />
    <img className="metrics-plant-corner" src="/design_img/plant_corner.png" alt="" />
    <SectionHead eyebrow={t.metrics[0]} title={t.metrics[1]} text={t.metrics[2]} />
    <div className="metric-grid">{values.map((value, i) => <article key={t.metrics[3][i]} style={{ '--delay': `${i * 70}ms` }}><span>0{i + 1}</span><CountUp value={value} /><p>{t.metrics[3][i]}</p></article>)}</div>
  </section>;
}
