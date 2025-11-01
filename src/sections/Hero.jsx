export default function Hero() {
  return (
    <main id="home" className="home">
      <div className="container">
        <article>
          <div className="inner">
            <section className="content">
              <i className="fa-solid fa-quote-left" aria-hidden="true"></i>
              <p className="desc">Don't wait for the perfect moment. Make it.</p>
              <p className="author">Denis Hristov</p>
              <div className="details">
                {/* ако искаш още инфо */}
              </div>
            </section>

            <figure className="media">
              <img src="/resurses/ProfilPhoto.jpg" alt="Denis" />
            </figure>
          </div>
        </article>
      </div>
    </main>
  );
}