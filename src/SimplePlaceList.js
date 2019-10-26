import React, { Component } from 'react';
import SimplePlace from './SimplePlace';

class SimplePlaceContainer extends Component {
  render() {
    const places = this.props.places.map((item) =>
      <SimplePlace lat={item.foo} lng={item.foo} text={'Roskapankki'} /* road circle */ />
    );
    return (
      <div>
        {places}
      </div>
    );
  }
};

export default SimplePlaceContainer;
