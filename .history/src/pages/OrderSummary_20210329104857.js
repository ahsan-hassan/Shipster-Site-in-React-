import React, { Component } from 'react';
import {Form, Button , Col , Row } from 'react-bootstrap';
import Rangeslider from '../components/Rangeslider';
import styled from 'styled-components';

const Styles= styled.div;

export class OrderSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch('https://cors-anywhere.herokuapp.com/https://myshipster.herokuapp.com/api/v1/myorder')
            .then(res => res.json())
            .then(json => {
                this.setState({
                isLoaded: true,
                items: json,
                })
           });
    }
    render() {
        var { isLoaded , items } = this.state;
        return (
            <div>
                <div className="ordersummary">
                <Row className="summary_row">
                <h3 style={{textAlign:'center' , width:'100%', marginTop:'25px'}}>Summary</h3>
                {items.map(item => (
                <Col lg={6} style={{marginTop: '60px'}}>
                <label>PickUp Location</label>
                <li style={{marginLeft: '15px'}}>ID:  {item._id}</li> 
                <li style={{marginLeft: '15px'}}>ID:  {item._id}</li> 
                <li style={{marginLeft: '15px'}}>PickUp Contact:  {item.pickUpContact}</li> 
                <li style={{marginLeft: '15px'}}>PickUp Name:  {item.pickUpName} </li><br></br>
                </Col> 
                ))}
                </Row>
                </div>
                
            </div>
        )
    }
}

export default OrderSummary