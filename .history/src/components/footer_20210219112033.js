import React, { Component } from 'react'
import {Button , Navbar, Col, Row , NavLink , Nav} from 'react-bootstrap';
import './style.css';
import { BsPeopleCircle , BsFillEnvelopeFill } from 'react-icons/bs';
import { MdCopyright } from 'react-icons/md';
import { TiSocialFacebookCircular ,TiSocialTwitterCircular , TiSocialYoutubeCircular , TiSocialInstagramCircular} from 'react-icons/ti';
import logo from './logo.jpg'

export class footer extends Component {
    render() {
        return (
            <div className="footer">
                <Row className="footer_row">
                <Col lg={6} sm={6}>
                    <img src={logo} className="footer_logo" />
                    <div className="footer_email">
                     <BsFillEnvelopeFill className="profile_icon" />
                     <p>Shipster@gmail.com</p> 
                    </div> 
                </Col>
                <Col lg={6} sm={6}>
                <h3 className="footer_social">
                    Social Media <br></br>
                </h3>     
                <Nav className="social_icons" >
                <Nav.Link href="#">
                    <TiSocialFacebookCircular  className="profile_icon"/>
                  </Nav.Link>  
                  <Nav.Link href="#">
                    <TiSocialInstagramCircular  className="profile_icon"/>
                  </Nav.Link>  
                  <Nav.Link href="#">
                    <TiSocialTwitterCircular   className="profile_icon"/>
                  </Nav.Link>  
                  <Nav.Link href="#">
                    <TiSocialYoutubeCircular  className="profile_icon"/>
                  </Nav.Link>  
                </Nav>                   
                </Col>
                </Row>


                <div className="footer_2">
                <Row className="footer_row">
                <Col lg={6} sm={6}>
                    <div className="footer_copyri8">
                     <MdCopyright className="copyri8_icon" />
                     <p>2021 All Copyrights Reserved</p> 
                    </div> 
                </Col>
                <Col lg={6} sm={6} className="footer_terms">
                <p >
                    Terms and Conditions, Privacy Policy
                </p>     
                </Col>
                </Row>
                </div>
            </div>
        )
    }
}

export default footer
