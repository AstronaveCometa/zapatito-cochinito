import React from 'react'

const Galeria = () => {
  return (
    <div>
      <div className="fondoGradiente" style={{ marginBottom: '65px' }}>

        <div className="container" style={{ marginTop: '65px' }}>
          <div className="row">
            <div className="col-4">
              <div className="row p-3">
                <img src="Galeria/001.jpg" alt="001" className="col rounded-5 galleryImg" height="20%" />
              </div>
              <div className="row p-3">
                <img src="Galeria/002.jpg" alt="002" className="col rounded-5 galleryImg" height="20%" />
              </div>
            </div>
            <img src="Galeria/Grupo001.jpg" alt="Grupo001" className="col-4 rounded-5 galleryImg" height="20%" />
            <div className="col-4">
              <div className="row p-3">
                <img src="Galeria/003.JPG" alt="003" className="col rounded-5 galleryImg" height="20%" />
              </div>
              <div className="row p-3">
                <img src="Galeria/004.jpg" alt="004" className="col rounded-5 galleryImg" height="20%" />
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <img src="Galeria/Viajero.jpg" alt="Viajero" className="col-4 rounded-5 galleryImg" height="20%" />
            <div className="col-4 row">
              <div className="row p-3">
                <img src="Galeria/005.jpg" alt="005" className="col rounded-5 galleryImg"
                height="80%" />
              </div>
              <div className="row p-3">
                <img src="Galeria/006.jpg" alt="006" className="col rounded-5 galleryImg" height="80%" />
              </div>
            </div>

            <div className="col-4 row">
              <div className="row p-3">
                <img src="Galeria/007.jpg" alt="007" className="col rounded-5 galleryImg" height="80%" />
              </div>
              <div className="row p-3">
                <img src="Galeria/008.jpg" alt="008" className="col rounded-5 galleryImg" height="80%" />
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-4 row">
              <div className="row p-3">
                <img src="Galeria/009.jpg" alt="009" className="col rounded-5 galleryImg" height="100%"/>
              </div>
              <div className="row p-3">
                <img src="Galeria/010.jpg" alt="010" className="col rounded-5 galleryImg" height="100%"/>
              </div>
            </div>
            <div className="col-4 row">
              <div className="row p-3">
                <img src="Galeria/011.jpg" alt="011" className="col rounded-5 galleryImg" height="100%"/>
              </div>
              <div className="row p-3">
                <img src="Galeria/012.jpg" alt="012" className="col rounded-5 galleryImg" height="100%"/>
              </div>
            </div>
            <img src="Galeria/Robot.jpg" alt="Robot" className="col-4 rounded-5 galleryImg" height="20%" />
          </div>


          <div className="row mt-4">
            <img src="Galeria/Mago.jpg" alt="Mago" className="col-4 rounded-5 galleryImg" height="20%" />
            <div className="col-4 row">
              <div className="row p-3">
                <img src="Galeria/013.jpg" alt="013" className="col rounded-5 galleryImg" height="100%"/>
              </div>
              <div className="row p-3">
                <img src="Galeria/014.jpg" alt="014" className="col rounded-5 galleryImg" height="100%"/>
              </div>
            </div>
            <div className="col-4 row">
              <div className="row p-3">
                <img src="Galeria/015.jpg" alt="015" className="col rounded-5 galleryImg" height="100%"/>
              </div>
              <div className="row p-3">
                <img src="Galeria/016.jpg" alt="016" className="col rounded-5 galleryImg" height="100%"/>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Galeria
