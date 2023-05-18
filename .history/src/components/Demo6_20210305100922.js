import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import { useHistory } from "react-router-dom";


export class Demo6 extends Component {
    render() {
        document.getElementById("abc").style.display ="none";
        constructor(props) 
            super(props);
            this.Demo5 = this.Demo5.bind(this);
        return ( 
            <div>
               <Button onClick={()=>this.Demo5}>Back</Button>
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
