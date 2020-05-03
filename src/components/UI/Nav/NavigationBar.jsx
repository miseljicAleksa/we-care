import React from 'react'

 import './NavigationBar.css'

export const NavigationBar = (props) => {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let humanMinutes;
    let humanDate;
    if(date<10){
        humanDate="0"+date;
    }else{
        humanDate=date
    }
    let humanMonth;
    if(date<10){
        humanMonth="0"+month;
    }else{
        humanMonth=month
    }
    if(minutes<10){
        humanMinutes="0"+minutes
    }else{
        humanMinutes=minutes
    }
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
            <p className="active">WeCare</p>
            <p className="title">Contact Center Dashboard</p>
            <p className="date">{humanDate}.{humanMonth}.{year}.</p>
            <p className="day">{humanDay}</p>
            <p className="time">{hours}:{humanMinutes}</p>
        </div>
    )
}
