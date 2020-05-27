import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import './TalkInformations.css'

export const TalkInformations = (props) => {
    return (
        <div {...props}>
            <section className="avaragetalk"> 
                <FontAwesomeIcon icon={faStopwatch} size="3x" color="#00a2ff" className="icons"/>
                <h4>Average Talk Time</h4>
                <h1>{props.att}</h1>
            </section>
            <section className="avaragewait">
                <FontAwesomeIcon icon={faStopwatch} size="3x" color="#ff7e14" className="icons"/>
                <h4>Average Wait Time</h4>
                <h1>{props.awt}</h1>
            </section>
            <section className="longestwait">
                <FontAwesomeIcon icon={faStopwatch} size="3x" color="#ffa154" className="icons"/>
                <h4>Longest Wait Time</h4>
                <h1>{props.lwt}</h1>
            </section>
        </div>
    )
}
