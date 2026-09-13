import { ArrowUpRight } from 'lucide-react';
import { EMAIL } from '../data/siteData';
export default function Contact({ t }) 
{ return <footer id="contact">
    <h2>{t.contact[0]}</h2>
    <p>{t.contact[1]}</p>
    <a className="email" href={`mailto:${EMAIL}?subject=${encodeURIComponent(t.subject)}`}>
        <span>{EMAIL}</span>
        <ArrowUpRight />
    </a>
    <div className="footer-row">
        <span>© 2026 Denis Hristov</span>
        <div>
            <a href="https://github.com/denis-hristov">GitHub</a>
            <a href="https://www.linkedin.com/in/denis-hristov-profile/">LinkedIn</a>
            <a href="https://www.youtube.com/@denis_hristov">YouTube</a>
            <a href="https://www.instagram.com/denis_hristov/">Instagram</a>
        </div>
        <button onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>{t.contact[2]}</button>
    </div>
</footer> 
}
