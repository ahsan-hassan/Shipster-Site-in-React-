import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Login_form from '../components/Login_form';

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
         </Router>  
        )
    }
}

export default Login_page
