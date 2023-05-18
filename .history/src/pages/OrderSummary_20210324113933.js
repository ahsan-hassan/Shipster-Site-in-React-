import React, { Component } from 'react';
import {Form, Button , Col , Row } from 'react-bootstrap';

export class OrderSummary extends Component {
    render() {
        return (
            <div>
                <div className="ordersummary">
                <Row className="summary_row">
                <h3 style={{textAlign:'center' , width:'100%', marginTop:'25px'}}>Summary</h3>       
                <Col lg={6} style={{marginTop: '60px'}}>
                <Form className="orderform" >
                    <Form.Group controlId="formBasicEmail" className="form_group">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="form_group">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="form_group">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="form_group">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="form_group">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
                </Col>
                <Col lg={6}  style={{marginTop: '60px'}}>
                <Form className="orderform">
                    <Form.Group controlId="formBasicEmail" className="form_group">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="form_group">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="form_group">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="form_group">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="form_group">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    </Form>
                </Col>
                <Button variant="primary" type="submit" style={{marginBottom: '30px', }}>
                        Submit
                </Button>
                <Button variant="primary" type="submit" style={{marginBottom: '30px', }}>
                        Submit
                </Button>
                </Row>
                </div>
                
            </div>
        )
    }
}

export default OrderSummary
