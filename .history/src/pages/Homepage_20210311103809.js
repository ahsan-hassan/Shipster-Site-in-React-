import React, { Component } from 'react';
import Slider from '../components/Slider';
import Card_section from '../components/Card_section';
import Footer from '../components/Footer';
import Demo4 from '../components/Demo4';
import Demo5 from '../components/Demo5';


function HomePage(){
    return (
        <div>
            <Slider /><br></br>
            <Card_section />
            <Hooks />
            <Footer />
        </div>
        
    )
}

export default HomePage;