import React, { memo } from 'react';
import { connect } from 'react-redux';
import { CoordItem } from '../coordItem';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { dndCoord } from '../../actions';

const ListOfCoords = memo(({ coords, dispatch }) => {
    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        dispatch(dndCoord(
            result.source.index,
            result.destination.index
        ));
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {coords.present.present.map((coord, index) => (
                            <Draggable key={coord.id} draggableId={coord.id} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <CoordItem
                                            key={coord.id}
                                            name={coord.name}
                                            lat={coord.lat}
                                            lng={coord.lng}
                                            id={coord.id}
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
});

const mapStateToProps = state => ({
    coords: state.coords
});

export default connect(mapStateToProps)(ListOfCoords);