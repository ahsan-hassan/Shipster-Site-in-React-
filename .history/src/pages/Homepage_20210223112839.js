import React, { Component } from 'react';
import Slider from '../components/Slider';
import Card_section from '../components/Card_section';
import Footer from '../components/Footer';
import { Navbar } from 'react-bootstrap';

function HomePage(){
    return (
        <div>
            <Navbar />
            <Slider /><br></br>
            <Card_section />
            <Footer />
        </div>
        
    )
}

export default HomePage;