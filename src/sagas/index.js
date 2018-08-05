import { takeLatest, put, call } from 'redux-saga/effects'
import actions from '../actions'
import api from '../api';
function* getNewProducts() {
 try {
        const data = yield call(api.getNewProducts);
        yield put({ type: actions.GOT_NEW_PRODUCT, data });
    } catch (error) {
        console.log('saga fail: ', error);
        yield put({ type: actions.GOT_NEW_PRODUCT_ERROR_FALLBACK, error })
    }
}
export function* sagas() {
    yield takeLatest(actions.GET_NEW_PRODUCT, getNewProducts);
}
