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
                    props.dataCount ? <button className="sideBarButton" onClick={props.showModalForAgentStatus}>SEE AGENT STATUS</button> : props.agentStatus.map(({fullname, status, status_time, status_color}, index) => {
                        let status_hour = Math.floor(status_time / 60).toString().padStart(2, "0");
                        let status_minute = (status_time % 60).toString().padStart(2, "0");
                        let status_time_formatted = status_hour + ":" + status_minute + ":00 ";
                        return(<SideBarParagraph 
                                        text={fullname + " " + status_time_formatted + status} key={index} 
                                        crvena={status_color === "crvena" ? true : false}
                                        zelena={status_color === "zelena" ? true : false}
                                        siva={status_color === "siva" ? true : false}
                                        bela={status_color === "bela" ? true : false}
                                        />)
                    })
                }
                
            </div>
        </div>
    )
}
