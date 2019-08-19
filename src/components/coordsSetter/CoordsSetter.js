import React, { useState, memo } from 'react';
import { connect } from "react-redux";
import { addCoord } from '../../actions';

const CoordsSetter = memo(({ dispatch, yMaps }) => {
    const [coordName, setCoordName] = useState('');
    const [lng, setLng] = useState('');
    const [lat, setLat] = useState('');

    const handleChangeCoordName = event => {
        setCoordName(event.target.value);
    }

    const handleChangeLng = event => {
        if (!isNaN(event.target.value)) {
            setLng(event.target.value);
        }
    }

    const handleChangeLat = event => {
        if (!isNaN(event.target.value)) {
            setLat(event.target.value);
        }
    }

    const clearAllFields = () => {
        setCoordName('');
        setLat('');
        setLng('');
    }

    const onSubmit = async event => {
        event.preventDefault();
        clearAllFields();
        const { gcoordName, glat, glng, decodeError } = await geocodePlace(coordName, lat, lng);
        if (!decodeError) {
            dispatch(addCoord(gcoordName, glat, glng));
        }
    }

    const geocodePlace = async (coordName, lat, lng) => {
        const result = { gcoordName: coordName, glat: lat, glng: lng };
        const returnResult = res => {
            const firstGeoObject = res.geoObjects.get(0);
            if (firstGeoObject) {
                const name = firstGeoObject.getAddressLine();
                const resultCoords = firstGeoObject.geometry.getCoordinates();
                result.gcoordName = name;
                result.glat = resultCoords[1];
                result.glng = resultCoords[0];
            } else {
                result.decodeError = true;
            }
        }
        switch (true) {
            case (lat !== '' && lng !== ''): {
                await yMaps.geocode([lat, lng]).then(returnResult);
                break;
            }
            case coordName !== '': {
                await yMaps.geocode(coordName).then(returnResult);
                break;
            }
            default: {
                break;
            }
        }
        return result;
    }

    return (
        <form onSubmit={onSubmit}>
            <p>Имя координаты:</p>
            <input onChange={handleChangeCoordName} value={coordName} placeholder="Имя координаты" />
            <p>Долгота:</p>
            <input onChange={handleChangeLng} value={lng} placeholder="Долгота"></input>
            <p>Широта:</p>
            <input onChange={handleChangeLat} value={lat} placeholder="Широта"></input>
            <br />
            <br />
            <input type="submit" value="Добавить координату" />
        </form>
    );
});

const mapStateToProps = state => ({
    yMaps: state.yMaps
});

export default connect(mapStateToProps)(CoordsSetter);