import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import login_form from '../components/login_form'

export class login extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <login_form />
            </div>
        )
    }
}

export default login
