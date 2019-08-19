import React, { memo, useEffect } from 'react';
import { CoordsSetter } from './components/coordsSetter'
import { ListOfCoords } from './components/listOfCoords';
import { Map } from './components/map';
import { connect } from 'react-redux';
import { ApiInitializer } from './additionalApi';

const App = memo(({ dispatch }) => {

  useEffect(() => {
    const apiInitializer = new ApiInitializer(dispatch);
    apiInitializer.initYMaps();
  }, [dispatch]);

  return (
    <div>
      <CoordsSetter />
      <ListOfCoords />
      <Map />
    </div>
  );
});

export default connect()(App);
