import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import TrackOnDelivery from '../components/TrackOnDelivery'

export class Track_page extends Component {


    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('api/v1/myorder')
            .then(res => res.json())
            .then(json => {
                this.setState({
                isLoaded: true,
                items: json,
                })
           });
    }
      render() {
          var { isLoaded , items } = this.state;
          if(!isLoaded) {
              return <div>Loading...</div>;
          }

          else{

        return (
            <div>
               <ul>
                   {items.map(item => (
                       <li>
                        {item._id} | {item.pickUpContact} | {item.pickUpName}
                       </li>
                   ))};
               </ul>
            </div>
                

  
        );
    }
      }
}

export default Track_page   
                             /* <h3 style={{display: 'flex' , justifyContent:'center' ,marginTop: '20px'}}>Order History</h3>
<Row>
<Col lg={4}  md={6} sm={12} className="OrderDetail" >
        <TrackOnDelivery  title="Order ID:" description={<p>Placed on: 11th December, 2020 23:11:27<br></br><hr  style={{height:'1px',backgroundColor: 'white'}}></hr><p>Aqib Sheikh</p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>} />
    </Col>
    
    <Col lg={4}  md={6} sm={12} className="OrderDetail" >
        <TrackOnDelivery  title="Order ID:" description={<p>Placed on: 11th December, 2020 23:11:27<br></br><hr  style={{height:'1px',backgroundColor: 'white'}}></hr><p>Aqib Sheikh</p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>} />
    </Col>
    <Col lg={4}  md={6} sm={12} className="OrderDetail" >
        <TrackOnDelivery  title="Order ID:" description={<p>Placed on: 11th December, 2020 23:11:27<br></br><hr  style={{height:'1px',backgroundColor: 'white'}}></hr><p>Aqib Sheikh</p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>} />
    </Col>
</Row> */