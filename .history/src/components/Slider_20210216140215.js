import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import group2 from './group2.jpg'



export class Slider extends Component {
    render() {
        return (
            <div className="section1">
                   <img src={group2} className="group2img" />
            </div>
        )
    }
}

export default Slider
