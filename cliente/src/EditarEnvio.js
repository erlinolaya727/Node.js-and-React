import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
function EditarEnvio() {
  const { user, isAuthenticated } = useAuth0();
  const { logout } = useAuth0();
  const params = useParams();

  //Hooks
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [estado, setEstado] = useState("");
  const [largo, setLargo] = useState("");
  const [alto, setAlto] = useState("");
  const [ancho, setAncho] = useState("");
  const [peso, setPeso] = useState("");
  const [direccion_recogida, setDireccionRecogida] = useState("");
  const [ciudad_recogida, setCiudadRecogida] = useState("");
  const [nombre_destinatario, setNombreDestinatario] = useState("");
  const [cedula_destinatario, setCedulaDestinatario] = useState("");
  const [direccion_entrega, setDireccionEntrega] = useState("");
  const [ciudad_entrega, setCiudadEntrega] = useState("");

  useEffect(() => {
    axios
      .post("/api/envio/obtenerdataenvio", { idenvio: params.idenvio })
      .then((res) => {
        console.log(res.data[0]);
        const dataenvio = res.data[0];
        setFecha(dataenvio.fecha);
        setHora(dataenvio.hora);
        setEstado(dataenvio.estado);
        setAlto(dataenvio.alto);
        setLargo(dataenvio.largo);
        setAncho(dataenvio.ancho);
        setPeso(dataenvio.peso);
        setDireccionRecogida(dataenvio.direccion_recogida);
        setCiudadRecogida(dataenvio.ciudad_recogida);
        setNombreDestinatario(dataenvio.nombre_destinatario);
        setCedulaDestinatario(dataenvio.cedula_destinatario);
        setDireccionEntrega(dataenvio.direccion_entrega);
        setCiudadEntrega(dataenvio.ciudad_entrega);
      });
  }, []);

  //funcion que actualiza
  function editarEnvio() {
    // nuevo objeto para actualizar envio
    const actualizarenvio = {
      fecha: fecha,
      hora: hora,
      estado: estado,
      largo: largo,
      alto: alto,
      ancho: ancho,
      peso: peso,
      direccion_recogida: direccion_recogida,
      ciudad_recogida: ciudad_recogida,
      nombre_destinatario: nombre_destinatario,
      cedula_destinatario: cedula_destinatario,
      direccion_entrega: direccion_entrega,
      ciudad_entrega: ciudad_entrega,
      idenvio: params.idenvio,
    };

    //Hacer la peticion usando axios
    axios
      .post("/api/envio/actualizaenvio", actualizarenvio)
      .then((res) => {
        console.log(res.data);
        alert(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }

  return (
    <div id="wrapper">
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <img
          src="/img/Logo2.png"
          className="d-block  mx-auto"
          width="120"
          height="120"
          alt="img 1"
        />
        <div class="sidebar-brand">InstaYa</div>

        <hr class="sidebar-divider" />

        <div class="sidebar-heading">Contacto y demas</div>

        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fas fa-fw fa-phone"></i>
            <span>Contactanos</span>
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/#Comunicado">
            <i class="fas fa-fw fa-mail-bulk"></i>
            <span>Informacion y comunicados</span>
          </a>
        </li>

        <hr class="sidebar-divider" />

        <div class="sidebar-heading"></div>

        <li class="nav-item active">
          <a class="nav-link" href="/envios">
            <i class="fas fa-fw fa-person-booth"></i>
            <span>Envios</span>
          </a>
        </li>

        <hr class="sidebar-divider d-none d-md-block" />
      </ul>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <ul class="navbar-nav ml-auto">
              <div class="topbar-divider d-none d-sm-block"></div>

              <li class="nav-item dropdown no-arrow">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                    {user.name}
                  </span>
                  <img class="img-profile rounded-circle" src={user.picture} />
                </a>

                <div
                  class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <a
                    class="dropdown-item"
                    href="#"
                    data-toggle="modal"
                    data-target="#logoutModal"
                  >
                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>

          <div class="container-fluid">
            <h1 class="h3 mb-2 text-red">Envios InstaYa</h1>
            <p class="mb-4">
              Como usuario puedes crear y editar ordenes 😁✈️
              <p>InstaYa tu empresa de envios!</p>
            </p>

            <div className="row">
              <div className="col-sm-6 offset-3">
                {/* <div className="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Nombre</span>
            <input type="text" className='form-control' value={nombre} onChange={(e) => { setNombre(e.target.value) }}></input>
          </div> */}
                {/* <div className="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">Email</span>
                  <input type="email" className='form-control' value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                </div> */}
                {/* <div className="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Telefono</span>
            <input type="text" className='form-control' value={telefono} onChange={(e) => { setTelefono(e.target.value) }}></input>
          </div> */}
                <div className="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Fecha
                  </span>
                  <input
                    type="date"
                    className="form-control"
                    value={fecha}
                    onChange={(e) => {
                      setFecha(e.target.value);
                    }}
                  ></input>
                  <span class="input-group-text" id="basic-addon1">
                    Hora
                  </span>
                  <input
                    type="time"
                    className="form-control"
                    value={hora}
                    onChange={(e) => {
                      setHora(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Estado
                  </span>
                  <select
                    name="select"
                    className="form-control"
                    value={estado}
                    onChange={(e) => {
                      setEstado(e.target.value);
                    }}
                  >
                    <option>Entregado</option>
                    <option selected>Pendiente</option>
                    <option>Cancelado</option>
                  </select>
                  {/* <input type="text" className='form-control' value={estado} onChange={(e) => { setEstado(e.target.value) }}></input> */}
                </div>
                <div className="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Largo
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    value={largo}
                    onChange={(e) => {
                      setLargo(e.target.value);
                    }}
                  ></input>
                  <span class="input-group-text" id="basic-addon1">
                    Alto
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    value={alto}
                    onChange={(e) => {
                      setAlto(e.target.value);
                    }}
                  ></input>
                  <span class="input-group-text" id="basic-addon1">
                    Ancho
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    value={ancho}
                    onChange={(e) => {
                      setAncho(e.target.value);
                    }}
                  ></input>
                  <span class="input-group-text" id="basic-addon1">
                    Peso
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    value={peso}
                    onChange={(e) => {
                      setPeso(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Direccion Recogida
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    value={direccion_recogida}
                    onChange={(e) => {
                      setDireccionRecogida(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Ciudad Recogida
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    value={ciudad_recogida}
                    onChange={(e) => {
                      setCiudadRecogida(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Nombre Destinatario
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    value={nombre_destinatario}
                    onChange={(e) => {
                      setNombreDestinatario(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Cedula Destinatario
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    value={cedula_destinatario}
                    onChange={(e) => {
                      setCedulaDestinatario(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Direccion Entrega
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    value={direccion_entrega}
                    onChange={(e) => {
                      setDireccionEntrega(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Ciudad Entrega
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    value={ciudad_entrega}
                    onChange={(e) => {
                      setCiudadEntrega(e.target.value);
                    }}
                  ></input>
                </div>
                <button onClick={editarEnvio} className="btn btn-success">
                  Editar Envio
                </button>
                <br/><br/>
                <a href="/envios" className="btn btn-danger">Ir a envios</a>
              </div>
            </div>
          </div>
        </div>

        <footer class="sticky-footer bg-white">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright &copy; InstaYa Envios 2022</span>
            </div>
          </div>
        </footer>
      </div>
      <div
        class="modal fade"
        id="logoutModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                ¿Listo para cerrar sesión?
              </h5>
              <button
                class="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              Seleccione "Logout" si está listo para finalizar su actual sesión.
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                className="btn btn-primary"
                onClick={() => logout({ returnTo: window.origin })}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditarEnvio;
