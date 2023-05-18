import React, { Component } from 'react';
import Slider from '../components/Slider';
import Card_section from '../components/Card_section';
import Footer from '../components/Footer';
import Demo4 from '../components/demo4';

function HomePage(){
    return (
        <div>
            <Slider /><br></br>
            <Card_section />
            <Footer />
            <Demo4 />
        </div>
        
    )
}

export default HomePage;