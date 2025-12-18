import React from "react"
import Home from "./views/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from "./componentes/Footer"
import Biografia from "./views/Biografia"
import Musica from "./views/Musica"
import Videos from "./views/Videos"
import Galeria from "./views/Galeria"
import Dossier from "./views/Dossier"
import Letras from "./views/Letras"
import NotFound from "./views/NotFound"
import BarraNavegacion from "./componentes/BarraNavegacion"

function App() {

  return (
    <>
      <BrowserRouter>
        <BarraNavegacion />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/biografia' element={<Biografia />} />
          <Route path='/musica' element={<Musica />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/galeria' element={<Galeria />} />
          <Route path='/galeria' element={<Galeria />} />
          <Route path='/dossier' element={<Dossier />} />
          <Route path='/letras' element={<Letras />} />
          <Route path='404' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
