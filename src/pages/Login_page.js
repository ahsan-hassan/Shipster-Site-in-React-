import React, { Component } from 'react';
import Login_form from '../components/Login_form';
import {Row, Col} from 'react-bootstrap';
import illustration from '../components/LoginImage.jpg'


export class Login_page extends Component {
    render() {
        return (
            <div>
                <Row style={{marginLeft:'0px', marginRight:'0px'}}>
                    <Col className="lgnImage d-none d-lg-block" lg={5}>
                        <img src={illustration} className="loginImage" alt='Login' />
                    </Col>
                    <Col lg={6}>
                    <Login_form /> 
                    </Col>    
                </Row>
            </div>    
        )
    }
}

export default Login_page
