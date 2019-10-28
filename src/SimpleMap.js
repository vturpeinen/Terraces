import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import SimplePlaceContainer from './SimplePlaceContainer'
import shouldPureComponentUpdate from 'react-pure-render/function';
import SimplePlace from './SimplePlace';

 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {

  static defaultProps = {
    center: {
      lat: 60.1699,
      lng: 24.9384, 
    },
    zoom: 11,
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
      
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: 'AIzaSyBSSBHAD6GLxKAEdUgm_6c1ev57Uz3pYns'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          >
          {this.props.restaurants.map(({ lat, lng }) => 
            <SimplePlace 
            lat={60.18680} 
            lng={24.951796} 
            text={'Roskapankki'} /* road circle */ />
          )}
          
          <AnyReactComponent
            lat={60.1699}
            lng={24.9384}
            text=""
            
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;
