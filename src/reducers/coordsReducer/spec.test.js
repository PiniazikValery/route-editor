import coordsReducer from './index';
import { CONSTANTS } from '../../actions';

describe('Coords reducer', () => {
    it('Should return default state', () => {
        const newState = coordsReducer(undefined, {});
        expect(newState.present.present).toEqual([]);
    });

    it('Should return correct state if receiving add coord action', () => {
        const newCoord = {
            name: 'testName',
            lat: 1,
            lng: 1
        }
        const newState = coordsReducer(undefined, {
            type: CONSTANTS.ADD_COORD,
            payload: newCoord
        });
        expect(newState.present.present[0]).toEqual(newCoord);
    });

    it('Should return correct state if receiving edit coord action', () => {
        const newCoord = {
            name: 'testName',
            lat: 1,
            lng: 1
        }
        const addState = coordsReducer(undefined, {
            type: CONSTANTS.ADD_COORD,
            payload: newCoord
        });
        const editedCoord = {
            id: addState.present.present[0].id,
            name: 'testName2',
            lat: 2,
            lng: 2
        }
        const editState = coordsReducer(addState, {
            type: CONSTANTS.EDIT_COORD,
            payload: editedCoord
        });
        delete editedCoord.id;
        expect(editState.present.present[0]).toEqual(editedCoord);
    });

    it('Should return correct state if receiving delete coord action', () => {
        const newCoord = {
            name: 'testName',
            lat: 1,
            lng: 1
        }
        const addState = coordsReducer(undefined, {
            type: CONSTANTS.ADD_COORD,
            payload: newCoord
        });
        const coordId = addState.present.present[0].id;
        const deleteState = coordsReducer(addState, {
            type: CONSTANTS.DELETE_COORD,
            payload: { id: coordId }
        });
        expect(deleteState.present.present).toEqual([]);
    });

    it('Should return correct state if receiving dnd coord action', () => {
        const firstCoord = {
            name: '1',
            lat: 1,
            lng: 1
        }
        const secondCoord = {
            name: '2',
            lat: 2,
            lng: 2
        }
        const firstAddState = coordsReducer(undefined, {
            type: CONSTANTS.ADD_COORD,
            payload: firstCoord
        });
        const secondAddState = coordsReducer(firstAddState, {
            type: CONSTANTS.ADD_COORD,
            payload: secondCoord
        });
        const dndState = coordsReducer(secondAddState, {
            type: CONSTANTS.DND_COORD,
            payload: { startIndex: 0, endIndex: 1 }
        })
        expect(dndState.present.present[1]).toEqual(firstCoord);
    });
});