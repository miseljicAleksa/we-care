import React, { Component } from 'react';

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
        isSideBarVisible: true
    }

    isASModalVisibleHandler = () => {
        this.setState({isASModalVisible: true})
        console.log("AS MODAL")
    }

    isMCModalVisibleHandler = () => {
        this.setState({isMCModalVisible: true})
        console.log("MC MODAL")
    }

    closeModalHandler = () => {
        this.setState({isASModalVisible: false, isMCModalVisible: false})
    }

    isSideBarVisibleHandler = () => {
        this.setState({isSideBarVisible: false})
    }

    render() {
        // const missedCalls = ["+38164...   10:32", "+38111254...   10:55"]
        // const agentStatus = ["Smiljana 05:00 Inbound", "Biljana 02:00 Outbound"]
        const agentStatus = ["Smiljana 05:00 Inbound", "Biljana 02:00 Outbound",
                 "Bojan 12:00 Break","Nebojsa 04:00 Offline", "XXXX 05:00 Online/Ready", "Smiljana 05:00 Inbound", "Biljana 02:00 Outbound",
                 "Bojan 12:00 Break","Nebojsa 04:00 Offline", "XXXX 05:00 Online/Ready","Smiljana 05:00 Inbound", "Biljana 02:00 Outbound",
                 "Bojan 12:00 Break","Nebojsa 04:00 Offline", "XXXX 05:00 Online/Ready", "Smiljana 05:00 Inbound", "Biljana 02:00 Outbound",
                 "Bojan 12:00 Break","Nebojsa 04:00 Offline", "XXXX 05:00 Online/Ready"]
        const missedCalls = ["+38164...   10:32", "+38111254...   10:55", "+38163...   11:30", "+38164...   10:32", "+38111254...   10:55", "+38163...   11:30","+38164...   10:32", "+38111254...   10:55", "+38163...   11:30", "+38164...   10:32", "+38111254...   10:55", "+38163...   11:30","+38164...   10:32", "+38111254...   10:55", "+38163...   11:30", "+38164...   10:32", "+38111254...   10:55", "+38163...   11:30"]  
        const dataCount = missedCalls.length + agentStatus.length
        let test=false
        if(dataCount>10){
            test = true
        }else{
            test = false
        }
        return (
            <div className="Dashboard">
                <Modal show={this.state.isASModalVisible || this.state.isMCModalVisible} modalClosed={this.closeModalHandler}>
                    
                    {this.state.isASModalVisible ? <AgentStatusSideBar 
                        className="SideBar" 
                        agentStatus={agentStatus} 
                        style={{overflowY: "scroll", height:"500px"}}
                        /> : null}
                    {this.state.isMCModalVisible ? (<MissedCallsSideBar 
                        className="SideBar" 
                        missedCalls={missedCalls} 
                        style={{overflowY: "scroll", height:"500px"}}
                        />) : null}

                </Modal>
                <NavigationBar className="NavigationBar"/>
                <div className="leftSection">
                    <Title className="Title"/>
                    <Calls className="Calls"/>
                    <CallGraph className="CallGraph"/>
                </div>
                <div className="midSection">
                    <ServiceLevel className="ServiceLevel"/>
                    <TalkInformations className="TalkInformations"/>
                </div>
                <SideBar 
                    className="SideBar" 
                    agentStatus={agentStatus} 
                    missedCalls={missedCalls} 
                    dataCount={test} 
                    showModalForAgentStatus={this.isASModalVisibleHandler} 
                    showModalForMissedCalls={this.isMCModalVisibleHandler}
                />
            </div>
        );
    }
}

export default Dashboard;