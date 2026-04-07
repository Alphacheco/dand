import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <header>
        <div className="logo">
          <img src="/img/logo.svg" alt="logo" />
        </div>
      </header>

      <div className="slogan">
        <div className="sloganDis">
          <h2>Diseño con propósito,</h2>
        </div>

        <div className="sloganDes">
          <h2>desarrollo con legado.</h2>
        </div>
      </div>

      <div className="portfCont">
        <a href="#" aria-label="Ir al portfolio">
          <div className="item">
            <h1>Portfolio</h1>
          </div>
          <div className="item">
            <img src="/img/portfolio.png" alt="portfolio" />
          </div>
        </a>
      </div>

      <div className="contCont">
        <Link to="/contacto" aria-label="Ir a contacto">
          <div className="item">
            <img src="/img/contacto.svg" alt="contacto" />
          </div>
          <div className="item">
            <h1>Contacto</h1>
          </div>
        </Link>
      </div>

      <div className="slogan2">
        <h2>Creaciones a tu alcance</h2>
      </div>

      <div className="socMedia">
        <a href="#" aria-label="Facebook">
          <img src="/img/logoFace.svg" alt="Facebook" />
        </a>
        <a href="#" aria-label="Instagram">
          <img src="/img/logoIg.svg" alt="Instagram" />
        </a>
      </div>
    </>
  );
}

export default HomePage;
