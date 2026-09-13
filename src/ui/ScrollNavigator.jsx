import { ArrowDown, ArrowUp } from 'lucide-react';
export default function ScrollNavigator({ t }) { 
    const ids = ['home', 'story', 'metrics', 'services', 'work', 'about', 'quotes', 'contact']; 
    const move = direction => { 
        const y = scrollY + innerHeight * .35; 
        const positions = ids.map(id => ({ id, top: document.getElementById(id)?.offsetTop ?? 0 })); 
        let index = positions.findLastIndex(item => item.top <= y); 
        index = Math.max(0, Math.min(positions.length - 1, index + direction)); 
        document.getElementById(positions[index].id)?.scrollIntoView({ behavior: 'smooth' }) }; 
        return <div className="scroll-nav" aria-label={t.pageNav}>
            <button onClick={() => move(-1)} aria-label={t.previous}>
                <ArrowUp />
            </button>
            <span />
            <button onClick={() => move(1)} aria-label={t.next}>
                <ArrowDown />
            </button>
        </div> 
    }
