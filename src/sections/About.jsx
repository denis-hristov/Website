export default function About() {
  return (
    <section id="about" className="bg-gray-50">
    <main className="px-6 py-10 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
        Hello, I'm Denis!
      </h2>

      {/* Why I Do What I Do */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">Why I Do What I Do</h3>
          <p className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-gray-700">
            I’m driven by a deep desire to contribute to society through innovation and impact...
          </p>
          <p className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-gray-700">
            With experience across multiple domains — from programming and entrepreneurship to economics and sports...
          </p>
        </div>
        <div className="flex justify-center">
          <img className="rounded-lg shadow-md max-w-full" src="/resurses/Aspire 1.jpg" alt="Motivation and vision" />
        </div>
      </section>

      {/* My 5-Year Vision */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div className="order-2 md:order-1 flex justify-center">
          <img className="rounded-lg shadow-md max-w-full" src="/resurses/Aspire 2.jpg" alt="Planning for success" />
        </div>
        <div className="order-1 md:order-2 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">My 5-Year Vision</h3>
          <p className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-gray-700">
            My biggest goal is to build a sustainable and impactful business that helps people grow...
          </p>
          <p className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-gray-700">
            Surrounding myself with inspiring individuals who challenge me to improve is a vital part of this journey.
          </p>
        </div>
      </section>

      {/* The Business I’m Building */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">The Business I’m Building</h3>
          <p className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-gray-700">
            I’m building a company that empowers people to become more productive and focused on their goals...
          </p>
          <p className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-gray-700">
            My website already features a prototype of a quote generator — a tool built on years of personal reflections...
          </p>
          <a
            href="/quoteGenerator"
            className="inline-block mt-2 px-5 py-2 rounded-md bg-emerald-600 text-white font-semibold shadow hover:scale-105 transition"
          >
            Try the Quote Generator
          </a>
        </div>
        <div className="flex justify-center">
          <img className="rounded-lg shadow-md max-w-full" src="/resurses/Aspire 3.jpg" alt="Business concept illustration" />
        </div>
      </section>

      {/* Giving Back Matters */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div className="order-2 md:order-1 flex justify-center">
          <img className="rounded-lg shadow-md max-w-full" src="/resurses/Aspire 4.jpg" alt="Volunteering moments" />
        </div>
        <div className="order-1 md:order-2 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">Giving Back Matters</h3>
          <p className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-gray-700">
            I've participated in charitable sales, gift drives, and creative activities for children...
          </p>
          <p className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-gray-700">
            Through these initiatives, I’ve learned the true meaning of social responsibility...
          </p>
        </div>
      </section>

      {/* Moments That Shaped Me */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">Moments That Shaped Me</h3>
          <p className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-gray-700">
            One moment that deeply impacted me was rescuing a helpless kitten and giving it a new life...
          </p>
          <p className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-gray-700">
            Another milestone is my YouTube channel, where I share motivational content and workouts...
          </p>
        </div>
        <div className="flex justify-center">
          <img className="rounded-lg shadow-md max-w-full" src="/resurses/Aspire 5.jpg" alt="Denis with kitten / YouTube" />
        </div>
      </section>

      {/* The Turning Point */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 flex justify-center">
          <img className="rounded-lg shadow-md max-w-full" src="/resurses/Aspire 6.jpg" alt="Books and mindset shift" />
        </div>
        <div className="order-1 md:order-2 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">The Turning Point</h3>
          <p className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-gray-700">
            Everything changed in 10th grade when I decided to take personal growth seriously...
          </p>
          <p className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-gray-700">
            That decision built my discipline, self-awareness, and hunger for lifelong learning...
          </p>
        </div>
      </section>
    </main>
    </section>
  );
}