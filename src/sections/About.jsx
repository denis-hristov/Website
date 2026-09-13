import { ArrowUpRight } from 'lucide-react';
import { ASSET_PATH, EMAIL, PHOTOS } from '../data/siteData';
function PhotoWall() { return <div className="photo-wall">{PHOTOS.map((photo, i) => <figure key={photo} className={`photo p${i + 1}`}><img src={ASSET_PATH + photo} alt="" /></figure>)}</div> }
export default function About({ t }) 
{ return <section className="about section" id="about">
        <div className="about-copy">
            <span className="section-label">{t.about[0]}</span>
            <h2>{t.about[1]}</h2>
            <p>{t.about[2]}</p>
            <p>{t.about[3]}</p>
            <div className="stats">{t.about[4].map(([value, label]) => 
                <div key={label}><b>{value}</b><span>{label}</span></div>)}
            </div>
            <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(t.subject)}`}>{t.about[5]}
                <ArrowUpRight />
            </a>
        </div>
        <PhotoWall />
    </section> 
}
