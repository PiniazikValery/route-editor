import { CONSTANTS } from '../../actions';
import ymaps from 'ymaps';

const loadYMapsApi = () => ymaps.load('https://api-maps.yandex.ru/2.1/?apikey=ec0ad35b-0d65-48bb-aff9-8343ba56b035&lang=en_US');

export const setYMapsApi = (yMapsApi) => {
    return {
        type: CONSTANTS.INIT_YMAPS_API,
        payload: { yMapsApi }
    };
}

export const initYMapsApi = () => dispatch => loadYMapsApi()
    .then(maps => dispatch(setYMapsApi(maps)))
    .catch(error => console.log('Failed to load Yandex Maps', error));
