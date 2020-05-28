import React from 'react'
import { Bar } from 'react-chartjs-2';

import './CallGraph.css'

export const CallGraph = (props) => {

    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Received',
            backgroundColor: '#63B7E5',
            borderColor: '#63B7E5',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: props.graphData ? Object.values(props.graphData).map(value=>value['received']) : null
          },
          {
            label: 'Answered',
            backgroundColor: '#8EBB6A',
            borderColor: '#8EBB6A',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: props.graphData ? Object.values(props.graphData).map(value=>value['answered']) : null
          },
          {
            label: 'Missed',
            backgroundColor: '#CB5E4A',
            borderColor: '#CB5E4A',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: props.graphData ? Object.values(props.graphData).map(value=>value['missed']) : null
          }
        ]
    }

    const options={
        responsive: true,
        legend: {
            display: false,
        },
        type:'bar',
        
    }
    console.log(props.graphData)

    return (

        <div {...props}>
            <p id="title">CALL RECEIVED/ANSWERED/MISSED</p>
            <div className="titleContainer">
                <div id="blue"></div>
                <p className="heading">Received</p>
                <div id="green"></div>
                <p className="heading">Answered</p>
                <div id="orange"></div>
                <p className="heading">Missed</p>
            </div>
            
            <Bar data={data} options={options}/>
        </div>
    )
}

