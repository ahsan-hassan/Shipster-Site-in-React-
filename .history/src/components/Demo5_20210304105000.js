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
      showComponent(name) {
        console.log(name);
        switch (name) {
          case "showHideDemo1":
            this.setState({ showHideDemo1: !this.state.showHideDemo1 });
            break;
          case "showHideDemo2":
            this.setState({ showHideDemo2: !this.state.showHideDemo2 });
            break;
          case "showHideDemo3":
            this.setState({ showHideDemo3: !this.state.showHideDemo3 });
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
