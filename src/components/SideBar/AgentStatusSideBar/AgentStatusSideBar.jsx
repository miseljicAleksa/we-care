import React from 'react'
import '../SideBar.css'
import {SideBarParagraph} from '../SideBarParagraph/SideBarParagraph'

export const AgentStatusSideBar = (props) => (
  <div {...props}>
    <div className="agentStatus">
      <p className="title">
        AGENT STATUS
      </p>
      {
        props.dataCount ?
          <button className="sideBarButton" onClick={props.showModalForAgentStatus}>SEE AGENT STATUS</button> :
          props.agentStatus.map(({fullname, status, status_time, status_color}, index) => {
            const status_hour = Math.floor(status_time / 3600).toString().padStart(2, "0");
            const status_minute = Math.floor((status_time - status_hour * 3600) / 60).toString().padStart(2, "0");
            const status_seconds = (status_time % 60).toString().padStart(2, "0");
            const status_time_formatted = `${status_hour}:${status_minute}:${status_seconds} `;
            return (
              <SideBarParagraph
                text={`${fullname} ${status_time_formatted}${status}`} key={index}
                crvena={status_color === "crvena"}
                zelena={status_color === "zelena"}
                siva={status_color === "siva"}
                bela={status_color === "bela"}
              />
              )
          })
      }

    </div>
  </div>
)
