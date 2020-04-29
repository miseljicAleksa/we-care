import React from 'react'

import './Title.css'

export const Title = (props) => {
    return (
        <div {...props}>
            <p id="header">Welcome And Good Morning.</p>
            <p id="subtitle">Have a great day ahead!</p>
        </div>
    )
}
