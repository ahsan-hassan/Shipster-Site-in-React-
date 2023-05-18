import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class GeneralDelivery extends Component {
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
     
      render() {
        return (
          // Important! Always set the container height explicitly
          <div style={{ height: '50%', width: '50%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'My_Key'}}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="marker"
              />
            </GoogleMapReact>
          </div>
        );
      }
    }
export default GeneralDelivery
