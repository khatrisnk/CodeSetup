import { combineReducers } from "redux";
import appReducer from './appReducer';
import newProductReducer from './newProductReducer';

export const reducers = combineReducers({
    appData: appReducer,
    newProducts: newProductReducer
});