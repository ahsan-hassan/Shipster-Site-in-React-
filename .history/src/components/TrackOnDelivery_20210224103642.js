import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap'

export class TrackOnDelivery extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '22rem' , backgroundColor:'#0660A5' , color:'white' }}>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    {this.props.description}
                    
                    </Card.Text>
                    <Button style={{backgroundColor:'white' , color:'#0660A5' }}>More Details</Button>
                </Card.Body>
                </Card>
            </div>
        )
    }
}

export default TrackOnDelivery
