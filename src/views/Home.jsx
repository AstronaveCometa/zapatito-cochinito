import React from 'react'
import VideoFondo from "../componentes/VideoFondo"
import TituloTransparente from "../componentes/TituloTransparente"
import BarraNavegacion from '../componentes/BarraNavegacion'
import Spotify from '../componentes/Spotify'
import Youtube from '../componentes/Youtube'
import Noticias from '../componentes/Noticias'
import FotoHome from '../componentes/FotoHome'
import PresentacionHome from '../componentes/PresentacionHome'
import Carrusel from '../componentes/Carrusel'
import Footer from '../componentes/Footer'

import {slides} from '../assets/carrusel.json'

const Home = () => {
    return (
        <div>
            <div>
                <VideoFondo />
            </div>
            <div style={{paddingBottom: "200vh"}}><TituloTransparente /></div>
            <div className="fondoGradiente">
                <div className="row margen1">
                    <div className="col-md-6 col-sm-12">
                        <Spotify />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <Youtube className="col-md-6 col-sm-12" />
                    </div>
                </div>
                <div className="row margen 1">
                    <div className="col-md-6 col-sm-12">
                        <Noticias />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <FotoHome />
                    </div>
                </div>
                <div className="row margen1">
                    <div className="col-md-6 col-sm-12">
                        <PresentacionHome />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <Carrusel data={slides} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
