import GeoObject from './geoObjectMock';

class Ymaps {
    geocode(name) {
        return new Promise((resolve, reject) => {
            let result = {};
            result.geoObjects = new Map();
            result.geoObjects.set(0, new GeoObject(name, 0, 0));
            resolve(result);
        });
    }
}

export default Ymaps;