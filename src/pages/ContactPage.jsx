import { Link } from "react-router-dom";
import { useState } from "react";

function ContactPage() {
  const [sent, setSent] = useState(false);

  // Reemplaza este endpoint por el tuyo real de Formspree
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgaygzp";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      setSent(true);
      form.reset();
    } else {
      alert("Hubo un error al enviar. Intenta de nuevo.");
    }
  };

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

        {sent ? (
          <div className="contact-success" style={{color: '#2563eb', fontWeight: 600, fontSize: '1.2rem', margin: '2rem 0'}}>
            ¡Gracias por tu consulta! Te responderé pronto.
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ej: Juan Perez"
              required
            />

            <label htmlFor="telefono">Teléfono</label>
            <input
              type="text"
              id="telefono"
              name="telefono"
              placeholder="Ej: +5491112345678"
              required
            />

            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ej: correo@ejemplo.com"
              autoComplete="email"
              required
            />

            <label htmlFor="descripcion">Descripcion del proyecto</label>
            <textarea
              id="descripcion"
              name="descripcion"
              placeholder="Necesitamos un sitio con 3 secciones, una pagina principal, una de informacion institucional y una de contacto..."
              required
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
        )}
        
      </section>
    </main>
  );
}

export default ContactPage;
