import React, { Component } from 'react';
import NavBar from './Navbar';
import Login_form from './Login_form'

export class Login extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Row>
                    <Col>
                    <Login_form />
                    </Col>
                </Row>
                
            </div>
        )
    }
}

export default Login
