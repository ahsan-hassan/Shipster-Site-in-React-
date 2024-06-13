import React, { Component } from 'react'
import { Col, Row , Nav} from 'react-bootstrap';
import './style.css';
import { MdCopyright } from 'react-icons/md';
import {ImMail4  } from 'react-icons/im';
import { TiSocialFacebookCircular ,TiSocialTwitterCircular , TiSocialYoutubeCircular , TiSocialInstagramCircular} from 'react-icons/ti';
import logo from './logo.jpg'

export class footer extends Component {
    render() {
        return (
            <div className="footer">
                <Row className="footer_row">
                <Col lg={6} sm={12} md={6}>
                    <img src={logo} className="footer_logo" />
                    <div className="footer_email">
                     <ImMail4 className="email_icon" />
                     <p>Shipster@gmail.com</p> 
                    </div> 
                </Col>

                <Col lg={6} sm={12} md={6} >
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

                <hr style={{backgroundColor: 'white'}}></hr>
                <div className="footer_2">
                <Row className="footer_row">
                <Col lg={6} sm={12} md={6}>
                    <div className="footer_copyri8">
                     <MdCopyright className="copyri8_icon" />
                     <p>2021 All Copyrights Reserved</p> 
                    </div> 
                </Col>
                <Col lg={6} sm={12} md={6} className="footer_terms">
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
