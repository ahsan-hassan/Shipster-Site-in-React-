import React, { Component } from 'react';
import Navbar from '../components/Navbar';


export class Login extends Component {
    render() {
        return (
            <div>
                <Navbar /><br></br>
                <Login_form />

            </div>
        )
    }
}

export default Login
