import React, { Component } from "react";

class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return 
    <div>
        This is Demo1 component
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
    </div>;
  }
}

export default Demo1