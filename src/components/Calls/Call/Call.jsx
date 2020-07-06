import React from 'react'
import CountUp from 'react-countup';
import axios from 'axios'
import FileDownload from 'js-file-download'

import './Call.css'

export const Call = (props) => {
    return (
        <div {...props}>
            <p className="title">{props.title}</p>
            <CountUp
                className="countUp"
                start={1}
                end={props.number}
                duration={8}
            />
        </div>
    )
}

export const CallDownloadPrimljeni = (props) => {
    const handleClick = () => {
        axios.get(`http://192.168.32.53/cdr/download-received-calls`)
        .then(response => {
            FileDownload(response.data, 'primljeni.txt')
        })
        .catch(err => console.log(err))}
    return (
        <div {...props}>
            <p className="title">{props.title}</p>
            <div
                onClick={handleClick}
                className="countUpWrapper">
                <CountUp
                    className="countUp"
                    start={1}
                    end={props.number}
                    duration={8}
                />
            </div>
        </div>
    )
}
