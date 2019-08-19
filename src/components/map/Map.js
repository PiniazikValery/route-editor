import React, { useEffect, useState, memo } from 'react';
import { YMap } from './StyledComps';
import { connect } from 'react-redux';
import { editCoord, deleteCoord } from '../../actions';

const Map = memo(({ coords, yMaps, dispatch }) => {

    const [map, setMap] = useState(null);

    useEffect(() => {
        if (!map) {
            setMap(yMaps ?
                new yMaps.Map('map', {
                    center: [55.76, 37.64],
                    zoom: 7,
                    controls: []
                }) :
                null
            );
        }
    }, [yMaps, map]);

    const renderRoutes = (routes) => {
        if (routes.length > 1) {
            yMaps.route(toYandexRoutes(routes)).then(
                route => {
                    const points = route.getWayPoints();
                    for (let i = 0; i < points.getLength(); i++) {
                        yMaps.geocode(points.get(i).geometry.getCoordinates()).then(res => {
                            points.get(i).options.set({
                                balloonContentLayout: yMaps.templateLayoutFactory.createClass(
                                    `<span>${res.geoObjects.get(0).getAddressLine()}</span>`
                                )
                            });
                        });
                        points.get(i).events.add('dragend', (e) => onDragEndCoord(routes[i].id, e));
                    }
                    route.editor.start({ addViaPoints: false });
                    map.geoObjects.removeAll();
                    map.geoObjects.add(route);
                    var geocoder = yMaps.geocode(toYandexRoutes(routes)[routes.length - 1]);
                    geocoder.then(res => {
                        map.setCenter(
                            res.geoObjects.get(0).geometry.getCoordinates(),
                            7
                        );
                    });
                },

                error => {
                    dispatch(deleteCoord(routes[routes.length - 1].id));
                    alert('error: ' + error.message);
                }
            );
        } else {
            map.geoObjects.removeAll();
        }
    }

    const onDragEndCoord = (id, event) => {
        const newCoords = event.originalEvent.target.geometry.getCoordinates();
        yMaps.geocode(newCoords).then((res) => {
            const firstGeoObject = res.geoObjects.get(0);
            const name = firstGeoObject.getAddressLine();
            const resultCoords = firstGeoObject.geometry.getCoordinates();
            dispatch(editCoord(id, name, resultCoords[1], resultCoords[0]));
        });
    }

    const toYandexRoutes = (routes) => {
        const result = routes.map(route => [+route.lng, +route.lat]);
        return result;
    }

    return (
        <div>
            <YMap id="map" key="map" />
            {map ? renderRoutes(coords) : undefined}
        </div>
    );
});

const mapStateToProps = state => ({
    coords: state.coords,
    yMaps: state.yMaps
});

export default connect(mapStateToProps)(Map);