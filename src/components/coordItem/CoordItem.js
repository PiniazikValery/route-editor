import React, { memo } from 'react';
import { connect } from 'react-redux';
import { deleteCoord } from '../../actions';

const CoordItem = memo(({ dispatch, name, lng, lat, id }) => {

    const onDeleteItem = () => {
        dispatch(deleteCoord(id));
    }

    return (
        <div>
            <label>{`Имя: ${name}; долгота:${lng}; широта: ${lat}`}</ label>
            <button onClick={onDeleteItem}>Удалить</button>
        </div>
    );
});

export default connect()(CoordItem);