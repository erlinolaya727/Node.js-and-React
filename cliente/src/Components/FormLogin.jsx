import React from 'react'

export default function FormLogin() {
    return (
        <>
            <form action="">
                <div className="form-group ">
                    <h3>Iniciar sesión</h3>
                    <img src="img/Logo2.png" className="d-block w-50 h-25 mx-auto" alt="img 1"/>
                </div>
                <div className="form-group">
                    <label for="" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="mail" placeholder="Ingrese tu contraseña"/>
                </div>
                <div className="form-group">
                    <label for="" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="tel" placeholder="Ingrese tu contraseña"/>
                </div>
                <div className="align-items-center">
                    <div>
                        <label className="checkbox m-1">
                            <input type="checkbox" name=""/>
                            <span></span>Recuérdame</label>
                    </div>
                    <a href="">¿Has olvidado tu contraseña?</a>
                </div><br/>
                <div className="d-grid gap-2 d-md-block">
                    <button className="btn btn-primary btn-block" type="button">Iniciar</button>
                    <button className="btn btn-primary btn-block" type="button">Volver</button>
                </div>
                <div>
                    <span>¿No tienes cuenta?</span>
                    <a href="/Registro">¡Registrate!</a>
                </div>
                <br/>
            </form>
        </>
    )
}
