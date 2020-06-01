import React from 'react'

import './SideBarParagraph.css'

export const SideBarParagraph = (props) => {
    return (
        <div>
            <img src={props.slika} alt="njanja"/>
            <p id="text">{props.text}</p>
        </div>
    )
}
