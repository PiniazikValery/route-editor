import React, { memo } from 'react';
import { connect } from 'react-redux';
import { deleteCoord } from '../../actions';
import { CoordItemBox, DeleteButton } from './StyledComps';

const CoordItem = memo(({ dispatch, name, id, mobile }) => {

    const onDeleteItem = () => {
        dispatch(deleteCoord(id));
    }

    return (
        <CoordItemBox mobile={mobile}>
            <label>{name}</ label>
            <DeleteButton mobile={mobile ? 1 : 0} onClick={onDeleteItem} />
        </CoordItemBox>
    );
});

export default connect()(CoordItem);