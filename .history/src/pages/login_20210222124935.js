import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import NavBar from '../components/Navbar';
import Login_form from '../components/Login_form';

export class Login extends Component {
    render() {
        return (
            <div>
                </Navbar>
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
