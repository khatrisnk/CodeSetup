import actions from '../actions';
import data from '../data/index';

const newProductReducer = (state = {}, action) => {
    switch(action.type) {
        case actions.GOT_NEW_PRODUCT: 
            return action.data;
        case actions.GOT_NEW_PRODUCT_ERROR_FALLBACK:
            return data;
        default: 
            return state;
    }
}
export default newProductReducer;