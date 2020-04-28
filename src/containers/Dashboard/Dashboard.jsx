import React, { Component } from 'react';

import './Dashboard.css'
import {CallGraph, Calls, ServiceLevel, SideBar, TalkInformations, Title, NavigationBar } from '../../components'

class Dashboard extends Component {
    render() {
        return (
            <div className="Dashboard">
                <NavigationBar className="NavigationBar"/>
                <Title className="title"/>
                <Calls/>
                <CallGraph/>
                <ServiceLevel/>
                <TalkInformations/>
                <SideBar/>
            </div>
        );
    }
}

export default Dashboard;