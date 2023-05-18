import React, { Component } from 'react'

export class Card2 extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '21rem' , height: '36rem' , borderRadius: '25px' , border: '2px solid' , alignContent: 'center'}}>
                <Card.Body>
                    <Card.Title>Drive App</Card.Title>
                    <Card.Text>
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

export default Card2
