import React, { Component } from 'react';
import  SimplePlace from './SimplePlace';

class SimplePlaceList extends Component {
  render() {
    const places = this.props.places.map((item) =>
      <SimplePlace lat={item.lat} lng={item.lng} text={'Toimi SAATANA'} /* road circle */ />
    );
    return (
      <div>
        {places}
      </div>
    );
  }
};

export default SimplePlaceList;
