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
                        return(<SideBarParagraph text={txt} key={index}/>)
                    })
                }
                
            </div>
        </div>
    )
}
