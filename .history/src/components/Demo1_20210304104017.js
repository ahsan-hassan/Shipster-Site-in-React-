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
        <ul>
                                        <li><a href="#">Name</a></li>
                                        <li><a href="#">Email</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
    </div>;
  }
}

export default Demo1