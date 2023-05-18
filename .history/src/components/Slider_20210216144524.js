import React, { Component } from 'react';
import {Container, Button} from 'react-bootstrap';
import group2 from './group2.jpg'



export class Slider extends Component {
    render() {
        return (
            <div className="section1">
                   <div className="group2img">
                       
                   </div>
                   <div className="section1_text">
                        <h3>Delivery or Pickup Anything in Islamabad/Rawalpindi</h3>
                        <Button className="gn_btn"><a href="#">General Delivery</a></Button>
                    </div>
            </div>
        )
    }
}

export default Slider
