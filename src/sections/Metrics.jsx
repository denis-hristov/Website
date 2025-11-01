import { motion } from "framer-motion";
import Section from "../ui/Section";


export default function Metrics() {
	const metrics = [
		{ label: "Projects", value: 18 },
		{ label: "Repos", value: 12 },
		{ label: "Clients Helped", value: 9 },
		{ label: "Daily Quotes", value: 660 }
	];


	return (
		<Section id="metrics" className="bg-neutral-50/60 dark:bg-neutral-900/40">
			<div className="mx-auto max-w-6xl">
				<h2 className="text-3xl sm:text-5xl font-extrabold">Numbers that grow</h2>
				<p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-2xl">Animated, legible figures that reinforce credibility without shouting.</p>
				<div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
					{metrics.map((m, i) => (
						<motion.div
							key={m.label}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.6 }}
							transition={{ delay: i * 0.05 }}
							className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 text-center shadow-sm"
						>
							<motion.div initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ type: "spring", stiffness: 140, damping: 14 }} className="text-4xl sm:text-5xl font-extrabold">
								{m.value}
							</motion.div>
							<div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{m.label}</div>
						</motion.div>
					))}
				</div>
			</div>
		</Section>
	);
}