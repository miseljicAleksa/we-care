import React from 'react'

import './Title.css'

export const Title = (props) => {
  let date = new Date();
  let hours = date.getHours();
  let dayPeriod;
  switch (true) {
    case hours < 11:
      dayPeriod = "Dobro Jutro"
      break;
    case hours >= 11:
      dayPeriod = "Dobar Dan"
      break;
    default:
      dayPeriod = "Dobro Jutro"
      break;
  }
  return (
    <div {...props}>
      <p id="header">{dayPeriod}. Srećan rad!</p>
      {/* <p id="subtitle">Srećan rad!</p> */}
    </div>
  )
}
