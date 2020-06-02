import React from 'react'

import '../SideBar.css'
import {SideBarParagraph} from '../SideBarParagraph/SideBarParagraph'

export const AgentStatusSideBar = (props) => {
    
    return (
        <div {...props}>
            <div className="agentStatus">
                <p className="title">
                    AGENT STATUS
                </p>
                {   
                    props.dataCount ? <button className="sideBarButton" onClick={props.showModalForAgentStatus}>SEE AGENT STATUS</button> : props.agentStatus.map((txt, index) => {
                        return(props.agentStatus.map(
                            ({fullname, status, status_time})   => <SideBarParagraph 
                                        text={fullname + " " + status + " " + status_time} key={index} 
                                        zelena={status === "Available" ? true : false}
                                        zuta={status === "Unavailable" ? true : false}
                                        crvena={status === "Idle" ? true : false}
                                        />))
                    })
                }
                
            </div>
        </div>
    )
}
