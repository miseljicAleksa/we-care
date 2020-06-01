import React from 'react'
import slika from './download.png'
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
<<<<<<< HEAD
                    props.dataCount ? <button className="sideBarButton" onClick={props.showModalForAgentStatus}>SEE AGENT STATUS</button> : props.agentStatus.map((txt, index) => {
                        return(props.agentStatus.map(({fullname, status, status_time})=> <SideBarParagraph img={slika} text={fullname + " " + status + " " + status_time} key={index} />))
                    })
=======
                    props.dataCount ? 
                        <button 
                            className="sideBarButton" 
                            onClick={props.showModalForAgentStatus}>
                                SEE AGENT STATUS
                        </button> : 
                        props.agentStatus.map(({fullname, status, status_time}, index) => {
                            return( <SideBarParagraph text={fullname + " " + status_time + " " + status} key={index} />)
                        })
>>>>>>> 6591c371dfd46c8bfb85f5cae37a917b46ae21d4
                }
                
            </div>
        </div>
    )
}
