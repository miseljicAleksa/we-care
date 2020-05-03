import React from 'react'

import './Title.css'

export const Title = (props) => {
    let date = new Date();
    let hours = date.getHours();
    let dayPeriod;
    console.log(hours)
    switch (true) {
        case hours < 11:
            dayPeriod = "Morning"
            break;
        case hours > 11:
            dayPeriod = "Day"
            break;
        case hours > 19: 
            dayPeriod = "Evening"
            break;
        default:
            dayPeriod = "Morning"
            break;
    } 
    return (
        <div {...props}>
            <p id="header">Welcome And Good {dayPeriod}.</p>
            <p id="subtitle">Have a great day ahead!</p>
        </div>
    )
}
