import React from 'react'

 import './NavigationBar.css'

export const NavigationBar = (props) => {
    return (
        <div {...props}>
            <a  class="active" href="#title">WeCare</a>
            <a  class="title" href="#contact">Contact Center Dashboard</a>
            <a  class="date" href="#date">28.03.2020.</a>
            <a  class="day" href="#day">Saturday</a>
            <a  class="time" href="#time">10:00</a>
        </div>
    )
}
