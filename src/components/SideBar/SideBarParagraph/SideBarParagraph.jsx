import React from 'react'
import crvena from '../../../zelena.png'
import zelena from '../../../crvena.png'
import zuta from '../../../zuta.jpeg'


import './SideBarParagraph.css'

export const SideBarParagraph = (props) => {
    return (
        <div id="sideBar">
            {props.zelena ? (<img id="slika" src={zelena} alt="njanja"/>) : null}
            {props.crvena ? (<img id="slika" src={crvena} alt="njanja"/>) : null}
            {props.zuta ? (<img id="slika" src={zuta} alt="njanja"/>) : null}
            <p id="text">{props.text}</p>
        </div>
    )
}
