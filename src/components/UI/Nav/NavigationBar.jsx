import React from 'react'

 import './NavigationBar.css'

export const NavigationBar = (props) => {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let day = newDate.getDay();
    let humanDay;
    switch (day) {
        case 0:
            humanDay="Sun"
            break;
        case 1:
            humanDay="Mon"
            break;
        case 3:
            humanDay="Tue"
            break;
        case 4:
            humanDay="Wen"
            break;
        case 5:
            humanDay="Thu"
            break;
        case 6:
            humanDay="Sat"
            break;
        default:
            break;
    }
    return (
        <div {...props}>
            <a  className="active" href="#title">WeCare</a>
            <a  className="title" href="#contact">Contact Center Dashboard</a>
            <a  className="date" href="#date">{date}.{month}.{year}.</a>
            <a  className="day" href="#day">{humanDay}</a>
            <a  className="time" href="#time">{hours}:{minutes}</a>
        </div>
    )
}
