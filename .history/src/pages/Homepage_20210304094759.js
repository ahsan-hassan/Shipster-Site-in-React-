import React, { Component } from 'react';
import Slider from '../components/Slider';
import Card_section from '../components/Card_section';
import Footer from '../components/Footer';

function HomePage(){
    return (
        <div>
            <Slider /><br></br>
            <Card_section />
            <Footer />
            <Demo1 showHideDemo1={this.state.showHideDemo1} />
        </div>
        
    )
}

export default HomePage;