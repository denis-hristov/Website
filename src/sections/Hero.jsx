import { ArrowDown, ArrowUpRight, Braces, Mail, Rocket } from 'lucide-react';
import useTimedCycle from '../hooks/useTimedCycle';
import { ASSET_PATH, EMAIL } from '../data/siteData';

export default function Hero({ go, t }) {
  const word = useTimedCycle(t.hero.words.length, 2400);
  const status = useTimedCycle(t.hero.states.length, 3000);
  const orbitPhase = useTimedCycle(2, 7000);
  return <section className="hero" id="home">
    <div className="hero-copy">
      <h1>{t.hero.titleStart} <span className="rotating-word" key={t.hero.words[word]}> {t.hero.words[word]}</span>
        <br />
        <em>{t.hero.titleEnd}</em>
      </h1>
      <p>{t.hero.text}</p>
      <div className="hero-actions">
        <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(t.subject)}`}>
          <Mail />{t.hero.primary}
          <ArrowUpRight />
        </a>
        <button onClick={() => go('work')}>{t.hero.secondary}
          <ArrowDown />
        </button>
      </div>
    </div>
    <div className={`hero-art orbit-phase-${orbitPhase}`}>
      <img className="hologram-screen" src="/design_img/code_screen.png" alt="" />
      <div className="orbit orbit-a" />
      <div className="orbit orbit-b" />
      <div className="code-card">
        <span>{t.hero.status}</span>
        <b className="status-value" key={t.hero.states[status]}>
          <i />{t.hero.states[status]}
          <span className="terminal-cursor" />
        </b>
        <small>{t.hero.stack}</small>
      </div>
      <div className="portrait">
        <img src={ASSET_PATH + 'IMG_8514.JPG'} alt="Denis Hristov" />
        <span>{t.hero.role}</span>
      </div>
      <div className="floating-tag tag-one">
        <Braces /> {t.hero.clean}
      </div>
      <div className="floating-tag tag-two">
        <Rocket /> {t.hero.ship}
      </div>
    </div>
  </section>;
}
