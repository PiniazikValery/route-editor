import React, { useState, memo } from 'react';
import { connect } from "react-redux";
import { addCoord } from '../../actions';
import { CoordSetterForm, NewNodeInput } from './StyledComps';

const CoordsSetter = memo(({ dispatch, yMaps }) => {
    const [coordName, setCoordName] = useState('');

    const handleChangeCoordName = event => {
        setCoordName(event.target.value);
    }

    const onSubmit = async event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setCoordName('');
            const { gcoordName, glat, glng, decodeError } = await geocodePlace(coordName);
            if (!decodeError) {
                dispatch(addCoord(gcoordName, glat, glng));
            }
        }
    }

    const geocodePlace = async (coordName) => {
        const result = { gcoordName: coordName };
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
        await yMaps.geocode(coordName).then(returnResult);
        return result;
    }

    return (
        <CoordSetterForm>
            <NewNodeInput onKeyDown={onSubmit} onChange={handleChangeCoordName} value={coordName} placeholder="New node" />
        </CoordSetterForm>
    );
});

const mapStateToProps = state => ({
    yMaps: state.yMaps
});

export default connect(mapStateToProps)(CoordsSetter);