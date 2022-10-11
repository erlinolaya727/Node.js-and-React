import React from 'react'

export default function FormRegistro() {
    return (
        <>
            <form action="">
                <div class="form-group ">
                    <h3>Registro de Usuario</h3>
                    <img src="img/Logo2.png" class="d-block w-50 h-25 mx-auto" alt="img 1" />
                    <label for="" class="form-label">Tipo de Documento</label>
                    <select class="form-control">
                        <option selected>Elija el Tipo de Documento</option>
                        <option value="1">Cedula Ciudadania</option>
                        <option value="2">Tarjeta de Identidad</option>
                        <option value="3">Registro Civil</option>
                        <option value="4">Pasaporte</option>
                        <option value="5">Extranjeria</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="" class="form-label">No. Documento</label>
                    <input type="number" class="form-control" id="doc" placeholder="# Documento" />
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Nombre Completo</label>
                    <input type="text" class="form-control" id="nom" placeholder="Nombre Completo" />
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Correo</label>
                    <input type="email" class="form-control" id="mail" placeholder="name@example.com" />
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Telefono</label>
                    <input type="number" class="form-control" id="tel" placeholder="# Telefono" />
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Direccion Residencia</label>
                    <input type="number" class="form-control" id="dir" placeholder="Direccion Residencia" />
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Fecha Nacimiento</label>
                    <input type="date" class="form-control" id="datetime" placeholder="yyyy-mm-dd" />
                </div>

                <div class="d-grid gap-2 d-md-block">
                    <button class="btn btn-primary btn-block" type="button" >Registrar</button>
                    <button class="btn btn-primary btn-block" type="button" >Volver</button>
                </div>
                <br />
            </form>
        </>
    )
}
