import React, { Component } from 'react';

import './Dashboard.css'
import {CallGraph, Calls, ServiceLevel, SideBar, TalkInformations, Title, NavigationBar } from '../../components'

class Dashboard extends Component {
    render() {
        return (
            <div className="Dashboard">
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
                <SideBar className="SideBar"/>
            </div>
        );
    }
}

export default Dashboard;