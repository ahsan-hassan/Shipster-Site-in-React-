import React, { Component } from 'react';
import {Container, Button , Row , Col } from 'react-bootstrap';
import group2 from './group2.jpg';
import Group from './Group.jpg';



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
                    <Row className="section1">
                    <img src={group2} className="group2img" />
                        <Col className="section1_text" lg={7} >
                        <h3>DELIVERY OR PICKUP ANYTHING IN<br></br>ISLAMABAD/RAWALPINDI</h3><br></br>
                            <Button className="gn_btn" href="#">General Delivery</Button><br></br><br></br>
                            <p>Driver App to Get real-time updates from your operation<br></br>team, Navigate your destination turn by tun, communicate<br></br>with the customer and get the proof of delivery</p>
                        </Col>
                        <Col className="phnimg" lg={2} >
                            <img src={Group} className="phoneimg" />
                        </Col>
                    </Row>   
            </div>
        )
    }
}

export default Slider
