import React, { Component } from 'react';
import { Col , Row } from 'react-bootstrap';
import location from '../components/location.jpg'
import Footer from '../components/Footer';

export class ContactUs extends Component {
    render() {
        return (
            <div>
                <h2 className="ContactUs">Contact Us</h2>
                <Row>
                    <Col>
                    <img src={location} className="contactimg" />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ContactUs
