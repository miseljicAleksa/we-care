import React from 'react'
import CountUp from 'react-countup';

import './Call.css'

export const Call = (props) => {
    return (
        <div {...props}>
            <p className="title">{props.title}</p>
            <CountUp
                className="countUp"
                start={1}
                end={props.number}
                duration={8}
            />
        </div>
    )
}
