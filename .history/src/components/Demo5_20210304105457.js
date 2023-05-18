import React, { Component } from 'react';
import Demo6 from './Demo6'

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
        }
      }
    
      render() {
        const { showHideDemo6} = this.state;
        return (
            <div>
            <ul className="profile-ul">
                                <hr></hr>
                                    <li>
                                    {showHideDemo6 && <Demo6 />}
                                        <a href="#" onClick={() => this.showComponent("showHideDemo6")}>Profile</a>   
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
