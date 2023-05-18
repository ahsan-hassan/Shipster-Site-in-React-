import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import Login_form from '../components/Login_form'

export class login extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Login_form />
            </div>
        )
    }
}

export default login
