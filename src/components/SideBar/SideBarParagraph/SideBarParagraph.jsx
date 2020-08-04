import React from 'react'
import zelena from '../../../zelena.png'
import crvena from '../../../crvena.png'
import siva from '../../../siva.png'
import bela from '../../../bela.png'


import './SideBarParagraph.css'

export const SideBarParagraph = (props) => {
  return (
    <div id="sideBar">
      {props.zelena && (<img id="slika" src={zelena} alt="njanja"/>)}
      {props.crvena && (<img id="slika" src={crvena} alt="njanja"/>)}
      {props.siva && (<img id="slika" src={siva} alt="njanja"/>)}
      {props.bela && (<img id="slika" src={bela} alt="njanja"/>)}
      <p id="text">{props.text}</p>
    </div>
  )
}
