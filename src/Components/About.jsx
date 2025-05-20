import { Link, useLocation } from 'react-router-dom';
export default function About(){
    return(
        <>
        <main className="about">
    <h2>Hello, I'm Denis!</h2>

    <section className="about-section">
  <div className="text">
    <h3>Why I Do What I Do</h3>
    <p>
      I’m driven by a deep desire to contribute to society through innovation and impact. I believe that action fueled by knowledge is the foundation of value creation. That’s why I never stop learning and applying what I learn.
    </p>
    <p>
      With experience across multiple domains — from programming and entrepreneurship to economics and sports — I bring a broad perspective that helps me discover creative solutions to meaningful problems.
    </p>
  </div>
  <div className="image">
    <img src="resurses/Aspire 1.jpg" alt="Motivation and vision" />
  </div>
</section>


<section className="about-section">
  <div className="image">
    <img src="resurses/Aspire 2.jpg" alt="Planning for success" />
  </div>
  <div className="text">
    <h3>My 5-Year Vision</h3>
    <p>
      My biggest goal is to build a sustainable and impactful business that helps people grow – both personally and professionally. I want to lead by example, showing that with the right mindset and consistent effort, anyone can grow beyond their limits.
    </p>
    <p>
      Surrounding myself with inspiring individuals who challenge me to improve is a vital part of this journey.
    </p>
  </div>
</section>


<section className="about-section">
  <div className="text">
    <h3>The Business I’m Building</h3>
    <p>
      I’m building a company that empowers people to become more productive and focused on their goals. Through smart technological tools and motivating content, I aim to create a positive change in people’s daily routines.
    </p>
    <p>
      My website already features a prototype of a quote generator — a tool built on years of personal reflections that now inspire others.
    </p>
    <Link href="#" target="_blank" rel="noopener noreferrer">Visit my site</Link>
  </div>
  <div className="image">
    <img src="resurses/Aspire 3.jpg" alt="Business concept illustration" />
  </div>
</section>


<section className="about-section">
  <div className="image">
    <img src="resurses/Aspire 4.jpg" alt="Volunteering moments" />
  </div>
  <div className="text">
    <h3>Giving Back Matters</h3>
    <p>
      I've participated in charitable sales, gift drives, and creative activities for children — all in support of vulnerable communities. Helping others is more than a choice — it’s a responsibility I gladly embrace.
    </p>
    <p>
      Through these initiatives, I’ve learned the true meaning of social responsibility and the power of small actions.
    </p>
  </div>
</section>


<section className="about-section">
  <div className="text">
    <h3>Moments That Shaped Me</h3>
    <p>
      One moment that deeply impacted me was rescuing a helpless kitten and giving it a new life. It reminded me how compassion can shape destinies — even through small actions.
    </p>
    <p>
      Another milestone is my YouTube channel, where I share motivational content and workouts. It’s a platform where I try to uplift others, just as I’ve been inspired by so many.
    </p>
  </div>
  <div className="image">
    <img src="resurses/Aspire 5.jpg" alt="Denis with kitten / YouTube" />
  </div>
</section>


<section className="about-section">
  <div className="image">
    <img src="resurses/Aspire 6.jpg" alt="Books and mindset shift" />
  </div>
  <div className="text">
    <h3>The Turning Point</h3>
    <p>
      Everything changed in 10th grade when I decided to take personal growth seriously. I began studying with a vision and reading books to gain deeper knowledge and perspective — a habit that transformed my mindset and life.
    </p>
    <p>
      That decision built my discipline, self-awareness, and hunger for lifelong learning — and I haven’t looked back since.
    </p>
  </div>
</section>


</main>
        </>
    )
}