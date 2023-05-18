import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap'

export class Cards extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' , height: '450px'}}>
                <Card.Body>
                    <Card.Title>Features</Card.Title>
                    <Card.Title>Learn The Features of Shipster</Card.Title>
                    <Card.Text>
                        Shipster provides you with a complete delivery management software solutions for pickup and delivery. Prioritize and assign your drivers with precision and efficiency.<br></br>
                        Shipster provides you with a complete delivery management software solutions for pickup and delivery. Prioritize and assign your drivers with precision and efficiency.<br></br><br></br>
                        Shipster provides you with a complete delivery management software solutions for pickup and delivery. Prioritize and assign your drivers with precision and efficiency.
                        
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Cards
