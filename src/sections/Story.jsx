import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ASSET_PATH, EMAIL, SCENE_ACCENTS, SCENE_IMAGES } from '../data/siteData';

export default function Story({ t }) {
  const ref = useRef(null); const activeRef = useRef(0); const timer = useRef(null); const [active, setActive] = useState(0); const [previous, setPrevious] = useState(null); const [progress, setProgress] = useState(0);
  useEffect(() => { const update = () => { if (!ref.current) return; const rect = ref.current.getBoundingClientRect(); const value = Math.max(0, Math.min(1, -rect.top / (ref.current.offsetHeight - innerHeight))); const next = Math.min(3, Math.floor(value * 4)); setProgress(value); if (next !== activeRef.current) { setPrevious(activeRef.current); activeRef.current = next; setActive(next); clearTimeout(timer.current); timer.current = setTimeout(() => setPrevious(null), 850) } }; update(); addEventListener('scroll', update, { passive: true }); addEventListener('resize', update); return () => { removeEventListener('scroll', update); removeEventListener('resize', update); clearTimeout(timer.current) } }, []);
  return <section className="story" id="story" ref={ref} style={{ '--story-progress': progress }}>
    <div className="story-stage">
      <div className="story-visual">
        <div className="story-grid" />
        <div className="story-halo" />{t.scenes.map((scene, i) => 
          <figure className={`story-frame ${active === i ? 'active' : ''} ${previous === i ? 'previous' : ''}`} key={SCENE_IMAGES[i]} style={{ '--scene-accent': SCENE_ACCENTS[i] }} aria-hidden={active !== i}>
          <img src={ASSET_PATH + SCENE_IMAGES[i]} alt="" />
          <div className="frame-shade" />
          <span>{scene[3]}</span>
          </figure>)}
        </div>
        <div className="story-copy">
          <div className="story-topline">
            <span>{t.storyTop}</span>
            <b>{String(active + 1).padStart(2, '0')} / 04</b>
          </div>
          <div className="story-texts">{t.scenes.map((scene, i) => 
            <article className={active === i ? 'active' : ''} key={SCENE_IMAGES[i]}>
              <span>{scene[0]}</span>
              <h2>{scene[1]}</h2>
              <p>{scene[2]}</p>
                {i === 3 && <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(t.subject)}`}>
                {t.storyCta}
                <ArrowUpRight /></a>}
              </article>)}
          </div>
          <div className="story-timeline">{t.scenes.map((scene, i) => 
            <button key={SCENE_IMAGES[i]} className={active === i ? 'active' : ''} onClick={() => scrollTo({ top: ref.current.offsetTop + (i / 4) * (ref.current.offsetHeight - innerHeight), behavior: 'smooth' })} aria-label={`${t.frameLabel} ${i + 1}`}>
              <i />
              <span>{scene[3]}</span>
              </button>)}
          </div>
        </div>
      </div>
    </section>;
}
