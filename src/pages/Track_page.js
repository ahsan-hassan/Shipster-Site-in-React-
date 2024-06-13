
import {Button, Row ,Col} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

const TrackPage = () => {
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('https://dummyapi.online/api/movies')
            .then(res => res.json())
            .then(json => {
                setItems(json);
                setIsLoaded(true);
            });
    }, []);

    if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h3 style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>Order History</h3>
                <div className='track_page'>
                    <ul className="track_page_ul">
                        <Row>
                            {items.map(item => (
                                <Col sm={12} lg={4} md={6} key={item.id}>
                                    <li className='track_page_li'>
                                        <li style={{ marginLeft: '15px' }}><h5>ID: {item.id}</h5></li>
                                        <li style={{ marginLeft: '15px' }}>Movie: {item.movie}</li>
                                        <li style={{ marginLeft: '15px' }}>Rating: {item.rating}</li>
                                        <Button href="/pages/OrderSummary" style={{ backgroundColor: 'white', color: '#0660A5', width: '145px', marginLeft: '90px' }}>More Details</Button>
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

export default TrackPage;






 