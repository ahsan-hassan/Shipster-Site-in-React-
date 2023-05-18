import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import Slider from '../components/Slider';
import Card_section from '../components/Card_section';
import Footer from '../components/Footer';
import Login_page from '../pages/Login_page'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export class Homepage extends Component {
    render() {
        return (
                <Router>
                    
            <div>
                <NavBar/>

                <Switch>
               <Route path="/pages/Login_page">
                   <Login_page />
               </Route>
               <Route path="/">
               <Slider /><br></br>
                <Card_section />
                <Footer />
               </Route>
           </Switch>
           </div>
        </Router> 
        )
    }
}

export default Homepage
