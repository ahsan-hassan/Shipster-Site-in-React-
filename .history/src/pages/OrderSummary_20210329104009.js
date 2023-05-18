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
        if(!isLoaded) {
            return <div>Loading...</div>;
        }

        else{

        return (
            <div>
                <div className="ordersummary">
                <Row className="summary_row">
                <h3 style={{textAlign:'center' , width:'100%', marginTop:'25px'}}>Summary</h3>
                {items.map(item => (
                <Col lg={6} style={{marginTop: '60px'}}>
                <label>PickUp Location</label>
                <input>{item._pickUpContact}</input>
                <li style={{marginLeft: '15px'}}><h5>ID:  {item._id}</h5></li> 
                <li style={{marginLeft: '15px'}}>PickUp Contact:  {item.pickUpContact}</li> 
                <li style={{marginLeft: '15px'}}>PickUp Name:  {item.pickUpName} </li><br></br>
                <Button href="/pages/OrderSummary" style={{backgroundColor:'white' , color:'#0660A5', width: '145px', marginLeft: '90px'}} >More Details</Button>
                </Col> 
                ))}
                </Row>
                </div>
                
            </div>
        )
    }
}
}

export default OrderSummary