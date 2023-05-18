import React, { Component } from 'react'
import {Button , Navbar, Col, Row} from 'react-bootstrap';
import './style.css';
import { BsPeopleCircle } from 'react-icons/bs';
import logo from './logo.jpg'

export class footer extends Component {
    render() {
        return (
            <div className="footer">
                <Row className="footer_row">
                <Col lg={6}>
                    <img src={logo} className="footer_logo" />
                    <div className="footer_email">
                     <BsPeopleCircle className="profile_icon" />
                     <p>Shipster@gmail.com</p> 
                    </div> 
                </Col>
                <Col lg={6}>
                <h3 className="footer_social">
                    Social Media
                    <div >
                        <BsPeopleCircle  className="social_icons"/>
                        <BsPeopleCircle  className="social_icons"/>
                        <BsPeopleCircle  className="social_icons"/>
                </h3>
                </Col>
                </Row>
            </div>
        )
    }
}

export default footer
