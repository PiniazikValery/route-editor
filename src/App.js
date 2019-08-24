import React, { memo, useEffect } from 'react';
import { RouteEditor } from './components/routeEditor';
import { Map } from './components/map';
import { connect } from 'react-redux';
import { initYMapsApi } from './actions';

const App = memo(({ dispatch }) => {

  useEffect(() => {
    dispatch(initYMapsApi());
  }, [dispatch]);

  return (
    <div>
      <RouteEditor />
      <Map />
    </div>
  );
});

export default connect()(App);
