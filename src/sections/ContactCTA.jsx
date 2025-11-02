export default function ContactCTA() {
  const links = [
    { href: "https://www.instagram.com/denis_hristov/", label: "Instagram", icon: "fa-brands fa-instagram" },
    { href: "https://www.threads.net/@denis_hristov/", label: "Threads", icon: "fa-brands fa-threads" },
    { href: "https://www.linkedin.com/in/denis-hristov-profile/", label: "LinkedIn", icon: "fa-brands fa-linkedin-in" },
    { href: "https://www.youtube.com/@denis_hristov", label: "YouTube", icon: "fa-brands fa-youtube" },
    { href: "https://x.com/denis_hristov45?s=21", label: "Twitter", icon: "fa-brands fa-x-twitter" },
    { href: "https://github.com/denis-hristov", label: "GitHub", icon: "fa-brands fa-github" },
  ];
  return (
    <section id="contacts" className="px-6 py-10 bg-gray-50">
    <main className="px-6 py-10 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Contact me:</h2>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((l) => (
          <li key={l.href} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition">
            <a href={l.href} className="flex items-center justify-center gap-2 p-5 text-lg font-medium text-gray-800 hover:text-emerald-600">
              {l.label} <i className={l.icon} />
            </a>
          </li>
        ))}
      </ul>
    </main>
    </section>
  );
}