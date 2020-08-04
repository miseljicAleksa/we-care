import React from 'react'

import './NavigationBar.css'
import wecare from '../../../wecare_logo_croped.png'

export const NavigationBar = (props) => {
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();
  let humanMinutes;
  let humanDate;
  if (date < 10) {
    humanDate = "0" + date;
  } else {
    humanDate = date
  }
  let humanMonth;
  if (date < 10) {
    humanMonth = "0" + month;
  } else {
    humanMonth = month
  }
  if (minutes < 10) {
    humanMinutes = "0" + minutes
  } else {
    humanMinutes = minutes
  }
  let day = newDate.getDay();
  let humanDay;
  switch (day) {
    case 0:
      humanDay = "Nedelja"
      break;
    case 1:
      humanDay = "Ponedeljak"
      break;
    case 2:
      humanDay = "Utorak"
      break;
    case 3:
      humanDay = "Sreda"
      break;
    case 4:
      humanDay = "Četvrtak"
      break;
    case 5:
      humanDay = "Petak"
      break;
    case 6:
      humanDay = "Subota"
      break;
    default:
      break;
  }
  return (
    <div {...props}>
      <img id="logos" src={wecare} alt="njanja"/>
      <p className="title">Korisnička podrška</p>
      <p className="date">{humanDate}.{humanMonth}.{year}</p>
      <p className="day">{humanDay}</p>
      <p className="time">{hours}:{humanMinutes}</p>
    </div>
  )
}
