import React from 'react'
import ReactSpeedometer from "react-d3-speedometer"

import './ServiceLevel.css'

export const ServiceLevel = (props) => {
    const textColor = "#AAA"

    return (
        <div {...props}>
            <p id="title">NIVO USLUGE<br></br>{Math.round((props.answered / props.received) * 100)}%</p>
            <ReactSpeedometer
                needleHeightRatio={0.8}
                height={150}
                maxSegmentLabels={0}
                segments={9000}
                maxValue={100}
                value={(props.answered / props.received) * 100}
                currentValueText=""
                textColor={textColor}
                needleColor={"#838D94"}
                className="speedometer"
                />
            <div className="subtitleContainer">
                <div className="red">
                </div>
                <p className="string">&#60;= 40</p>
                <div className="yellow">

                </div>
                <p className="string">{'>'} 40 & &#60;=70</p>
                <div className="green">

                </div>
                <p className="stringTwo">{'>'} 71 & &#60;= 100</p>
            </div>
            


        </div>
    )
}
