import React from "react";
import Footer from "./Components/Footer";
import FormLogin from "./Components/FormLogin";


export default function Login() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
          <div className="container-fluid">
            <a href="#">
              <img
                src="img/Logo2.png"
                className="d-block  mx-auto"
                width="120"
                height="120"
                alt="img 1"
              />
            </a>
            <h5 className="text-light text-center font-weight-bold mb-0">
              InstaYa
            </h5>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-bss-hover-animate="pulse"
                    href="/"
                  >
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-bss-hover-animate="pulse"
                    href="#"
                  >
                    Informacion y Comunicados
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-bss-hover-animate="pulse"
                    href="#"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div
        // className="container col-md-12 col-lg-12 mx-auto"
        // style={{ "background-image": "url(img/FondoP.jpg)"}}
        
      >
        <div
          id="registro"
          className="row p-3 mb-2 text-dark col-md-12 col-lg-6 mx-auto"
        >
          <div className="col-md-12 col-lg-6 mx-auto">
            <FormLogin />
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}
