export default function SectionHead({ eyebrow, title, text }) {
  return <div className="section-head">
    <span className="section-label">{eyebrow}</span>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>;
}
