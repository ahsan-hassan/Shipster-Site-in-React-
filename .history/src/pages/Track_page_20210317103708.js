import React, { Component } from 'react';
import {Button, Row ,Col} from 'react-bootstrap';
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

        fetch('https://cors-anywhere.herokuapp.com/https://myshipster.herokuapp.com/api/v1/myorder')
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
                <h3 style={{display: 'flex' , justifyContent:'center' ,marginTop: '20px'}}>Order History</h3>
               <ul className="track_page_ul" >
                   {items.map(item => (
                       <li>  
                           {item._id} <br></br> {item.pickUpContact} <br></br> {item.pickUpName} <br></br>
                           <Button style={{backgroundColor:'white' , color:'#0660A5', marginLeft: '90px'}}>More Details</Button>
                       </li>
                   ))}
               </ul>
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
</Row>
            </div>
                

  
        );
    }
      }
}

export default Track_page   


{/*  */}