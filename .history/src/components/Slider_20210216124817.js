import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import abc from './abc.jpg'



export class Slider extends Component {
    render() {
        return (
            <div>
                <Container>
                    <img {abc} />
                </Container>
            </div>
        )
    }
}

export default Slider
