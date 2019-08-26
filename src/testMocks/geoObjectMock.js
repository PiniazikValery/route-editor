import Geometry from './geometryMock';

class GeoObject {
    constructor(name, lng, lat) {
        this.name = name;
        this.geometry = new Geometry(lng, lat);
    }

    getAddressLine() {
        return this.name;
    }
}

export default GeoObject;