import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';




export class Card2 extends Component {

    render() {
        return (
            <div>
                
                <Card style={{ width: '25rem' , marginleft: '15px', height: '17rem' , borderRadius: '15px' , alignItems: 'center', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <Card.Body style={{ display:'flex',flexDirection: 'column' , alignItems: 'center' , textAlign: 'center'}} >
                    
                    <img src={this.props.image} style={{width:'50px'}}/>
                    {this.props.icon}
                    <Card.Title style={{color:'#0660A5' , fontWeight: 'bold', marginTop:'10px'}}>{this.props.title}</Card.Title>
                    <Card.Text style={{fontSize:'11px'}}>
                    {this.props.description}
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Card2
