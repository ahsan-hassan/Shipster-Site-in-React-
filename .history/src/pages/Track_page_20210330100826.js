import React, { Component } from 'react';
import {Button, Row ,Col} from 'react-bootstrap';
import { Link, Router } from 'react-router-dom';
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
              <div className='track_page'>
                  
                   <ul className="track_page_ul" >
                   <Row> 
                   {items.map(item => (
                      <Col sm={12} lg={4} md={6}><li className='track_page_li'>  
                           <li style={{marginLeft: '15px'}}><h5>ID:  {item._id}</h5></li> 
                           <li style={{marginLeft: '15px'}}>PickUp Contact:  {item.pickUpContact}</li> 
                           <li style={{marginLeft: '15px'}}>PickUp Name:  {item.pickUpName} </li><br></br>
                           <Link to={{
  pathname: '/pages/OrderSummary/'+ {item._id},
  
}}>Tyler McGinnis</Link>
                           {/* <Button href="/pages/OrderSummary" style={{backgroundColor:'white' , color:'#0660A5', width: '145px', marginLeft: '90px'}} >More Details</Button> */}
                       </li>
                       </Col> 
                   ))}
              
               </Row>
               </ul>
               </div> 

            </div>
                

  
        );
    }
      }
}

export default Track_page   





               {/* <Row>
                    <Col lg={4}  md={6} sm={12} className="OrderDetail" >
                        <TrackOnDelivery  title="Order ID:" description={<p>Placed on: 11th December, 2020 23:11:27<br></br><hr  style={{height:'1px',backgroundColor: 'white'}}></hr><p>Aqib Sheikh</p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>} />
                    </Col>

                    <Col lg={4}  md={6} sm={12} className="OrderDetail" >
                        <TrackOnDelivery  title="Order ID:" description={<p>Placed on: 11th December, 2020 23:11:27<br></br><hr  style={{height:'1px',backgroundColor: 'white'}}></hr><p>Aqib Sheikh</p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>} />
                    </Col><style >Display-style-none</style>

                    <Col lg={4}  md={6} sm={12} className="OrderDetail" >
                        <TrackOnDelivery  title="Order ID:" description={<p>Placed on: 11th December, 2020 23:11:27<br></br><hr  style={{height:'1px',backgroundColor: 'white'}}></hr><p>Aqib Sheikh</p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>} />
                    </Col>
                </Row> */}