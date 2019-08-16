import React from 'react';
import { CoordsSetter } from './components/coordsSetter'
import { ListOfCoords } from './components/listOfCoords';
import { Map } from './components/map';

function App() {
  return (
    <div>
      <CoordsSetter />
      <ListOfCoords />
      <Map />
    </div>
  );
}

export default App;
