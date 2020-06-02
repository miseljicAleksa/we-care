import React from 'react'

import './Title.css'

export const Title = (props) => {
    let date = new Date();
    let hours = date.getHours();
    let dayPeriod;
    switch (true) {
        case hours < 12:
            dayPeriod = "Jutro"
            break;
        case hours >= 12:
            dayPeriod = "Dan"
            break;
        default:
            dayPeriod = "Jutro"
            break;
    } 
    return (
        <div {...props}>
            <p id="header">Dobro {dayPeriod}. Srećan rad!</p>
            {/* <p id="subtitle">Srećan rad!</p> */}
        </div>
    )
}
