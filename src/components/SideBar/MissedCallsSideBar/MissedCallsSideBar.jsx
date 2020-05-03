import React from 'react'

import '../SideBar.css'
import {SideBarParagraph} from '../SideBarParagraph/SideBarParagraph'

export const MissedCallsSideBar = (props) => {  
    return (
        <div {...props}>
            <div className="missedCalls">
                <p className="title">
                    MISSED CALLS
                </p>
                {
                    props.dataCount ? <button className="sideBarButton" onClick={props.showModalForMissedCalls}>SEE MISSED CALLS</button> : props.missedCalls.map((call, index) => {
                        return(<SideBarParagraph text={call} key={index} />)
                    })
                }
                
            </div>
        </div>
    )
}
