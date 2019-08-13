import { CONSTANTS } from '../actions';

const initialState = [];

const uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));

const coordsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_COORD: {
            const { name, lat, lng } = action.payload;
            const id = uuid();
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
            delete newState[id];
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default coordsReducer;