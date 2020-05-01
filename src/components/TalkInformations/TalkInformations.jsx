import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import './TalkInformations.css'

export const TalkInformations = (props) => {
    return (
        <div {...props}>
            <section class="avaragetalk"> 
                <FontAwesomeIcon icon={faStopwatch} size="3x" color="black" className="icons"/>
                <h4>Average Talk Time</h4>
                <h1>4:32</h1>
            </section>
            <section class="avaragewait">
                <FontAwesomeIcon icon={faStopwatch} size="3x" color="black" className="icons"/>
                <h4>Average Wait Time</h4>
                <h1>3:14</h1>
            </section>
            <section class="longestwait">
                <FontAwesomeIcon icon={faStopwatch} size="3x" color="black" className="icons"/>
                <h4>Longest Wait Time</h4>
                <h1>5:44</h1>
            </section>
        </div>
    )
}
