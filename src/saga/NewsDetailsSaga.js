import { takeLatest, call, put } from 'redux-saga/effects';

import * as types from '../actions/actionTypes';
import api from '../api/index';

function* fetchNewsDetails(action) {
	try {
		const newsDetails = yield call(api.fetchNewsDetails, action.category, action.publishedDate);
		yield put({
			type: types.NEWS_DETAILS_SUCCESS,
			newsDetailsData: newsDetails.data,
		});
	} catch (e) {
		yield put({ type: types.NEWS_DETAILS_ERROR, message: e.message });
	}
}

function* newsDetailsSaga() {
	yield takeLatest(types.NEWS_DETAILS_REQUEST, fetchNewsDetails);
}

export default newsDetailsSaga;
