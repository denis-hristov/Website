import AnimateIn from "../ui/AnimateIn";
import Section from "../ui/Section";

export default function Services() {
  // Статично вградени последни постове от Threads (BG -> EN, без украси)
  const posts = [
    {
      id: "p2",
      user: "denis_hristov",
      time: "1d",
      en: "Don't wait for the perfect moment; it doesn't exist. When you stop waiting and searching for it, every moment will be ideal."
    },
    {
      id: "p3",
      user: "denis_hristov",
      time: "2d",
      en: "The body can handle it, but the mind convinces you otherwise. Act without planning every detail. The plan will change along the way anyway."
    },
    {
      id: "p4",
      user: "denis_hristov",
      time: "3d",
      en: "If the task seems impossible, you just haven't come up with the right way to execute it. Come up with an unusual solution to the problem."
    },
    {
      id: "p5",
      user: "denis_hristov",
      time: "4d",
      en: "First fix your mind with books, walks, and sport; then the world around you will become the way you have always wanted it."
    },
    {
      id: "p6",
      user: "denis_hristov",
      time: "5d",
      en: "Progress is boring. Working on the same thing every day without seeing an instant result. The one who learns to love being broken wins."
    },
    {
      id: "p7",
      user: "denis_hristov",
      time: "6d",
      en: "Work until it becomes normal for you to win. Then the real work begins."
    }
  ];

  return (
    <Section id="content" className="bg-neutral-50/60 dark:bg-neutral-900/40">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <h2 className="text-4xl md:text-5xl font-extrabold">Threads - latest posts</h2>
        </AnimateIn>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <AnimateIn key={p.id} delay={i * 0.05}>
              <article className="glass p-6 rounded-2xl">
                <header className="mb-3 flex items-center justify-between text-sm text-neutral-500">
                  <span>@{p.user}</span>
                  <time>{p.time}</time>
                </header>
                <p className="whitespace-pre-wrap text-neutral-900 dark:text-neutral-100">
                  {p.en}
                </p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </Section>
  );
}