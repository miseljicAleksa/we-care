import React from 'react'
import moment from 'moment'
import ReactSpeedometer from "react-d3-speedometer"

import '../SideBar.css'
import {SideBarParagraph} from '../SideBarParagraph/SideBarParagraph'
import {ServiceLevel} from '../../../components'
export const MissedCallsSideBar = (props) => { 
        return (
        <div {...props}>
            <div className="missedCalls">
                <p className="title">
                    NEKONTAKTIRANI     LISTA
                </p>
                <ReactSpeedometer
                needleHeightRatio={0.8}
                height={150}
                maxSegmentLabels={0}
                segments={9000}
                maxValue={100}
                value={props.strelica}
                currentValueText=""
                needleColor={"#FF0000"}
                className="speedometer"
                />                {
                    props.dataCount ?
                        <button
                            className="sideBarButton"
                            onClick={props.showModalForMissedCalls}>
                                SEE MISSED CALLS
                        </button> : 
                        props.missedCalls.map(({start, src}, index) => {
                            return( <SideBarParagraph text={"+" + src + "      " + moment(start).format('HH:mm MM-DD')} key={index} />)
                        })
                }
                
            </div>
        </div>
    )
}
