import React from 'react'
import moment from 'moment'
import ReactSpeedometer from "react-d3-speedometer"
import axios from 'axios'
import FileDownload from 'js-file-download'
import '../SideBar.css'
import {SideBarParagraph} from '../SideBarParagraph/SideBarParagraph'

export const MissedCallsSideBar = (props) => {
  const handleClick = () => {
    axios.get(`http://192.168.32.53/cdr/download-missed-calls`)
      .then(response => {
        FileDownload(response.data, 'nekontaktirani.txt')
      })
      .catch(err => console.log(err))
  }

  return (
    <div {...props}>
      <div className="missedCalls">
        <div id="nekontaktirani">
          <p className="title" id="nekontaktirani-title">
            NEKONTAKTIRANI
          </p>
        </div>
        <div className='nekontaktirani-wrapper' onClick={handleClick}>
          <ReactSpeedometer
            needleHeightRatio={0.8}
            maxSegmentLabels={0}
            segments={9000}
            maxValue={100}
            value={props.strelica}
            needleColor={"#838D94"}
            startColor={"#33CC33"}
            endColor={"#FF471A"}
            className="speedometer"
            currentValueText={String(props.numberOfNekontaktirani)}
            height={180}
            textColor={"#d8dee9"}
            valueTextFontSize={"24px"}
          /> {
          props.dataCount ?
            <button
              className="sideBarButton"
              onClick={props.showModalForMissedCalls}>
              SEE MISSED CALLS
            </button> :
            props.missedCalls.map(({start, src, count}, index) =>
                <SideBarParagraph text={`+${src}      ${moment(start).format('HH:mm')} (${count})`}
                                 key={index}/>
            )
        }
        </div>
      </div>
    </div>
  )
}
