import { useEffect, useRef, useState } from 'react';
import { RefreshCw, Sparkles } from 'lucide-react';
import { ASSET_PATH } from '../data/siteData';
export default function QuoteGenerator({ t }) { 
    const [quotes, setQuotes] = useState([]); 
    const [current, setCurrent] = useState(''); 
    const [number, setNumber] = useState(0); 
    const [spin, setSpin] = useState(false); 
    const last = useRef(-1); useEffect(() => { 
        fetch(ASSET_PATH + 'Quotes.txt').then(r => r.text()).then(text => { 
            const list = text.split(/\r?\n/).map(x => x.replace(/^\s*\d+[.\t]\s*/, '').trim()).filter(Boolean); 
            setQuotes(list); 
            if (list.length) { const n = Math.floor(Math.random() * list.length); 
                last.current = n; setNumber(n + 1); 
                setCurrent(list[n]) } }).catch(() => setCurrent('')) }, []); 
                const next = () => { if (!quotes.length) return; 
                setSpin(true); let n = Math.floor(Math.random() * quotes.length); 
                if (quotes.length > 1) while (n === last.current) n = Math.floor(Math.random() * quotes.length); 
                last.current = n; setTimeout(() => { setNumber(n + 1); 
                setCurrent(quotes[n]); setSpin(false) }, 180) }; 
                return <section className="quotes section" id="quotes">
                    <div className="quote-side">
                        <span className="section-label">{t.quotes[0]}</span>
                        <h2>{quotes.length || '660+'}
                            <br />
                            <em>{t.quotes[1]}</em>
                        </h2>
                        <p>{t.quotes[2]}</p>
                    </div>
                    <div className={`quote-machine ${spin ? 'changing' : ''}`}>
                        <Sparkles />
                        <span className="quote-no">{t.quotes[3]} {String(number).padStart(3, '0')}</span>
                        <blockquote>“{current || (number ? t.quotes[5] : t.quotes[4])}”</blockquote>
                        <button onClick={next}>
                            <RefreshCw />{t.quotes[6]}
                        </button>
                    <div className="quote-orb" />
                </div>
            </section> 
}
