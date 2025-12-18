import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const BarraNavegacion = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top fondoMenu">
            <div className="container-fluid">
              
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse centrado" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                      <img src="Logo.png" alt="Logo" className="nav-link" width="50" height="100%" />
                      </li>
                  <li className="nav-item">
                    <Link to='/' className="nav-link">Inicio</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/biografia' className="nav-link">Biografía</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/musica' className="nav-link">Música</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/videos' className="nav-link">Videos</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/galeria' className="nav-link">Galería</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/dossier' className="nav-link">Dossier</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/letras' className="nav-link">¡A cantar!</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
  )
}

export default BarraNavegacion
