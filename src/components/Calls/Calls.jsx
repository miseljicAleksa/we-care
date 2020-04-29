import React from 'react'

import './Calls.css'
import {Call} from './Call/Call'

export const Calls = (props) => {
    return (
        <div {...props}>
            <Call className="Call" id="callOne" title="Calls Received" number="981"/>
            <Call className="Call" id="callTwo" title="Calls Answered" number="974"/>
            <Call className="Call" id="callThree" title="Calls in Queue" number="23"/>
            <Call className="Call" id="callFour" title="Calls Abandoned" number="19"/>
        </div>
    )
}
