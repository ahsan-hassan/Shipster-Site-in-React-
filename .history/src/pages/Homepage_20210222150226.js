import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import Slider from '../components/Slider';
import Card_section from '../components/Card_section';
import Footer from '../components/Footer';

export class Homepage extends Component {
    render() {
        return (
            <div>
                <Router>
                <NavBar/>
                <Slider /><br></br>
                <Card_section />
                <Footer />
                <Switch>
               <Route path="/pages/Login_page">
                   <Login_page />
               </Route>
               <Route path="/">
       
               </Route>
           </Switch>
        </Router> 
                </Router> 

            </div>
        )
    }
}

export default Homepage
