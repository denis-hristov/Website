import AnimateIn from "../ui/AnimateIn";
const links = [
  { href: "https://www.instagram.com/denis_hristov/", label: "Instagram", icon: "fa-brands fa-instagram" },
  { href: "https://www.threads.net/@denis_hristov/", label: "Threads", icon: "fa-brands fa-threads" },
  { href: "https://www.linkedin.com/in/denis-hristov-profile/", label: "LinkedIn", icon: "fa-brands fa-linkedin-in" },
  { href: "https://www.youtube.com/@denis_hristov", label: "YouTube", icon: "fa-brands fa-youtube" },
  { href: "https://www.tiktok.com/@denis_hristov", label: "TikTok", icon: "fa-brands fa-tiktok" },
  // { href: "https://x.com/denis_hristov45?s=21", label: "Twitter", icon: "fa-brands fa-x-twitter" },
  { href: "https://github.com/denis-hristov", label: "GitHub", icon: "fa-brands fa-github" },
];
export default function ContactCTA() {
  return (
    <section id="contacts" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimateIn>
          <h2 className="text-3xl font-extrabold text-center mb-10">Contact me</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="glass p-4 flex items-center justify-center gap-3 hover:scale-105 transition"
              >
                <span className="font-medium">{l.label}</span>
                <i className={l.icon} />
              </a>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}