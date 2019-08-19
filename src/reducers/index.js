import { combineReducers } from 'redux';
import coordsReducer from './coordsReducer';
import yMapsReducer from './yMapsReducer';

export default combineReducers({
    coords: coordsReducer,
    yMaps: yMapsReducer
});