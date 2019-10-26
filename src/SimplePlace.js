import React, { Component } from 'react';

const K_WIDTH = 40;
const K_HEIGHT = 40;

const simplePlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '5px solid #f44336',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};

class SimplePlace extends Component {
  static propTypes = {
    text: 'ok'
  };

  static defaultProps = {};

  render() {
    return (
       <div style={simplePlaceStyle}>
          {this.props.text}
       </div>
    );
  }
};

export default SimplePlace;
