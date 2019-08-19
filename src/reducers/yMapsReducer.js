import { CONSTANTS } from '../actions';

const initialState = null;

const yMapsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.INIT_YMAPS_API: {
            const { yMapsApi } = action.payload;
            return yMapsApi;
        }
        default: {
            return state;
        }
    }
}

export default yMapsReducer;