import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import SimplePlaceContainer from './SimplePlaceContainer'
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {

  static defaultProps = {
    center: {
      lat: 60.1699,
      lng: 24.9384, 
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          //bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          >
          <SimplePlaceContainer places={this.props.restaurants} />
          <AnyReactComponent
            lat={60.1699}
            lng={24.9384}
            text="Helsinki"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;
