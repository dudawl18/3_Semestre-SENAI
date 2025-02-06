import React from 'react'
import './Body.css'
import DemoUm from './DemoUm'

function Body() {

  return (
    <div className="content-body">
        <h2 className='titulo-body'>Galeria de Gatos (Arte)</h2>
              <img src="gatopreto.png" className="gato-imagem" alt="" />
              <h4>O gato</h4>
              <img src="uiia-uiiauiia.gif" alt="" />
              <h4>uiia</h4>
              <DemoUm />
    </div>
  )
}

export default Body
