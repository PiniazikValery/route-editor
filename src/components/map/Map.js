import React, { useEffect, useState } from 'react';
import { YMap } from './StyledComps';
import ymaps from 'ymaps';


const Map = () => {

    const [map, setMap] = useState(null);

    useEffect(() => {
        ymaps
            .load('https://api-maps.yandex.ru/2.1/?apikey=ec0ad35b-0d65-48bb-aff9-8343ba56b035&lang=en_US')
            .then(maps => initMap(maps))
            .catch(error => console.log('Failed to load Yandex Maps', error));
    }, []);

    const initMap = (maps) => {
        setMap(
            new maps.Map('map', {
                center: [55.76, 37.64],
                zoom: 7,
                controls: []
            })
        );
    }

    return (
        <YMap id="map" />
    );
}

export default Map;