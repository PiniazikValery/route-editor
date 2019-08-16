import { combineReducers } from 'redux';
import coordsReducer from './coordsReducer';

export default combineReducers({
    coords: coordsReducer
});