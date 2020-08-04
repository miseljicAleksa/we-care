import React from 'react'

import './Calls.css'
import {Call, CallDownloadPrimljeni} from './Call/Call'

export const Calls = ({ received, answered, queue, missed, ...props }) =>
  (
    <div {...props}>
      <CallDownloadPrimljeni className="Call" id="callOne" title="Primljeni pozivi" number={received}/>
      <Call className="Call" id="callTwo" title="Odgovoreni pozivi" number={answered}/>
      <Call className="Call" id="callThree" title="Pozivi na čekanju" number={queue}/>
      <Call className="Call" id="callFour" title="Propušteni pozivi" number={missed}/>
    </div>
  )
