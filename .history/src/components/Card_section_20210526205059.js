import React, { Component } from 'react'
import Card2 from './Card2';
import Cards from './Cards';
import { Col, Row,} from 'react-bootstrap';
import image1 from './drivemap.jpg';
import image2 from './tracking.jpg';
import image3 from './heatmap.jpg';
import image4 from './dashboard.jpg'

export class Card_section extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col lg={4} md={12} sm={12}>
                    <Cards />
                    </Col>    
                
                    <Col lg={4}  md={6} sm={12}>
                    <Card2 image={image1} title="Drive App" description={<p>Drive App to Get real-time updates from operation team, Navigate your destination turn by turn, Communicate with the Customer and get proof of the delivery. <br></br> Drive App to Get real-time updates from operation team, Navigate your destination turn by turn, Communicate with the Customer and get proof of the delivery.</p>} /><br></br>
                    <Card2  image={image3} title="Heat Map" description={<p>Drive App to Get real-time updates from operation team, Navigate your destination turn by turn, Communicate with the Customer and get proof of the delivery. <br></br> Drive App to Get real-time updates from operation team, Navigate your destination turn by turn, Communicate with the Customer and get proof of the delivery.</p>} />
                    </Col>
                    
                    <Col lg={4}  md={6} sm={12}>
                    <Card2  image={image4} title="Tracking" description={<p>Drive App to Get real-time updates from operation team, Navigate your destination turn by turn, Communicate with the Customer and get proof of the delivery. <br></br> Drive App to Get real-time updates from operation team, Navigate your destination turn by turn, Communicate with the Customer and get proof of the delivery.</p>} /><br></br>
                    <Card2  image={image2} title="Dashboard" description={<p>Drive App to Get real-time updates from operation team, Navigate your destination turn by turn, Communicate with the Customer and get proof of the delivery. <br></br> Drive App to Get real-time updates from operation team, Navigate your destination turn by turn, Communicate with the Customer and get proof of the delivery.</p>}  />
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Card_section
