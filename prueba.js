<div className="container">
      <div className="row">
        <div className="col-sm-6 offset-3">
          <ul className="list-group">
            <li className="list-group-item">{usuario.idusuario}</li>
            <li className="list-group-item">{usuario.nombre}</li>
            <li className="list-group-item">{usuario.email}</li>
            <li className="list-group-item">{usuario.telefono}</li>
          </ul>
          <Link to={`/editarusuario/${usuario.idusuario}`}>
            <li className="btn btn-success">Editar</li>
          </Link>
          &nbsp;
          <button
            className="btn btn-danger"
            onClick={() => {
              borrarusuario(usuario.idusuario);
            }}
          >
            Eliminar
          </button>
          <hr className="mt-4"></hr>
        </div>
      </div>
    </div>

// <div class="card-body">
// <div className="table-responsive">
//   <table className="table table-light">
//     <tbody>
//       <tr>
//         <td className="col-3 text-md-center">{usuario.idusuario}</td>
//         <td className="col-3 text-md-center">{usuario.nombre}</td>
//         <td className="col-3 text-md-center">{usuario.email}</td>
//         <td className="col-3 text-md-center">{usuario.telefono}</td>
//         <td className="text-md-center">
//           <Link to={`/editarusuario/${usuario.idusuario}`}>
//             <li className="btn btn-success">Editar</li>
//           </Link>
//         </td>
//         <td className="text-md-center">
//           <button
//             className="btn btn-danger"
//             onClick={() => {
//               borrarusuario(usuario.idusuario);
//             }}
//           >
//             Eliminar
//           </button>
//         </td>
//       </tr>
//     </tbody>
//   </table>
// </div>
// </div>