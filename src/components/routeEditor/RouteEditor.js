import React, { memo } from 'react';
import { RouteEditorItemsholder } from './StyledComps';
import { connect } from 'react-redux';
import { CoordsSetter } from '../coordsSetter';
import { ListOfCoords } from '../listOfCoords';

const RouteEditor = memo(({ yMaps }) => {
    return (
        <RouteEditorItemsholder>
            {yMaps ?
                [<CoordsSetter key="coordsSetter" />,
                <ListOfCoords key="listOfCoords" />]
                : undefined}
        </RouteEditorItemsholder>
    );
});

const mapStateToProps = state => ({
    yMaps: state.yMaps
});

export default connect(mapStateToProps)(RouteEditor);