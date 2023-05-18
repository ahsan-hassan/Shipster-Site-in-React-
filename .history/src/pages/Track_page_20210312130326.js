import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import TrackOnDelivery from '../components/TrackOnDelivery'

export class Track_page extends Component {
    state = {
        loading: true,
        person: null
      };
    
      async componentDidMount() {
        const url = "https://myshipster.herokuapp.com/api/v1/myorder";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], loading: false });
      }
    
      render() {
        if (this.state.loading) {
          return <div>loading...</div>;
        }
    
        if (!this.state.person) {
          return <div>didn't get a person</div>;
        }
    
        return (
            <div>
                                <h3 style={{display: 'flex' , justifyContent:'center' ,marginTop: '20px'}}>Order History</h3>
                <Row>
                    <Col lg={4}  md={6} sm={12} className="OrderDetail" >
                    {this.state.person.name.pickUpName}
                        <TrackOnDelivery   />
                    </Col> 
                    
                    <Col lg={4}  md={6} sm={12} className="OrderDetail" >
                        <TrackOnDelivery  title="Order ID:" description={<p>Placed on: 11th December, 2020 23:11:27<br></br><hr  style={{height:'1px',backgroundColor: 'white'}}></hr><p>Aqib Sheikh</p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>} />
                    </Col>
                    <Col lg={4}  md={6} sm={12} className="OrderDetail" >
                        <TrackOnDelivery  title="Order ID:" description={<p>Placed on: 11th December, 2020 23:11:27<br></br><hr  style={{height:'1px',backgroundColor: 'white'}}></hr><p>Aqib Sheikh</p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>} />
                    </Col>
                </Row>

            </div>    
        )
    }
}

export default Track_page