import { initYMapsApi } from '../actions';
import ymaps from 'ymaps';

class ApiInitializer {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }

    initYMaps() {
        ymaps
            .load('https://api-maps.yandex.ru/2.1/?apikey=ec0ad35b-0d65-48bb-aff9-8343ba56b035&lang=en_US')
            .then(maps => this.dispatch(initYMapsApi(maps)))
            .catch(error => console.log('Failed to load Yandex Maps', error));
    }
}

export default ApiInitializer;