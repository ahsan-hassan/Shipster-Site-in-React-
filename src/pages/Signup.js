import React, { Component } from 'react'
import SignupForm from '../components/SignupForm';
import {Row, Col} from 'react-bootstrap';
import illustration from '../components/LoginImage.jpg'

export class Signup extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col className="lgnImage d-none d-lg-block" lg={5}>
                        <img src={illustration} className="loginImage" alt='Login'/>
                    </Col>
                    <Col lg={6}>
                    <SignupForm /> 
                    </Col>    
                </Row>
            </div>
        )
    }
}

export default Signup
