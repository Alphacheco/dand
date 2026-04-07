import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <>
      <header>
        <div className="logo">
          <Link to="/" aria-label="Volver al inicio">
            <img src="/img/logo.svg" alt="logo" />
          </Link>
        </div>
      </header>

      <div className="cCont">
        <h1>Contacto</h1>

        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Ej: Juan Perez"
        />

        <label htmlFor="telefono">Telefono:</label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          placeholder="Ej: +5491112345678"
        />

        <label htmlFor="descripcion">Descripcion:</label>
        <textarea
          id="descripcion"
          name="descripcion"
          placeholder="Necesitamos un sitio con 3 secciones, una pagina principal, una de informacion institucional y una de contacto..."
        />
      </div>
    </>
  );
}

export default ContactPage;
