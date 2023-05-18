import React, { Component } from 'react'

export class Demo6 extends Component {
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
        const { showHideDemo1, showHideDemo2, showHideDemo3 } = this.state;
        return (
            <div>
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
