import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import Demo5 from './Demo5'

export class Demo6 extends Component {
    render() {
        document.getElementById("abc").style.display ="none"; 
        return (
            <div>
               <Button onClick={<Demo5/>}>Back</Button>
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
