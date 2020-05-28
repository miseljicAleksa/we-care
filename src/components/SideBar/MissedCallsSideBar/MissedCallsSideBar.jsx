import React from 'react'
import moment from 'moment'

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
                    props.dataCount ?
                        <button
                            className="sideBarButton"
                            onClick={props.showModalForMissedCalls}>
                                SEE MISSED CALLS
                        </button> : 
                        props.missedCalls.map(({start, src}, index) => {
                            return( <SideBarParagraph text={"+" + src + "      " + moment(start).format('HH:mm MM-DD')} key={index} />)
                        })
                }
                
            </div>
        </div>
    )
}
