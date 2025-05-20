import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navigation() {
    const navigation = [
        { name: 'Home', path: '/' },
        { name: 'QuoteGenerator', path: '/quoteGenerator' },
        { name: 'About', path: '/about' },
        { name: 'Contacts', path: '/contacts' },
    ];

    const pageTitles = {
        '/': "Denis's Page",
        '/quoteGenerator': "Denis's Quote",
        '/about': "About Denis",
        '/contacts': "Contact Denis",
    };

    const location = useLocation();
    const currentTitle = pageTitles[location.pathname] || "Denis's Page";

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="nav-body">
            <div className="site">
                <header>
                    <h1><Link to="/">{currentTitle}</Link></h1>

                    <button className="menu-button" onClick={toggleMenu}>
                        {menuOpen ? '✖ Close' : '☰ Menu'}
                    </button>

                    <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
                        <ul>
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} onClick={closeMenu}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>
            </div>
        </nav>
    );
}
