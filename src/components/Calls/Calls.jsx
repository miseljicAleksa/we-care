import React from 'react'

import './Calls.css'
import {Call, CallDownloadPrimljeni} from './Call/Call'

export const Calls = (props) => {
  return (
    <div {...props}>
      <CallDownloadPrimljeni className="Call" id="callOne" title="Primljeni pozivi" number={props.received}/>
      <Call className="Call" id="callTwo" title="Odgovoreni pozivi" number={props.answered}/>
      <Call className="Call" id="callThree" title="Pozivi na čekanju" number={props.queue}/>
      <Call className="Call" id="callFour" title="Propušteni pozivi" number={props.missed}/>
    </div>
  )
}
