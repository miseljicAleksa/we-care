import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Dashboard.css'
import {
    Calls, ServiceLevel,
    TalkInformation, Title,
    NavigationBar, Modal,
    MissedCallsSideBar, AgentStatusSideBar } from '../../components'
import {Call} from '../../components/Calls/Call/Call'

const Dashboard = (props) => {
  const [numbercalls, setNumbercalls] = useState(null)
  const [isASModalVisible, setIsASModalVisible] = useState(false)
  const [isMCModalVisible, setIsMCModalVisible] = useState(false)
  const [missedCalls, setMissedCalls] = useState([])
  const [agents, setAgents] = useState([])
  const [answered, setAnswered] = useState([])
  const [received, setReceived] = useState(null)
  const [missed, setMissed] = useState(null)
  const [queue, setQueue] = useState(null)
  const [att, setAtt] = useState(null)
  const [attInbound, setAttInbound] = useState(null)
  const [awt, setAwt] = useState(null)
  const [lwt, setLwt] = useState(null)
  const [attOutbound, setAttOutbound] = useState(null)
  const [outbound, setOutbound] = useState(null)

  const closeModalHandler = () => setIsASModalVisible(false)

  const endpoint = 'http://192.168.32.53'; // TODO mv to config

  const getEndpoint = (path, callbackFn, addMinAndSec = false) => {
    axios.get(`${endpoint}/cdr/${path}`)
      .then(({ data }) => callbackFn(addMinAndSec ? getMinutesAndSeconds(data) : data))
      .catch(console.error)
  }

  const getMinutesAndSeconds = (data) => {
    const minutes = Math.floor(data / 60)
    const seconds = (data - minutes * 60).toString().padStart(2, "0")
    return `${minutes}:${seconds}`
  }

  useEffect(() => {
    loadData()
    setInterval(loadData, 5 * 1000);
  }, [])

  const loadData = async () => {
    try {
      let received = 0
      /**
       * TODO Don't even know if this chunk below was intentional
       */
      axios.get(`http://192.168.32.53/cdr/answered`)
        .then(({ data }) => {
          setAnswered(data)
          received = received + data
          axios.get(`http://192.168.32.53/cdr/missed`)
            .then(_ => {
                setMissed(data)
                received = received + data
                setReceived(received)
            })
            .catch(console.error)
          })
        .catch(console.error)

      getEndpoint('missed-calls', setMissedCalls)
      getEndpoint('number-of-missed-calls', setNumbercalls)
      getEndpoint('agents', setAgents)
      getEndpoint('queue', setQueue)
      getEndpoint('awt', setAwt, true)
      getEndpoint('att', setAtt, true)
      getEndpoint('att-inbound', setAttInbound, true)
      getEndpoint('outbound', setOutbound)
      getEndpoint('att-outbound', setAttOutbound, true)
      getEndpoint('lwt', setLwt, true)
    } catch (error) {
      console.error(error)
    }
  }
  const midService = (props.answered / props.received) * 100
  const strelica = (missedCalls.length / numbercalls) * 100
  const numberOfNekontaktirani = missedCalls.length
  return (
    <div className="Dashboard">
      <Modal show={isASModalVisible || isMCModalVisible} modalClosed={closeModalHandler}>
          {isASModalVisible && <AgentStatusSideBar
              className="SideBar"
              agentStatus={agents}
              style={{overflowY: "scroll", height:"500px"}}
              />}
          {isMCModalVisible && (<MissedCallsSideBar
              className="SideBar"
              missedCalls={missedCalls}
              style={{overflowY: "scroll", height:"500px"}}
              />)}
      </Modal>
      <NavigationBar className="NavigationBar"/>
      <div className="leftSection">
          <Title className="Title"/>
          <Calls className="Calls" missed={missed} queue={queue} answered={answered} received={received}/>
          <AgentStatusSideBar agentStatus={agents}/>
      </div>
      <div className="midSection">
          <ServiceLevel className="ServiceLevel" answered={answered} received={received} value={midService} color={".black"}/>
          <TalkInformation attinbound={attInbound} attoutbound={attOutbound} className="TalkInformation" awt={awt} lwt={lwt} att={att} att-inbound={attInbound} att-outbound={attOutbound}/>
      </div>
      <div className="SideBar">
      <MissedCallsSideBar
        missedCalls={missedCalls}
        answered={answered}
        received={received}
        strelica={strelica}
        numberOfNekontaktirani={numberOfNekontaktirani}
      />
      <Call className="Call" id="callOne" title="Odlazni pozivi" number={outbound} style={{marginTop: "15px"}}/>
      </div>
    </div>
  );
  }

export default Dashboard;