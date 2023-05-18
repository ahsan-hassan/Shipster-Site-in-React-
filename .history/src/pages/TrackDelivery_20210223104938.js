import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import Slider from '../components/Slider';
import Card_section from '../components/Card_section';
import Footer from '../components/Footer';
import Track_page from './Track_page';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export class TrackDelivery extends Component {
    render() {
        return (
            <div>
                <Router>           
                    <div>
                        <NavBar/>
                            <Switch>
                        <Route path="/pages/TrackDelivery">
                            <Track_page/>
                        </Route>
                        <Route path="/">
                        <Slider /><br></br>
                            <Card_section />
                            <Footer />
                        </Route>
                        </Switch>
                    </div>
                </Router> 
            </div>
        )
    }
}

export default TrackDelivery
