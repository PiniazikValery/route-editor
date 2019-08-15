import React, { useState, memo } from 'react';
import { connect } from "react-redux";
import { addCoord } from '../../actions'

const CoordsSetter = memo(({ dispatch }) => {
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

    const onSubmit = event => {
        dispatch(addCoord(coordName, lat, lng));
        event.preventDefault();
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

export default connect()(CoordsSetter);