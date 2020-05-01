import React from 'react'

 import './NavigationBar.css'

export const NavigationBar = (props) => {
    return (
        <div {...props}>
            <a  className="active" href="#title">WeCare</a>
            <a  className="title" href="#contact">Contact Center Dashboard</a>
            <a  className="date" href="#date">28.03.2020.</a>
            <a  className="day" href="#day">Saturday</a>
            <a  className="time" href="#time">10:00</a>
        </div>
    )
}
