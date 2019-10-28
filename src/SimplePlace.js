import React, { Component, propTypes} from 'react';
//import React, { Component, propTypes } from 'react/addOns';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, Map, GooleApiWrapper } from 'react-google-maps';


const K_WIDTH = 20;
const K_HEIGHT = 20;

const simplePlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  //position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,
  border: '5px solid #FFFFFF',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};

class SimplePlace extends Component {
  center = (75.1699, 24.94);
  markers = (1);

   propTypes = {
    text: 'ok',
  }; 

  //static defaultProps = {
    //center:(60.1699, 24.94)
  //};

  render() {
    
    return (
      <div>
      
       <div style={simplePlaceStyle}>
          {this.props.text}
       </div>
       </div>
    )
    };
  };


// SimplePlace.propTypes = {
//     //text: propTypes.string,
//     //markers: propTypes.number,
//     //center: propTypes,
// }
export default SimplePlace;
