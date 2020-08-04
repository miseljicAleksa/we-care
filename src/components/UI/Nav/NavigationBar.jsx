import React from 'react'
import './NavigationBar.css'
import wecare from '../../../wecare_logo_croped.png'

const humanize = value => value < 10 ? `0${value}` : value;

export const NavigationBar = (props) => {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const hours = newDate.getHours();
  const day = newDate.getDay();
  const humanDate = humanize(newDate.getDate());
  const humanMonth = humanize(newDate.getMonth() + 1);
  const humanMinutes = humanize(newDate.getMinutes());
  const humanDay = ['Nedelja', 'Ponedeljak', 'Utorak', 'Sreda', 'Četvrtak', 'Petak', 'Subota']
    .find((serbDay, i) => i === day);
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
