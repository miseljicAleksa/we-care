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
                    props.dataCount ? <button className="sideBarButton" onClick={props.showModalForAgentStatus}>SEE AGENT STATUS</button> : props.agentStatus.map(({fullname, status, status_time}, index) => {
                        return(<SideBarParagraph 
                                        text={fullname + " " + status + " " + status_time} key={index} 
                                        zelena={status === "U pozivu" ? true : false}
                                        siva={status === "Dostupan" ? true : false}
                                        crvena={status === "Nije dostupan" ? true : false}
                                        />)
                    })
                }
                
            </div>
        </div>
    )
}
