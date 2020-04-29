import React from 'react'

import './Calls.css'
import {Call} from './Call/Call'

export const Calls = (props) => {
    return (
        <div {...props}>
            <Call/>
            <Call/>
            <Call/>
            <Call/>
        </div>
    )
}
