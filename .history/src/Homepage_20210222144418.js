import React, { Component } from 'react'

export class Homepage extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Slider /><br></br>
                <Card_section />
                <Footer />
            </div>
        )
    }
}

export default Homepage
