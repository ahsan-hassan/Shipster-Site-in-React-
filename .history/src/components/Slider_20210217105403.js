import React, { Component } from 'react';
import {Container, Button , Row , Col} from 'react-bootstrap';
import group2 from './group2.jpg';
import group1 from './group1.jpg';



export class Slider extends Component {
    render() {
        return (
          /*  <div className="section1">
                   <img src={group2} className="group2img" />
                   <div className="section3">
                        <div className="section1_text">
                            <h3>DELIVERY OR PICKUP ANYTHING IN<br></br>ISLAMABAD/RAWALPINDI</h3>
                            <Button className="gn_btn" href="#">General Delivery</Button><br></br><br></br><br></br>
                            <p>Driver App to Get real-time updates from your operation<br></br>team, Navigate your destination turn by tun, communicate<br></br>with the customer and get the proof of delivery</p>
                            <div>
                            <img src={group1} className="group1img" />
                            </div>
                        </div>
                    </div>
            </div>*/

            <div>
                    <Row>
                    <Col sm={12} md={12}>
                    <img src={group2} className="group2img" />
                    </Col>
                    </Row>   
            </div>
        )
    }
}

export default Slider
