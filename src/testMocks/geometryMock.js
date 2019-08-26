class Geometry {
    constructor(lng, lat) {
        this.lng = lng;
        this.lat = lat;
    }

    getCoordinates() {
        return [this.lng, this.lat];
    }
}

export default Geometry;