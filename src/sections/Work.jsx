import AnimateIn from "../ui/AnimateIn";
import Section from "../ui/Section";

export default function Work() {
  const projects = [
    {
      t: "Gym App",
      s: "Track your workouts, calories, and share with friends.",
      live: "https://denis-fitplanner-pro.web.app/",
      img: "/resurses/logoGymApp.png",
      imgAlt: "Gym App preview"
    },
    {
      t: "Personal Archetype Quiz",
      s: "Understand yourself better and get personalized advice for improvement.",
      live: "https://personal-archetype.web.app/",
      img: "/resurses/PA-logo.svg",
      imgAlt: "Personal Archetype Quiz preview"
    },
    {
      t: "Employees Scheduler",
      s: "Manage your team and easily allocate tasks to each person.",
      live: "https://github.com/denis-hristov/Scheduler-employees-work",
      img: "/resurses/LogoEmployeesScheduler.png",
      imgAlt: "Employees Scheduler preview"
    },
    {
      t: "Business Template Website (in progress)",
      s: "An easy-to-adapt website template for any business.",
      live: "",
      img: "/resurses/BTW.png",
      imgAlt: "Business Template Website preview"
    },
    {
      t: "RenderGPT",
      s: "Demo startup for generating 3D apartment tours with interior design.",
      live: "https://render-gpt.lovable.app/",
      img: "/resurses/Logo renderGTP.png",
      imgAlt: "RenderGPT preview"
    },
  ];

  return (
    <Section id="work">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <h2 className="text-4xl md:text-5xl font-extrabold">Work</h2>
        </AnimateIn>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const clickable = !!(p.live && p.live.trim());
            const Tag = clickable ? "a" : "div";
            const wrapperProps = clickable
              ? {
                  href: p.live,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "block rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                }
              : {
                  className: "block rounded-2xl",
                  "aria-disabled": true
                };

            return (
              <AnimateIn key={p.t} delay={i * 0.05}>
                <Tag {...wrapperProps}>
                  <article
                    className={
                      "glass p-6 rounded-2xl transition-shadow " +
                      (clickable ? "hover:shadow-lg cursor-pointer" : "cursor-default")
                    }
                  >
                    {p.img ? (
                      <img
                        src={p.img}
                        alt={p.imgAlt || p.t}
                        loading="lazy"
                        className="h-36 w-full object-cover rounded-xl"
                      />
                    ) : (
                      <div className="h-36 rounded-xl bg-gradient-to-br from-indigo-200 via-white to-emerald-100 dark:from-indigo-900 dark:via-neutral-900 dark:to-emerald-900" />
                    )}
                    <h3 className="mt-4 text-lg font-semibold">{p.t}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">{p.s}</p>
                  </article>
                </Tag>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </Section>
  );
}