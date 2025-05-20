import { Routes, Route } from "react-router";

import Home from "./Components/Home";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import QuoteGenerator from "./Components/QuoteSection";

import Footer from "./Parts/Footer";
import Navigation from "./Parts/Navigation";

function App() {
    
    return(<>
        <Navigation/>
    
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/quoteGenerator" element={<QuoteGenerator />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contacts" element={<Contacts />}/>
        </Routes> 
                         
        <Footer/>
    </>);
}
export default App;
