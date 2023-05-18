import React, { Component } from 'react'
import {Button , Navbar, Col} from 'react-bootstrap';
import './style.css';
import { BsPeopleCircle } from 'react-icons/bs';
import logo from './logo.jpg'

export class footer extends Component {
    render() {
        return (
            <div className="footer">
                <Row>
                <Col lg={4}>
                    <img src={logo} className="logo" /> 
                </Col>
                </Row>
            </div>
        )
    }
}

export default footer
