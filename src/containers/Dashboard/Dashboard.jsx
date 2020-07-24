import React, { useEffect, useState } from 'react';
import axios from 'axios'

import './Dashboard.css'
import {
    Calls, ServiceLevel,
    TalkInformations, Title,
    NavigationBar, Modal,
    MissedCallsSideBar, AgentStatusSideBar } from '../../components'
import {Call} from '../../components/Calls/Call/Call'


const  Dashboard = (props) => {
    const [numbercalls, setNumbercalls] = useState(null)
    const [isASModalVisible, setIsASModalVisible] = useState(false)
    const [isMCModalVisible, setIsMCModalVisible] = useState(false)
    const [missedCalls, setMissedCalls] = useState([])
    const [agents, setAgents] = useState([])
    const [answered, setAnswred] = useState([])
    const [received, setReceived] = useState(null)
    const [missed, setMissed] = useState(null)
    const [queue, setQueue] = useState(null)
    const [att, setAtt] = useState(null)
    const [att_inbound, setAtt_inbound] = useState(null)
    const [awt, setAwt] = useState(null)
    const [lwt, setLwt] = useState(null)
    const [att_outbound, setAtt_outbound] = useState(null)
    const [outbound, setOutbound] = useState(null)

    const closeModalHandler = () => {
        setIsASModalVisible(false)
    }
                 
      useEffect(() => {
        loadData()
        setInterval(loadData, 5 * 1000);
      }, [])

    
        async function loadData () {
            try {
                let received = 0

                axios.get(`http://192.168.32.53/cdr/missed-calls`)
                .then(response => {
                    setMissedCalls(response.data)
                })
                .catch(err => console.log(err))
            
                axios.get(`http://192.168.32.53/cdr/number-of-missed-calls`)
                .then(response => {
                    setNumbercalls(response.data)
                })
                .catch(err => console.log(err))
            
            
                axios.get(`http://192.168.32.53/cdr/agents`)
                .then(response => {
                    setAgents(response.data)
                    // console.log(response.data)
                    // console.log(agents)
                })
                .catch(err => console.log(err))

                
                axios.get(`http://192.168.32.53/cdr/answered`)
                .then(response => {
                    setAnswred(response.data)
                    received = received + response.data

                    axios.get(`http://192.168.32.53/cdr/missed`)
                    .then(response => {
                        setMissed(response.data)
                        received = received + response.data
                        setReceived(received)
                        // console.log(response.data)
                    })
                    .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
            
            

                
                axios.get(`http://192.168.32.53/cdr/queue`)
                .then(response => {
                    setQueue(response.data)
                    // console.log(response.data)
                })
                .catch(err => console.log(err))

            
                axios.get(`http://192.168.32.53/cdr/awt`)
                .then(response => {
                    var minutes = Math.floor(response.data / 60)
                    var seconds = response.data - minutes * 60
                    seconds = seconds.toString().padStart(2, "0")
                    setAwt(`${minutes}:${seconds}`)
                    // console.log(response.data)
                })
                .catch(err => console.log(err))

            
                axios.get(`http://192.168.32.53/cdr/att`)
                .then(response => {
                    var minutes = Math.floor(response.data / 60)
                    var seconds = response.data - minutes * 60
                    seconds = seconds.toString().padStart(2, "0")
                    setAtt(`${minutes}:${seconds}`)
                    // console.log(response.data)
                })
                .catch(err => console.log(err))

            
                axios.get(`http://192.168.32.53/cdr/att-inbound`)
                .then(response => {
                    var minutes = Math.floor(response.data / 60)
                    var seconds = response.data - minutes * 60
                    seconds = seconds.toString().padStart(2, "0")
                    setAtt_inbound(`${minutes}:${seconds}`)
                    // console.log(response.data)
                })
                .catch(err => console.log(err))
            
            
                axios.get(`http://192.168.32.53/cdr/outbound`)
                .then(response => {
                    setOutbound(response.data)
                    // console.log(response.data)
                })
                .catch(err => console.log(err))

            
                axios.get(`http://192.168.32.53/cdr/att-outbound`)
                .then(response => {
                    var minutes = Math.floor(response.data / 60)
                    var seconds = response.data - minutes * 60
                    seconds = seconds.toString().padStart(2, "0")
                    setAtt_outbound(`${minutes}:${seconds}`)
                    // console.log(response.data)
                })
                .catch(err => console.log(err))

            
                axios.get(`http://192.168.32.53/cdr/lwt`)
                .then(response => {
                    var minutes = Math.floor(response.data / 60)
                    var seconds = response.data - minutes * 60
                    seconds = seconds.toString().padStart(2, "0")
                    setLwt(`${minutes}:${seconds}`)
                    // console.log(response.data)
                })
                .catch(err => console.log(err)) 
            } catch (error) {
                console.log(error)
            }
        }
        var midService = (props.answered / props.received) * 100
        var strelica = (missedCalls.length / numbercalls) * 100
        var number_of_nekontaktirani = missedCalls.length
        return (
            <div className="Dashboard">
                <Modal show={isASModalVisible || isMCModalVisible} modalClosed={closeModalHandler}>
                    
                    {isASModalVisible ? <AgentStatusSideBar 
                        className="SideBar" 
                        agentStatus={agents} 
                        style={{overflowY: "scroll", height:"500px"}}
                        /> : null}
                    {isMCModalVisible ? (<MissedCallsSideBar 
                        className="SideBar" 
                        missedCalls={missedCalls} 
                        style={{overflowY: "scroll", height:"500px"}}
                        />) : null}

                </Modal>
                <NavigationBar className="NavigationBar"/>
                <div className="leftSection">
                    <Title className="Title"/>
                    <Calls className="Calls" missed={missed} queue={queue} answered={answered} received={received}/>
                    <AgentStatusSideBar agentStatus={agents}/>
                </div>
                <div className="midSection">
                    <ServiceLevel className="ServiceLevel" answered={answered} received={received} value={midService} color={".black"}/>
                    <TalkInformations attinbound={att_inbound} attoutbound={att_outbound} className="TalkInformations" awt={awt} lwt={lwt} att={att} att-inbound={att_inbound} att-outbound={att_outbound}/>
                </div>
                <div className="SideBar">
                <MissedCallsSideBar 
                        missedCalls={missedCalls}
                        answered={answered}
                        received={received} 
                        strelica={strelica}
                        number_of_nekontaktirani={number_of_nekontaktirani}
                />
                <Call className="Call" id="callOne" title="Odlazni pozivi" number={outbound} style={{marginTop: "15px"}}/>
                </div>
                
            </div>
        );
    }

export default Dashboard;