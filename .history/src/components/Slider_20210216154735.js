import React, { Component } from 'react';
import {Container, Button} from 'react-bootstrap';
import group2 from './group2.jpg'



export class Slider extends Component {
    render() {
        return (
            <div className="section1">
                   <img src={group2} className="group2img" />
                   <div className="section1_text">
                        <h3>DELIVERY OR PICKUP ANYTHING IN<br></br>ISLAMABAD/RAWALPINDI</h3>
                        <Button className="gn_btn"><a href="#">General Delivery</a></Button>
                        <p>Driver App to Get real-time updates from your operation<br></br>team, Navigate your destination turn by tun, communicate<br></br>with the customer and get the proof of delivery</p>
                    </div>
            </div>
        )
    }
}

export default Slider
