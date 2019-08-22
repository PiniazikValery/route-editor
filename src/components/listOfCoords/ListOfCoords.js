import React, { memo } from 'react';
import { connect } from 'react-redux';
import { CoordItem } from '../coordItem';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DragDropContextHolder } from './StyledComps';
import { dndCoord } from '../../actions';

const ListOfCoords = memo(({ coords, dispatch, mobile }) => {
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
        <DragDropContextHolder mobile={mobile}>
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
                                                mobile={mobile}
                                                key={coord.id}
                                                name={coord.name}
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
        </DragDropContextHolder>
    );
});

const mapStateToProps = state => ({
    coords: state.coords
});

export default connect(mapStateToProps)(ListOfCoords);