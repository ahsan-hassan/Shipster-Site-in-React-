import React, { Component } from 'react'

export class TrackDelivery extends Component {
    render() {
        return (
            <div>
                <Router>           
                    <div>
                        <NavBar/>
                            <Switch>
                        <Route path="/pages/TrackDelivery">
                            <Track_page/>
                        </Route>
                        <Route path="/">
                        <Slider /><br></br>
                            <Card_section />
                            <Footer />
                        </Route>
                        </Switch>
                    </div>
                </Router> 
            </div>
        )
    }
}

export default TrackDelivery
