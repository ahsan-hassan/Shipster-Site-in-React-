import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Login_form from '../components/Login_form';


export class Login extends Component {
    render() {
        return (
            <div>
                <Login_form />
            </div>
        )
    }
}

export default Login
