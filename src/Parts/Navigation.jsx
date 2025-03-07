import{Link}from 'react-router'
import { useLocation } from "react-router-dom";

export default function Navigation(){
    const navigation=[
        {name:'Home', path:'/'},
        {name:'QuoteGenerator', path:'/quoteGenerator'},
        {name:'Blog', path:'/blog'},
        {name:'About', path:'/about'},
        {name:'Contacts', path:'/contacts'},
    ]

    const pageTitles = {
        "/": "Denis's Page",
        "/quoteGenerator": "Denis's Quote",
        "/blog": "Denis's Blog",
        "/about": "About Denis",
        "/contacts": "Contact Denis",
    };

    const location = useLocation();

    const currentTitle = pageTitles[location.pathname] || "Denis's Page";
    

    return(
        <>
            <nav className="nav-body">
                <input type="checkbox" id="nav-toggle"/>
                <div className="site">
                    <header>
                        <h1><Link to="index.html">{currentTitle}</Link></h1>

                        <label for="nav-toggle" className="menu-button">
                            <span className="open">☰ Menu</span>
                        </label>

                        <nav className="main-nav">
                            <ul>
                                {navigation.map((item)=>(
                                    <li><Link key={item.name} to={item.path}>{item.name}</Link></li>
                                ))}
                                <li className="close"><Link to="index.html">✖</Link></li>
                            </ul>
                        </nav>
                    </header>
                </div>
            </nav>
        </>
    )
}