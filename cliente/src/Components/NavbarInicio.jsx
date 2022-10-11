import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export default function NavbarInicio() {
    const { loginWithRedirect } = useAuth0();
    const {isAuthenticated} = useAuth0();
    const {logout} = useAuth0();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                <div className="container-fluid">
                    <a href="#"><img src="img/Logo2.png" className="d-block  mx-auto" width="120" height="120" alt="img 1" />
                    </a>
                    <br />
                    <h5 className="text-light text-center font-weight-bold mb-0">InstaYa Envios </h5>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" data-bss-hover-animate="pulse" href="/">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" data-bss-hover-animate="pulse" href="#Comunicado">Informacion y Comunicados</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" data-bss-hover-animate="pulse" href="#Contactanos">Contacto</a>
                            </li>
                            {isAuthenticated && (
                                <li className="nav-item">
                                <a className="nav-link active" data-bss-hover-animate="pulse" href="/envios">Ver Envios</a>
                                </li>
                            )}
                            <li className="nav-item">
                                <a className="nav-link active" data-bss-hover-animate="pulse" href="/">
                                    <i className="icon ion-md-log-in mr-2" href="/envios"><a onClick={() => loginWithRedirect()}>Iniciar Sesión</a></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
