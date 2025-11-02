import { motion, useScroll, useSpring } from "framer-motion";


export default function ScrollProgressBar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });
    return (
        <motion.div
            aria-hidden
            className="fixed left-0 top-0 h-[3px] w-full origin-left bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-400 z-[100]"
            style={{ scaleX }}
        />
    );
}