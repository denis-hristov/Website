import { ArrowUpRight } from 'lucide-react';
import useTimedCycle from '../hooks/useTimedCycle';
import SectionHead from '../ui/SectionHead';
import { ASSET_PATH, PROJECTS } from '../data/siteData';
export default function Work({ t }) { 
    const active = useTimedCycle(PROJECTS.length, 4000); 
    return <section className="work section" id="work">
        <SectionHead eyebrow={t.work[0]} title={t.work[1]} text={t.work[2]} />
        <div className="work-grid">{PROJECTS.map((project, i) => 
            <a className={`project ${active === i ? 'auto-active' : ''}`} key={project.name} href={project.href} target="_blank" rel="noreferrer" style={{ '--project': project.color }}>
                <img className="project-portal" src={`/design_img/${project.portal}`} alt="" />
                <div className="project-meta">
                    <span>0{i + 1}</span>
                    <ArrowUpRight />
                </div>
                <div className="project-logo">
                    <img src={ASSET_PATH + project.image} alt={`${project.name} ${t.work[4]}`} />
                </div>
                <small>{t.work[3][i]}</small>
                <h3>{project.name}</h3>
                <div className="project-line" />
            </a>)}
        </div>
    </section> 
}
