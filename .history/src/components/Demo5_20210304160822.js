import React, { Component } from 'react';
import Demo6 from './Demo6';
import {Button} from 'react-bootstrap';
import Demo1 from './Demo1'

export class Demo5 extends Component {
    constructor() {
        super();
        this.state = {
          name: "React",
          showHideDemo6: false,
        };
        this.showComponent = this.showComponent.bind(this);
      }
      showComponent(name) {
        console.log(name);
        switch (name) {
          case "showHideDemo6":
            this.setState({ showHideDemo6: !this.state.showHideDemo6 });
            break;
            case "showHideDemo1":
                this.setState({ showHideDemo1: !this.state.showHideDemo1 });
                break;
        }
      }
    
      render() {
        const { showHideDemo1} = this.state;
        const { showHideDemo6} = this.state;
        return (

            <div>
                            <div>
                            {showHideDemo6 && <Demo1 />}
                {showHideDemo6 && <Demo6 />}
            </div>
            <ul id="abc" className="profile-ul">
                                <hr></hr>
                                    <li>
                                    <Button onClick={()=>this.showwComponent("showHideDemo1")}>Back</Button>
                                        <a onClick={() => this.showComponent("showHideDemo6")} >Profile</a> 
                                    </li>  
                                    <hr></hr>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <hr></hr>
                                    <li>
                                        <a href="#">Order List</a>
                                    </li>
                                    <hr></hr>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                    <hr></hr>
                                </ul>
                                </div>
        )
    }
}

export default Demo5
