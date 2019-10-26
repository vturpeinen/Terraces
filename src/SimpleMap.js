import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import SimplePlace from './SimplePlace'
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 60.1699,
      lng: 24.9384, 
    },
    zoom: 11,
    greatPlaceCoords: {lat: 60.186854, lng: 24.951839}
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
          <SimplePlace {...this.props.greatPlaceCoords} text={'Roskapankki'} /* road circle */ />

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
