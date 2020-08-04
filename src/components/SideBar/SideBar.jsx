import React from 'react'
import moment from 'moment'
import './SideBar.css'
import {SideBarParagraph} from './SideBarParagraph/SideBarParagraph'

export const SideBar = (props) => {
  const {agentStatus, missedCalls, dataCount, showModalForAgentStatus, showModalForMissedCalls, ...rest} = props
  return (
    <div {...rest}>

      <div className="missedCalls">
        <p className="title">
          MISSED CALLS
        </p>
        {
          missedCalls.map(({start, src, index}) => {
            return (
              <SideBarParagraph
                text={"+" + src + "    " + moment(start).format('HH:mm')}
                key={index}
              />)
          })
        }

      </div>
      <div></div>
    </div>
  )
}
