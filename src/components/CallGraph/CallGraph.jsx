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
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: 'Answered',
            backgroundColor: '#8EBB6A',
            borderColor: '#8EBB6A',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [45, 79, 10, 41, 16, 85, 20]
          },
          {
            label: 'Abandoned',
            backgroundColor: '#CB5E4A',
            borderColor: '#CB5E4A',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [100, 24, 66, 51, 10, 95, 200]
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

    return (
        <div {...props}>
            <p id="title">CALL RECEIVED/ANSWERED/ABANDONED</p>
            <div className="titleContainer">
                <div id="blue"></div>
                <p className="heading">Received</p>
                <div id="green"></div>
                <p className="heading">Answered</p>
                <div id="orange"></div>
                <p className="heading">Abandoned</p>
            </div>
            
            <Bar data={data} options={options}/>
        </div>
    )
}

