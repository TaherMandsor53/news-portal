import { takeLatest, call, put } from 'redux-saga/effects';

import * as types from '../actions/actionTypes';
import api from '../api/index';

function* storeNewsDetails(action) {
	try {
		const storeNewsDetails = yield call(api.storeNewsDetails, action.title, action.content, action.createdAt);
		yield put({
			type: types.SEND_NEWS_DETAILS_SUCCESS,
			publishNewsDetailsData: storeNewsDetails.data,
		});
	} catch (e) {
		yield put({ type: types.SEND_NEWS_DETAILS_ERROR, message: e.message });
	}
}

function* registerUserDetailsSaga() {
	yield takeLatest(types.SEND_NEWS_DETAILS_REQUEST, storeNewsDetails);
}

export default registerUserDetailsSaga;
