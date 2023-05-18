import React, { Component } from "react";

class Demo2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return <div>This is Demo2 component
                                            <ul>
                                        <li><a href="#">Name</a></li>
                                        <li><a href="#">Email</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
    </div>;
  }
}

export default Demo2