import { CONSTANTS } from '../../actions';


export const initYMapsApi = (yMapsApi) => {
    return {
        type: CONSTANTS.INIT_YMAPS_API,
        payload: { yMapsApi }
    };
}
