import Footer from "./Components/Footer";
import NavbarInicio from "./Components/NavbarInicio";


function Inicio() {
  return (
    <div>
      <header>
          <NavbarInicio/>
      </header>
            <div>
            <img src="img/FondoP.jpg" className="img-fluid" alt="FondoP" id="fPrint"/>
            </div>
            <section class="d-flex flex-column justify-content-center align-items-center pt-5  text-center w-50 m-auto" id="intro">
            <h1 class="p-3 fs-2 border-top border-3">Una empresa de envios para tus <span class="text-primary">necesidades.</span></h1>
          </section>
      <main>
        <div className="container">
          <div className="row">
              <div className="col-sm-6">
                <div className="card" id="Comunicado">
                  <img src="../img/Domi.jfif" className="card-img-top" alt="imagen 5"/>
                  <div className="card-body">
                    <h5 className="card-title"><b>COMUNICADO</b></h5>
                    <p className="card-text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)... </p>
                    <a href="#" className="btn btn-primary">leer mas ...</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card" id="Contactanos">
                  <div className="card-body">
                    <h5 className="card-title"><b>CONTACTANOS</b></h5>
                    <label for="exampleFormControlInput1">Correo</label>
                    <input className="form-control" type="email" placeholder="email@example.com"/>
                    <label for="exampleFormControlInput1">Mensaje</label>
                    <textarea className="form-control" type="text" placeholder="Ingrese aqui su mensaje..."></textarea>
                    <br/>
                    <a href="#" className="btn btn-primary btn-block">Enviar</a>
                  </div>
                </div>
              </div>
          </div>
        </div>  
      </main>
      <br/>
      <Footer/>
    </div>
  );
}

export default Inicio;
