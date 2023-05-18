import React, { Component } from 'react';
import Slider from '../components/Slider';
import Card_section from '../components/Card_section';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';

function HomePage(){
    return (
        <div>
            <NavBar />
            <Slider /><br></br>
            <Card_section />
            <Footer />
        </div>
        
    )
}

export default HomePage;