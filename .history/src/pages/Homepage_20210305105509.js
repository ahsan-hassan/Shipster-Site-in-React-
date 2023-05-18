import React, { Component } from 'react';
import Slider from '../components/Slider';
import Card_section from '../components/Card_section';
import Footer from '../components/Footer';
import Demo4 from '../components/Demo4';
import Demo5 from '../components/Demo5';
import Menu from '../components/Menu'

function HomePage(){
    return (
        <div>
            <Slider /><br></br>
            <Card_section />
            <Footer />
            <Demo4 />
            <Demo5 />
            <Menu />
        </div>
        
    )
}

export default HomePage;