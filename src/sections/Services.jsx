import { ArrowRight, Code2, Layers3, Wrench } from 'lucide-react';
import useTimedCycle from '../hooks/useTimedCycle';
import SectionHead from '../ui/SectionHead';
import { EMAIL } from '../data/siteData';
const icons = [Code2, Layers3, Wrench];

export default function Services({ t }) { 
    const active = useTimedCycle(3, 3200); 
    return <section className="services section" id="services">
        <SectionHead eyebrow={t.services[0]} title={t.services[1]} text={t.services[2]} />
        <div className="service-grid">{t.services[4].map((service, i) => { const Icon = icons[i]; 
        return <article className={active === i ? 'auto-active' : ''} key={service[0]}>
            <div className="service-signal" />
            <div className="service-top">
                <span>0{i + 1}</span>
                <Icon />
            </div>
            <h3>{service[0]}</h3>
            <p>{service[1]}</p>
            <div>{service[2].map(tag => 
                <small key={tag}>{tag}</small>)}
            </div>
        </article> })}
    </div>
    <a className="section-cta" href={`mailto:${EMAIL}?subject=${encodeURIComponent(t.subject)}`}>{t.services[3]}
        <ArrowRight />
    </a>
</section> 
}
