import React from 'react'

import './SideBarParagraph.css'

export const SideBarParagraph = (props) => {
    return (
        <div>
            <p id="text">{props.text}</p>
        </div>
    )
}
