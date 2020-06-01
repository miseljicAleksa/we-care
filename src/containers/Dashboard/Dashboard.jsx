import React, { Component } from 'react';
import axios from 'axios'

import './Dashboard.css'
import {
    CallGraph, Calls, ServiceLevel,
    SideBar, TalkInformations, Title,
    NavigationBar, Spinner, Modal,
    Backdrop, MissedCallsSideBar, AgentStatusSideBar } from '../../components'

class Dashboard extends Component {
    state={
        isASModalVisible: false,
        isMCModalVisible: false,
        isSideBarVisible: true,
        missedCalls: [],
        agents: [], 
        graphic: [],
        answered: null,
        received: null,
        missed: null,
        queue: null,
        att: null,
        att_inbound: null,
        att_outbound: null,
        awt: null,
        lwt: null,
    }

    componentDidMount() {
        // Load async data.
        // Update state with new data.
        // Re-render our component.
        // const baseUrl = 'http://80.240.26.159/'
        axios.get(`http://80.240.26.159/cdr/missed-calls`)
            .then(response => {
                this.setState({missedCalls: response.data})
                console.log(response.data, "missed calls")
                // console.log(this.state.missedCalls)
            })
            .catch(err => console.log(err))
        
        axios.get(`http://80.240.26.159/cdr/agents`)
            .then(response => {
                this.setState({agents: response.data})
                // console.log(response.data)
                // console.log(this.state.agents)
            })
            .catch(err => console.log(err))

        axios.get(`http://80.240.26.159/cdr/graphic`)
            .then(response => {
                this.setState({graphic: response.data})
            })
            .catch(err => console.log(err))

        axios.get(`http://80.240.26.159/cdr/answered`)
            .then(response => {
                this.setState({answered: response.data})
                // console.log(response.data)
            })
            .catch(err => console.log(err))
        
        axios.get(`http://80.240.26.159/cdr/missed`)
            .then(response => {
                this.setState({missed: response.data})
                // console.log(response.data)
            })
            .catch(err => console.log(err))

        axios.get(`http://80.240.26.159/cdr/received`)
            .then(response => {
                this.setState({received: response.data})
                // console.log(response.data)
            })
            .catch(err => console.log(err))

        axios.get(`http://80.240.26.159/cdr/queue`)
            .then(response => {
                this.setState({queue: response.data})
                // console.log(response.data)
            })
            .catch(err => console.log(err))

        axios.get(`http://80.240.26.159/cdr/awt`)
            .then(response => {
                var minutes = Math.floor(response.data / 60)
                var seconds = response.data - minutes * 60
                seconds = seconds.toString().padStart(2, "0")
                this.setState({awt: `${minutes}:${seconds}`})
                // console.log(response.data)
            })
            .catch(err => console.log(err))

        axios.get(`http://80.240.26.159/cdr/att`)
            .then(response => {
                var minutes = Math.floor(response.data / 60)
                var seconds = response.data - minutes * 60
                seconds = seconds.toString().padStart(2, "0")
                this.setState({att: `${minutes}:${seconds}`})
                // console.log(response.data)
            })
            .catch(err => console.log(err))

        axios.get(`http://80.240.26.159/cdr/att-inbound`)
            .then(response => {
                var minutes = Math.floor(response.data / 60)
                var seconds = response.data - minutes * 60
                seconds = seconds.toString().padStart(2, "0")
                this.setState({att_inbound: `${minutes}:${seconds}`})
                // console.log(response.data)
            })
            .catch(err => console.log(err))

        axios.get(`http://80.240.26.159/cdr/att-outbound`)
            .then(response => {
                var minutes = Math.floor(response.data / 60)
                var seconds = response.data - minutes * 60
                seconds = seconds.toString().padStart(2, "0")
                this.setState({att_outbound: `${minutes}:${seconds}`})
                // console.log(response.data)
            })
            .catch(err => console.log(err))

        axios.get(`http://80.240.26.159/cdr/lwt`)
            .then(response => {
                var minutes = Math.floor(response.data / 60)
                var seconds = response.data - minutes * 60
                seconds = seconds.toString().padStart(2, "0")
                this.setState({lwt: `${minutes}:${seconds}`})
                // console.log(response.data)
            })
            .catch(err => console.log(err))           
      }

    isASModalVisibleHandler = () => {
        this.setState({isASModalVisible: true})
    }

    isMCModalVisibleHandler = () => {
        this.setState({isMCModalVisible: true})
    }

    closeModalHandler = () => {
        this.setState({isASModalVisible: false, isMCModalVisible: false})
    }

    isSideBarVisibleHandler = () => {
        this.setState({isSideBarVisible: false})
    }

    render() {
        return (
            <div className="Dashboard">
                <Modal show={this.state.isASModalVisible || this.state.isMCModalVisible} modalClosed={this.closeModalHandler}>
                    
                    {this.state.isASModalVisible ? <AgentStatusSideBar 
                        className="SideBar" 
                        agentStatus={this.state.agents} 
                        style={{overflowY: "scroll", height:"500px"}}
                        /> : null}
                    {this.state.isMCModalVisible ? (<MissedCallsSideBar 
                        className="SideBar" 
                        missedCalls={this.state.missedCalls} 
                        style={{overflowY: "scroll", height:"500px"}}
                        />) : null}

                </Modal>
                <NavigationBar className="NavigationBar"/>
                <div className="leftSection">
                    <Title className="Title"/>
                    <Calls className="Calls" missed={this.state.missed} queue={this.state.queue} answered={this.state.answered} received={this.state.received}/>
                    <AgentStatusSideBar agentStatus={this.state.agents}/>
                </div>
                <div className="midSection">
                    <ServiceLevel className="ServiceLevel" answered={this.state.answered} received={this.state.received}/>
                    <TalkInformations className="TalkInformations" awt={this.state.awt} lwt={this.state.lwt} att={this.state.att} att-inbound={this.state.att_inbound} att-outbound={this.state.att_outbound}/>
                    
            
                />
                </div>
                <SideBar 
                    className="SideBar" 
                    missedCalls={this.state.missedCalls} 
                    dataCount={10} 
                    showModalForAgentStatus={this.isASModalVisibleHandler} 
                    showModalForMissedCalls={this.isMCModalVisibleHandler}
                />
            </div>
        );
    }


}

export default Dashboard;