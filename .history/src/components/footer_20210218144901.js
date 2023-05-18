import React, { Component } from 'react'
import {Button , Navbar, Col} from 'react-bootstrap';
import './style.css';
import logo from './logo.jpg'

export class footer extends Component {
    render() {
        return (
            <div>
                <footer>
                <Navbar className="header">
                    <Col lg={9}>
                    <img src={logo} className="logo" /> 
                    </Col>
                    
                    <Col lg={3} className="header_btn" >
                    <h3 className="social_media">Social Media</h3>
                    </Col>
                </Navbar>    
                </footer>
            </div>
        )
    }
}

export default footer
