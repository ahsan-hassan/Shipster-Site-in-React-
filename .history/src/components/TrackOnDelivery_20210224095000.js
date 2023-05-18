import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap'

export class TrackOnDelivery extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' , backgroundColor:'#0660A5' }}>
                <Card.Body>
                    <Card.Title>Order ID:</Card.Title>
                    <Card.Text>
                    Placed on: 11th December, 2020 23:11:27
                    <hr style={{color:'white', height:'1px' , backgroundColor:'white'}}></hr>

                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </div>
        )
    }
}

export default TrackOnDelivery
