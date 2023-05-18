import React, { Component } from 'react'

export class Demo5 extends Component {
    constructor() {
        super();
        this.state = {
          name: "React",
          showHideDemo6: false,
        };
        this.showComponent = this.showComponent.bind(this);
      }
    render() {
        return (
            <div>
            <ul className="profile-ul">
                                <hr></hr>
                                    <li>
                                        <a href="#">Profile</a>   
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
