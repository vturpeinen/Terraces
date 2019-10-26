import React from 'react';
import './App.css';
import './SimpleMap';
import SimpleMap from './SimpleMap';

let greatPlaceCoords = [
  {lat: 60.186854, lng: 24.95183},
  {lat: 60.186841, lng: 24.65183},
  {lat: 60.196854, lng: 24.95160},
];

function App() {
  return (
    <div className="App">
      <SimpleMap restaurants={greatPlaceCoords} />
    </div>
  );
}

export default App;
