import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import { BsPeopleCircle } from 'react-icons/bs';


export class Card2 extends Component {
    render() {
        return (
            <div>
                
                <Card style={{ width: '25rem' , height: '14rem' , borderRadius: '25px' , border: '2px solid', alignItems: 'center', boxShadow:'2px'}}>
                <Card.Body style={{ display:'flex',flexDirection: 'column' , alignItems: 'center'}} >
                <BsPeopleCircle/>
                    <Card.Title>Drive App</Card.Title>
                    <Card.Text style={{fontSize:'13px'}}>
                        Driver App to Get real-time updates from your operation team, Navigate your destination turn by turn, communicate with the customer and get proof of delivery. <br></br>
                        Driver App to Get real-time updates from your operation team, Navigate your destination turn by turn, communicate with the customer and get proof of delivery.
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Card2
