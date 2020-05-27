import React from 'react'

import './Calls.css'
import {Call} from './Call/Call'

export const Calls = (props) => {
    return (
        <div {...props}>
            <Call className="Call" id="callOne" title="Calls Received" number={props.received}/>
            <Call className="Call" id="callTwo" title="Calls Answered" number={props.answered}/>
            <Call className="Call" id="callThree" title="Calls in Queue" number={props.queue}/>
            <Call className="Call" id="callFour" title="Calls Abandoned" number={props.missed}/>
        </div>
    )
}
