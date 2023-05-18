import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import group2 from './group2.jpg'



export class Slider extends Component {
    render() {
        return (
            <div>
                <Container>
                    <img src={group2} />
                </Container>
            </div>
        )
    }
}

export default Slider
