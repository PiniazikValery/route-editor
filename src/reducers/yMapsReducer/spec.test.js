import yMapsReducer from './index';
import { CONSTANTS } from '../../actions';
import { YMapsMock } from '../../testMocks';

describe('Yandex maps reducer', () => {
    it('Should return default state', () => {
        const newState = yMapsReducer(undefined, {});
        expect(newState).toEqual(null);
    });

    it('Should return correct state if receiving init yandex maps api action', () => {
        const yMapsMock = new YMapsMock();
        const newState = yMapsReducer(undefined, {
            type: CONSTANTS.INIT_YMAPS_API,
            payload: { yMapsApi: yMapsMock }
        });
        expect(newState).not.toBeNull();
    });
});