import React, { Component } from 'react';
import image from './illustration.jpg'

export class illustration extends Component {
    render() {
        return (
            <div>
                <img src={image} />
            </div>
        )
    }
}

export default illustration
