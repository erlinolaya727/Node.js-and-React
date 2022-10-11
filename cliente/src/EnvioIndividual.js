import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function EnvioIndividual({ envio }) {
  const navegar = useNavigate();
  //funcion borrar envio
  function borrarenvio(idenvio) {
    axios
      .post("/api/envio/borrarenvio", { idenvio: idenvio })
      .then((res) => {
        console.log(res.data);
        alert(res.data);
        navegar(0);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-3">
          <ul className="list-group">
            <li className="list-group-item">{envio.idenvio}</li>
            <li className="list-group-item">{envio.nombre}</li>
            <li className="list-group-item">{envio.email}</li>
            <li className="list-group-item">{envio.telefono}</li>
          </ul>
          <Link to={`/editarenvio/${envio.idenvio}`}>
            <li className="btn btn-success">Editar</li>
          </Link>
          &nbsp;
          <button
            className="btn btn-danger"
            onClick={() => {
              borrarenvio(envio.idenvio);
            }}
          >
            Eliminar
          </button>
          <hr className="mt-4"></hr>
        </div>
      </div>
    </div>
  );
}

export default EnvioIndividual;
