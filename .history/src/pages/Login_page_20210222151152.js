import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Login_form from '../components/Login_form';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Login_page from '../pages/Login_page'

export class Login_page extends Component {
    render() {
        return (
            <Rounter>
            <div>
                <Navbar />
                <Switch>
               <Route path="/pages/Login_page">
                   <Login_page />
               </Route>
               <Route path="/">
       
               </Route>
           </Switch>
            </div> 
        </Rounter>  
        )
    }
}

export default Login_page
