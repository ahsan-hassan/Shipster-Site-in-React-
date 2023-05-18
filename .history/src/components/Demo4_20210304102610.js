import React, { Component } from "react";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";
import Demo3 from "./Demo3";

class Demo4 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideDemo1: false,
      showHideDemo2: false,
      showHideDemo3: false
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
    const { showHideDemo1, showHideDemo2, showHideDemo3 } = this.state;
    return (
      <div>
        {showHideDemo1 && <Demo1 />}

        {showHideDemo1 && <Demo1 />}
        <hr />
        {showHideDemo2 && <Demo2 />}
        <hr />
        {showHideDemo3 && <Demo3 />}
        <hr />
        <div>
          <button onClick={() => this.showComponent("showHideDemo1")}>
            Click to hide Demo1 component
          </button>
          <button onClick={() => this.showComponent("showHideDemo2")}>
            Click to hide Demo2 component
          </button>
          <button onClick={() => this.showComponent("showHideDemo3")}>
            Click to hide Demo3 component
          </button>
        </div>
      </div>
    );
  }
}

export default Demo4


// import React, { Component } from "react";
// import { Link } from 'react-router-dom';

// class Demo4 extends Component {
//   constructor() {
//     super();
//     this.state = {
//       showHideFName: true,
//       showHideLName: true
//     };
//     this.hideComponent = this.hideComponent.bind(this);
//   }

//   hideComponent(name) {
//     switch (name) {
//       case "showHideFName":
//         this.setState({ showHideFName: !this.state.showHideFName });
//         break;
//       case "showHideLName":
//         this.setState({ showHideLName: !this.state.showHideLName });
//         break;
//       default:
//     }
//   }

//   render() {
//     const { showHideFName, showHideLName } = this.state;
//     return (
//       <div>
//         <table>
//           {showHideFName && (
//             <tr>
//               <Link>
//               <td>First Name</td>
//               <td>First Name</td>
//               <td>First Name</td>
//               <td>First Name</td>
//               </Link>
//             </tr>
//           )}
//           {showHideLName && (
//             <tr>
//               <td>Last Name :</td>
//               <td>
//                 <input type="text" id="lName" />
//               </td>
//             </tr>
//           )}
//           {showHideFName && showHideLName && (
//             <tr>
//               <td>
//                 <button>Submit</button>
//               </td>
//             </tr>
//           )}
//           <tr>
//             <td>
//               <button onClick={() => this.hideComponent("showHideFName")}>
//                 Hide First Name
//               </button>
//             </td>
//             <td>
//               <button onClick={() => this.hideComponent("showHideLName")}>
//                 Hide Last Name
//               </button>
//             </td>
//           </tr>
//         </table>
//       </div>
//     );
//   }
// }

// export default Demo4;