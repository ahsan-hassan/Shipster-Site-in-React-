import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap'

export class Cards extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '25rem' , height: '32rem' , border: 'none' , alignContent: 'center', marginLeft: '20px'}}>
                <Card.Body>
                    <Card.Title style={{fontWeight:'bold'}}>Features</Card.Title>
                    <Card.Title style={{color:'#0660A5' ,fontWeight:'bold'}}>Learn The Features of Shipster</Card.Title>
                    <Card.Text style={{fontSize:'13px'}}>
                        Shipster provides you with a complete delivery management software solutions for pickup and delivery. Prioritize and assign your drivers with precision and efficiency.<br></br><br></br>
                        Shipster provides you with a complete delivery management software solutions for pickup and delivery. Prioritize and assign your drivers with precision and efficiency.<br></br><br></br>
                        Shipster provides you with a complete delivery management software solutions for pickup and delivery. Prioritize and assign your drivers with precision and efficiency.
                        
                    </Card.Text>
                    <Button className="cardbtn">Contact Us</Button>
                </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Cards
