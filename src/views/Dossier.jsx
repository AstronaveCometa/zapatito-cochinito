import React from 'react'

const Dossier = () => {
  return (
    <div>
   
     <div className="fondoGradiente mt-5 mb-5 d-flex" style={{minHeight: "64vh"}}>
        <div className="row m-3 p-5">
            <div className="col-lg-3 col-sm-1"></div>
            <div className="col-lg-4 col-sm-11"><p className="textoParrafo">Descarga nuestro dossier, en donde encontrarás un breve resumen de quiénes somos, nuestro trabajo y nuestros requerimientos de escenario.</p>
            </div>
            <div className="col-1"></div>
            <div className="col-lg-4 col-sm-11"><br/>
            <button type="button" className="botonDescarga fondoMenu">
              <a href={"Dossier Zapatito Cochinito.pdf"} download="Dossier Zapatito Cochinito.pdf" className="nav-link">Descargar</a>
              </button>
              </div>
        </div>
    </div>
    </div>
  )
}

export default Dossier
