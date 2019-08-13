import React, { useState } from 'react';

function CoordsSetter() {
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
        alert(`lng:${lng},lat:${lat}`)
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
            <button type="submit">Добавить координату</button>
        </form>
    );
}

export default CoordsSetter;