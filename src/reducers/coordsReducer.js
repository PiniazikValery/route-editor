import { CONSTANTS } from '../actions';
import undoable, { distinctState } from 'redux-undo';

const initialState = {
    present: [],
    lastAction: undefined
};

const coordsReducer = (state = initialState, action) => {
    const { present } = state;
    switch (action.type) {
        case CONSTANTS.ADD_COORD: {
            const { id, name, lat, lng } = action.payload;
            const newCoord = {
                name,
                lat,
                lng,
                id
            }
            const newCoords = [...present, newCoord];
            const newLastAction = CONSTANTS.ADD_COORD;
            return {
                present: newCoords,
                lastAction: newLastAction
            };
        }
        case CONSTANTS.DELETE_COORD: {
            const { id } = action.payload;
            let newCoords = [...present];
            const actionIndex = newCoords.splice(newCoords.findIndex(x => x.id === id), 1);
            newCoords = [...newCoords.slice(0, actionIndex), ...newCoords.slice(actionIndex + 1)];
            const newLastAction = CONSTANTS.DELETE_COORD;
            return {
                present: newCoords,
                lastAction: newLastAction
            };
        }
        case CONSTANTS.DND_COORD: {
            const { startIndex, endIndex } = action.payload;
            if (startIndex !== endIndex) {
                const newCoords = [...present];
                const [removed] = newCoords.splice(startIndex, 1);
                newCoords.splice(endIndex, 0, removed);
                const newLastAction = CONSTANTS.DND_COORD;
                return {
                    present: newCoords,
                    lastAction: newLastAction
                };
            } else {
                return state;
            }
        }
        case CONSTANTS.EDIT_COORD: {
            const { id, name, lat, lng } = action.payload;
            const newCoords = [...present];
            const newLastAction = CONSTANTS.EDIT_COORD;
            return {
                present: newCoords.map(coord => coord.id === id ? { ...coord, name: name, lat: lat, lng: lng } : coord),
                lastAction: newLastAction

            }
        }
        default: {
            return state;
        }
    }
}

const undoableCoords = undoable(coordsReducer, {
    filter: distinctState()
})

export default undoableCoords;