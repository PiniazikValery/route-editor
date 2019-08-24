import { addCoord, editCoord, deleteCoord, dndCoord } from '../../actions';
import { testStore } from '../../store';

describe('Coords actions', () => {
    test('Test add coord action', () => {
        const store = testStore();
        store.dispatch(addCoord('testCoord', 1, 1));
        const actualResult = store.getState().coords.present.present[0];
        delete actualResult.id;
        expect(actualResult).toMatchObject({
            name: 'testCoord',
            lat: 1,
            lng: 1
        });
    });

    test('Test edit coord action', () => {
        const store = testStore();
        store.dispatch(addCoord('testCoord', 1, 1));
        const coordId = store.getState().coords.present.present[0].id;
        store.dispatch(editCoord(coordId, 'editedTestCoord', 1, 1));
        const actualResult = store.getState().coords.present.present[0];
        delete actualResult.id;
        expect(actualResult).toMatchObject({
            name: 'editedTestCoord',
            lat: 1,
            lng: 1
        });
    });

    test('Test delete coord action', () => {
        const store = testStore();
        store.dispatch(addCoord('testCoord', 1, 1));
        const coordId = store.getState().coords.present.present[0].id;
        store.dispatch(deleteCoord(coordId));
        const coordsArrayLength = store.getState().coords.present.present.length;
        expect(coordsArrayLength).toBe(0);
    });

    test('Test dnd coord action', () => {
        const store = testStore();
        store.dispatch(addCoord('1', 1, 1));
        store.dispatch(addCoord('2', 1, 1));
        const firstCoordId = store.getState().coords.present.present[0].id;
        store.dispatch(dndCoord(0, 1));
        const actualSecondCoordId = store.getState().coords.present.present[1].id;
        expect(actualSecondCoordId).toBe(firstCoordId);
    });
});