import React, { Component } from 'react';
import Slider from '../components/Slider';
import Card_section from '../components/Card_section';
import Footer from '../components/Footer';
import Hooks from '../components/Hooks'


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

import React, { Component } from 'react'

export class Homepage extends Component {
    render() {
        return (
            <div>
                <p>This is hook example</p>
            </div>
        )
    }
}

export default Homepage
