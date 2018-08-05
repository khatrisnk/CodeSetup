import actions from '../actions';
const appReducer = (state = {}, action) => {
    switch(action.type) {
        case actions.BASIC_ACTION: 
            return action.data;
        default: 
            return state;
    }
}
export default appReducer;