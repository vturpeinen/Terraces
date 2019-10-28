import React from 'react';
import './App.css';
import './SimpleMap';
import SimpleMap from './SimpleMap';
import SimplePlace from './SimplePlace';
import { tsPropertySignature } from '@babel/types';

let greatPlaceCoords = [
  {lat1: 60.186854, lng1: 24.95183},
  //{lat2: 60.186841, lng2: 24.65183},
];

function App() {
  return (
    
    <div className="App">
      <SimpleMap restaurants={greatPlaceCoords} />
    </div>
   
  );
}

export default App;
