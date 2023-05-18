import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Login_form from '../components/Login_form';

export class Login_page extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Login_form />
            </div>
        )
    }
}

export default Login_page
