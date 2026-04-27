import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <main className="contact-page">
      <div className="ambient-overlay" aria-hidden="true">
        <div className="ambient-shape ambient-shape-1" />
        <div className="ambient-shape ambient-shape-2" />
      </div>

      <header className="site-header fade-in-top">
        <div className="logo">
          <Link to="/" aria-label="Volver al inicio">
            <img src="/img/logo.svg" alt="Marca de estudio" />
          </Link>
        </div>
      </header>

      <section className="contact-shell fade-in-up">
        <div className="contact-intro">
          <p className="eyebrow">Hablemos de tu idea</p>
          <h1>Contacto</h1>
          <p>
            Completa este brief rápido y te proponemos un enfoque visual y
            técnico para lanzar un sitio web memorable.
          </p>
        </div>

        <form className="contact-form" action="#" method="post">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ej: Juan Perez"
          />


          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            placeholder="Ej: +5491112345678"
          />

          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ej: correo@ejemplo.com"
            autoComplete="email"
          />

          <label htmlFor="descripcion">Descripcion del proyecto</label>
          <textarea
            id="descripcion"
            name="descripcion"
            placeholder="Necesitamos un sitio con 3 secciones, una pagina principal, una de informacion institucional y una de contacto..."
          />

          <div className="contact-actions">
            <button type="submit" className="btn btn-primary">
              Enviar consulta
            </button>
            <Link to="/" className="btn btn-outline" aria-label="Regresar al inicio">
              Volver al inicio
            </Link>
          </div>
        </form>
        <div className="contact-social">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social-btn instagram"
          >
            <img src="/img/logoIg.svg" alt="Instagram" style={{ width: 32, height: 32 }} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="social-btn facebook"
          >
            <img src="/img/logoFace.svg" alt="Facebook" style={{ width: 32, height: 32 }} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
