import React from 'react'

import './Title.css'

export const Title = (props) => {
  const hours = (new Date()).getHours();
  const dayPeriod = hours < 11 ? 'Dobro jutro' : 'Dobar dan';
  return (
    <div {...props}>
      <p id="header">{dayPeriod}. Srećan rad!</p>
    </div>
  )
}
