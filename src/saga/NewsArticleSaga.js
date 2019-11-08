import { takeLatest, call, put } from 'redux-saga/effects';

import * as types from '../actions/actionTypes';
import api from '../api/index';

function* fetchAllNewsDetails(action) {
	try {
		const getNewsDetails = yield call(api.fetchAllNewsDetails);
		yield put({
			type: types.GETALL_NEWSDETAILS_SUCCESS,
			getNewsDetailsData: getNewsDetails.data,
		});
	} catch (e) {
		yield put({ type: types.GETALL_NEWSDETAILS_ERROR, message: e.message });
	}
}

function* getNewsDetailsSaga() {
	yield takeLatest(types.GETALL_NEWSDETAILS_REQUEST, fetchAllNewsDetails);
}

export default getNewsDetailsSaga;
