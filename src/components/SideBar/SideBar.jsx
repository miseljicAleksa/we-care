import React from 'react'

import './SideBar.css'
import {SideBarParagraph} from './SideBarParagraph/SideBarParagraph'

export const SideBar = (props) => {
    const agentStatus = ["Smiljana 05:00 Inbound", "Biljana 02:00 Outbound",
                 "Bojan 12:00 Break","Nebojsa 04:00 Offline", "XXXX 05:00 Online/Ready"]

    const missedCalls = ["+38164...   10:32", "+38111254...   10:55", "+38163...   11:30", "+38164...   10:32", "+38111254...   10:55", "+38163...   11:30"]   
    
    
    return (
        <div {...props}>
            <div className="agentStatus">
                <p className="title">
                    AGENT STATUS
                </p>
                {
                    agentStatus.map((txt, index) => {
                        return(<SideBarParagraph text={txt} key={index}/>)
                    })
                }
                
            </div>
            <div className="missedCalls">
                <p className="title">
                    MISSED CALLS
                </p>
                {
                    missedCalls.map((call, index) => {
                        return(<SideBarParagraph text={call} key={index} />)
                    })
                }
                
            </div>
        </div>
    )
}
