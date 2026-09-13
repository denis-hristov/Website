import { ArrowUpRight, Languages, Menu, X } from 'lucide-react';
import { EMAIL } from '../data/siteData';
export default function Header({ language, setLanguage, menu, setMenu, navVisible, go, t }) { 
    return <>
    <header className={!navVisible && !menu ? 'nav-hidden' : ''}>
        <button className="logo" onClick={() => go('home')}>
            <span>DH</span>
            <b>Denis Hristov</b>
        </button>
        <nav>{['services', 'work', 'about', 'quotes'].map(id => 
            <button key={id} onClick={() => go(id)}>{t.nav[id]}</button>)}
        </nav>
        <div className="header-actions">
            <button className="language-toggle" onClick={() => setLanguage(language === 'en' ? 'bg' : 'en')} aria-label={language === 'en' ? 'Превключи на български' : 'Switch to English'}>
                <Languages />
                <span>{language === 'en' ? 'BG' : 'EN'}</span>
            </button>
            <a className="nav-mail" href={`mailto:${EMAIL}?subject=${encodeURIComponent(t.subject)}`}>{t.nav.start}
                <ArrowUpRight />
            </a>
            <button className="menu" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label={menu ? t.nav.close : t.nav.open}>{menu ? <X /> : <Menu />}
            </button>
        </div>
    </header>
    {menu && <div className="mobile-nav">{['services', 'work', 'about', 'quotes'].map(id => 
        <button key={id} onClick={() => go(id)}>{t.nav[id]}</button>)}
    <a href={`mailto:${EMAIL}`}>{t.nav.email}</a>
    </div>}
</>
}
