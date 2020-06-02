import React, {useState} from 'react'
import moment from 'moment'
import ReactSpeedometer from "react-d3-speedometer"
import axios from 'axios'

import '../SideBar.css'
import {SideBarParagraph} from '../SideBarParagraph/SideBarParagraph'
import {ServiceLevel} from '../../../components'
export const MissedCallsSideBar = (props) => { 

    const [dugme, setDugme] = useState("")

        return (
        <div {...props}>
            <div className="missedCalls">
                <div id="kurac">
                <p className="title">
                    NEKONTAKTIRANI
                </p>
                <button onClick={()=>{axios.get(`http://80.240.26.159/cdr/download-missed-calls`)
            .then(response => {
                setDugme(response.data)
                console.log(response.data, "DUGMEEEE calls")
            })
            .catch(err => console.log(err))}}>LISTA</button>
                </div>
                
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
