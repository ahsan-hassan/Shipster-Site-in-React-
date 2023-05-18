import React, { Component } from 'react';
import {Form, Button , Col , Row } from 'react-bootstrap';
import Rangeslider from '../components/Rangeslider';
import styled from 'styled-components';

const Styles= styled.div;

export class OrderSummary extends Component {
    render() {
        return (
            <div>
                <div className="ordersummary">
                <Row className="summary_row">
                <h3 style={{textAlign:'center' , width:'100%', marginTop:'25px'}}>Summary</h3>       
                <Col lg={6} style={{marginTop: '60px'}}>
                <Form className="orderform" >
                    <Form.Group controlId="formBasicAddress" className="form_group">
                        <Form.Label>PickUp Location</Form.Label>
                        <Form.Control type="address"  />
                    </Form.Group>

                    <Form.Group controlId="formBasicAddress" className="form_group">
                        <Form.Label>Dropoff Location</Form.Label>
                        <Form.Control type="address" />
                    </Form.Group>

                    <Form.Group controlId="formBasicName" className="form_group">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control type="name"  />
                    </Form.Group>
                    

                    <Form.Group controlId="formBasicCheckbox" className="form_group">
                        <Form.Check type="checkbox" label="Fragile" />
                        <Form.Text>(check if it requires special care)</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicRange" className="form_group">
                    <Form.Label>Estimated Price</Form.Label>
                    <Rangeslider />
                    </Form.Group>
                    
                </Form>
                </Col>
                <Col lg={6}  style={{marginTop: '28px'}}>
                <Form className="orderform">

                    <Form.Group controlId="formBasicAddress" className="form_group">
                    <Form.Text className="location">
                        Pick up Location
                    </Form.Text>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="address"  />
                    </Form.Group>

                    <Form.Group controlId="formBasicNumber" className="form_group">
                        <Form.Label>Contact No</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>              
                                  
                    <Form.Group controlId="formBasicEmail" className="form_group">
                    <Form.Text className="location">
                        Dropoff Location
                    </Form.Text>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicNumber" className="form_group">
                        <Form.Label>Contact No</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox" className="form_group">
                    <Form.Label>Who Will Pay?</Form.Label>
                    <Form.Group style={{display:'flex', justifyContent:'space-evenly'}}>
                    <Form.Check type="checkbox" value="1" label="PickUp" />
                    <Form.Check type="checkbox" value="1" label="Dropoff" />
                    </Form.Group>
                    </Form.Group>
                    </Form>
                </Col>
                <div>
                <Button variant="primary" type="submit" style={{backgroundColor: 'white', color: '#0660A5', marginBottom: '30px',marginRight: '30px' , width: '130px' }}>
                        Edit
                </Button>
                <Button variant="primary" type="submit" style={{backgroundColor: 'white', color: '#0660A5', marginBottom: '30px', width: '130px'}}>
                        Confirm
                </Button>
                </div>
                </Row>
                </div>
                
            </div>
        )
    }
}

export default OrderSummary
