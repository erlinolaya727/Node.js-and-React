import logo from "./logo.svg";
import "./App.css";
import ListaEnvios from "./ListaEnvios";
import AgregarEnvio from "./AgregarEnvio";
import EditarEnvio from "./EditarEnvio";
import Login from './Login';
import Inicio from './Inicio';
import Registro from './Registro';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/envios" element={<ListaEnvios />} exact></Route>
          <Route
            path="/agregarenvio/"
            element={<AgregarEnvio />}
            exact
          ></Route>
          <Route exact path="/" element={<Inicio />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registro" element={<Registro />} />
          <Route
            path="/editarenvio/:idenvio"
            element={<EditarEnvio />}
            exact
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
