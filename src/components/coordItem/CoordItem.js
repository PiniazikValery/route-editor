import React, { memo } from 'react';
import { connect } from 'react-redux';
import { deleteCoord } from '../../actions';
import { CoordItemBox, DeleteButton } from './StyledComps';

const CoordItem = memo(({ dispatch, name, id }) => {

    const onDeleteItem = () => {
        dispatch(deleteCoord(id));
    }

    return (
        <CoordItemBox>
            <label>{name}</ label>
            <DeleteButton onClick={onDeleteItem} />
        </CoordItemBox>
    );
});

export default connect()(CoordItem);