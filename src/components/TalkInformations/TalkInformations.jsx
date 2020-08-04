import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStopwatch} from '@fortawesome/free-solid-svg-icons';
import './TalkInformations.css'

export const TalkInformations = (props) => {
  return (
    <div {...props}>
      <section className="avaragetalk">
        <div id="jedan">
          <FontAwesomeIcon icon={faStopwatch} size="3x" color="#00a2ff" className="icons"/>
          <h4>Prosečno vremene trajanja razgovora</h4>
          <h1>{props.att}</h1>
        </div>
        <div id="dva">
          <FontAwesomeIcon icon={faStopwatch} size="3x" color="#00a2ff" className="icons"/>
          <h4>Prosečno vremene trajanja razgovora - Dolazni</h4>
          <h1>{props.attinbound}</h1>
        </div>
        <div id="tri">
          <FontAwesomeIcon icon={faStopwatch} size="3x" color="#00a2ff" className="icons"/>
          <h4>Prosečno vremene trajanja razgovora - Odlazni</h4>
          <h1>{props.attoutbound}</h1>
        </div>
      </section>
      <section className="avaragewait">
        <FontAwesomeIcon icon={faStopwatch} size="3x" color="#ff7e14" className="icons"/>
        <h4>Prosečno vreme čekanja</h4>
        <h1>{props.awt}</h1>
      </section>
      <section className="longestwait">
        <FontAwesomeIcon icon={faStopwatch} size="3x" color="#ffa154" className="icons"/>
        <h4>Najduže vreme čekanja</h4>
        <h1>{props.lwt}</h1>
      </section>
    </div>
  )
}
