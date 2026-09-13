export default function Ticker({ text }) {
  return <div className="ticker">
    <div>{[0, 1].map(index => 
      <span key={index}>{text}</span>)}
    </div>
  </div>;
}
