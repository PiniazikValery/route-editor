import { CONSTANTS } from '../../actions'
import uuid from 'uuidv4';

export const addCoord = (name, lat, lng) => {
    const id = uuid();
    return {
        type: CONSTANTS.ADD_COORD,
        payload: { id, name, lat, lng }
    };
}

export const deleteCoord = (id) => {
    return {
        type: CONSTANTS.DELETE_COORD,
        payload: { id }
    };
}

export const dndCoord = (startIndex, endIndex) => {
    return {
        type: CONSTANTS.DND_COORD,
        payload: { startIndex, endIndex }
    };
}