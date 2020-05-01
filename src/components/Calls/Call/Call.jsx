import React from 'react'

import './Call.css'

export const Call = (props) => {
    return (
        <div {...props}>
            <p className="title">{props.title}</p>
            <p id="number">{props.number}</p>
        </div>
    )
}
