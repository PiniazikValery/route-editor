import React, { memo, useEffect } from 'react';
import { RouteEditor } from './components/routeEditor';
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
      <RouteEditor />
      <Map />
    </div>
  );
});

export default connect()(App);
