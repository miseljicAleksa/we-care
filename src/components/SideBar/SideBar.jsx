import React from 'react'

import './SideBar.css'
import {SideBarParagraph} from './SideBarParagraph/SideBarParagraph'

export const SideBar = (props) => {
    const {agentStatus, missedCalls,dataCount,showModalForAgentStatus,showModalForMissedCalls, ...rest} = props
    return (
        <div {...rest}>
            <div className="agentStatus">
                <p className="title">
                    AGENT STATUS
                </p>
                {   
                    dataCount ? <button 
                                    className="sideBarButton" 
                                    onClick={showModalForAgentStatus}>
                                       SEE AGENT STATUS
                                    </button> : agentStatus.map((txt, index) => {
                                        return(<SideBarParagraph text={txt} key={index}/>)
                                         })
                }
                
            </div>
            <div className="missedCalls">
                <p className="title">
                    MISSED CALLS
                </p>
                {
                    dataCount ? <button 
                                    className="sideBarButton" 
                                    onClick={showModalForMissedCalls}>
                                        SEE MISSED CALLS
                                    </button> : missedCalls.map((call, index) => {
                                        return(<SideBarParagraph text={call} key={index} />)
                                        })
                }
                
            </div>
            <div></div>
        </div>
    )
}
