import { testStore } from "../../store";
import { setYMapsApi } from '../../actions';
import { YMapsMock } from '../../testMocks';

describe('Yandex maps actions', () => {
    test('Test set YMaps API action', () => {
        const store = testStore();
        const yMapsMock = new YMapsMock();
        store.dispatch(setYMapsApi(yMapsMock));
        expect(store.getState().yMaps).not.toBeNull();
    });
});