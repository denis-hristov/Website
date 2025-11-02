import ScrollProgressBar from "./ui/ScrollProgressBar";
import Nav from "./ui/Nav";
import Footer from "./ui/Footer";
import ScrollToTopButton from "./ui/ScrollToTopButton.jsx";


import Hero from "./sections/Hero";
import Features from "./sections/Features";
import StickyShowcase from "./sections/StickyShowcase";
import Metrics from "./sections/Metrics";
import Gallery from "./sections/Gallery";
import ContactCTA from "./sections/ContactCTA";
import ABOUT from "./sections/About";
import QUOTE from "./sections/QuoteSection";
import Services from "./sections/Services";
import Work from "./sections/Work";


export default function App() {
	return (
		<div className="relative text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-950 selection:bg-indigo-200/60 dark:selection:bg-indigo-700/30">
			<div id="top" />
			<ScrollProgressBar />
			<Nav />
			<main>
				<Hero />
				<Services />
        <Work />
				<ABOUT />
				<Features />
				<QUOTE />
				<StickyShowcase />
				<Metrics />
				<Gallery />
				<ContactCTA />
			</main>
			<ScrollToTopButton threshold={240} to="top" />
			<Footer />
		</div>
	);
}