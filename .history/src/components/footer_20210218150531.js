import React, { Component } from 'react'
import {Button , Navbar, Col} from 'react-bootstrap';
import './style.css';
import { BsPeopleCircle } from 'react-icons/bs';
import logo from './logo.jpg'

export class footer extends Component {
    render() {
        return (
            <div>
                <footer>
                <Navbar className="footer">
                    <Col lg={9}>
                    <img src={logo} className="logo" /> 
                    </Col>
                    
                    <Col lg={3} className="footer_social" >
                    <h3 className="social_media">Social Media</h3>
                    <div className="icons">
                    <BsPeopleCircle className="profile_icon"/>
                    <BsPeopleCircle className="profile_icon"/>
                    <BsPeopleCircle className="profile_icon"/>
                    </div>

                    </Col>
                </Navbar>    
                </footer>
            </div>
        )
    }
}

export default footer
