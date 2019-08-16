import { CONSTANTS } from '../actions';

const initialState = [];

const coordsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_COORD: {
            const { id, name, lat, lng } = action.payload;
            const newCoord = {
                name,
                lat,
                lng,
                id
            }
            return [...state, newCoord];
        }
        case CONSTANTS.DELETE_COORD: {
            const { id } = action.payload;
            const newState = state;
            const actionIndex = newState.splice(newState.findIndex(x => x.id === id), 1);
            return [...newState.slice(0, actionIndex), ...newState.slice(actionIndex + 1)];
        }
        case CONSTANTS.DND_COORD: {
            const { startIndex, endIndex } = action.payload;
            const newState = state;
            const [removed] = newState.splice(startIndex, 1);
            newState.splice(endIndex, 0, removed);
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default coordsReducer;