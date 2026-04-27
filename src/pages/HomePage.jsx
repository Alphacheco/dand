import { Link } from "react-router-dom";

const PORTFOLIO_CARDS = [
  { name: "CajaJPER", href: "http://cajajper.gov.ar", logo: "/img/logoCaja.svg" },
  { name: "CER", href: "http://estudiocer.com.ar", logo: "/img/CER.svg" },
  { name: "Reina", href: "http://reinaheels.vercel.app", logo: "/img/reina.svg" },
  { name: "Proyecto Caja", href: "http://cajajper.gov.ar", logo: "/img/logoCaja.svg" },
];

function HomePage() {
  const carouselCards = [...PORTFOLIO_CARDS, ...PORTFOLIO_CARDS];

  return (
    <main className="home-page">
      <div className="ambient-overlay" aria-hidden="true">
        <div className="ambient-shape ambient-shape-1" />
        <div className="ambient-shape ambient-shape-2" />
      </div>

      <header className="site-header fade-in-top">
        <div className="logo">
          <img src="/img/logo.svg" alt="Marca de estudio" />
        </div>
      </header>

      <section className="hero fade-in-top">
        <p className="hero-kicker">Estudio digital</p>
        <h1>
          Diseño con propósito,
          <span> desarrollo con legado.</span>
        </h1>
        <p className="hero-copy">
          Sitios web con estética premium, performance real y una identidad que
          no se parece a la de nadie.
        </p>

        <div className="hero-actions">
          
          <Link to="/contacto" className="btn btn-outline" aria-label="Ir a contacto">
            Empezar proyecto
          </Link>
        </div>
      </section>

      <section id="portfolio" className="feature-grid fade-in-up">
        <article className="feature-card feature-card-dark">
          <div className="feature-header">
            <div className="feature-copy">
              <p className="eyebrow">Selección destacada</p>
              <h2>Portfolio</h2>
              <p>
                Experiencias que combinan branding, narrativa y producto digital
                para marcas con ambición.
              </p>
            </div>
            <div className="feature-media">
              <img src="/img/portfolio.png" alt="Preview de trabajos de portfolio" />
            </div>
          </div>

          <div className="portfolio-carousel" aria-label="Carrusel de proyectos">
            <div className="portfolio-track" style={{ "--card-count": carouselCards.length }}>
              {carouselCards.map((card, index) => (
                <a
                  key={`${card.name}-${index}`}
                  href={card.href}
                  className="portfoliolink portfoliolink-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar ${card.name}`}
                >
                  <img src={card.logo} alt={`Logo ${card.name}`} />
                </a>
              ))}
            </div>
          </div>
        </article>

        <article className="feature-card feature-card-light">
          <div className="feature-header">
            <div className="feature-copy">
              <p className="eyebrow">Agenda abierta</p>
              <h2>Contacto</h2>
              <p>
            Cuéntanos lo que imaginas y aterrizamos una propuesta visual,
            técnica y estratégica para tu web.
          </p>
            </div>
            <div className="feature-media">
              <img src="/img/contacto.svg" alt="Ilustración de contacto" className="contact-img-equal" />
            </div>
          </div>
          
          <Link to="/contacto" className="text-link" aria-label="Abrir formulario de contacto">
            Ir al formulario
          </Link>
        <div className="contact-social" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: '2rem', height: '80px' }}>
          
          <a
            href="https://wa.me/5493435184749"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="social-btn whatsapp"
          >
            <img src="/img/wsp.svg" alt="WhatsApp" style={{ width: 48, height: 48 }} />
          </a>
          <a
            href="mailto:jonarein@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mail"
            className="social-btn mail"
          >
            <img src="/img/gmail.svg" alt="Mail" style={{ width: 48, height: 48 }} />
          </a>
        </div>
      </article>
      </section>

      
    </main>
  );
}

export default HomePage;
