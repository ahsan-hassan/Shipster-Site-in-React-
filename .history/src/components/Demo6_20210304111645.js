import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

export class Demo6 extends Component {
    render() {
        document.getElementById("abc").style.display ="none"; 
        return (
            <div>
               <Button>Back</Button>
            <ul>
                <li><a href="#">Name</a></li>
                <li><a href="#">Email</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
                
            </div>
             
        )
    }
}


export default Demo6