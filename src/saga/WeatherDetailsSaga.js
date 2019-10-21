import { takeLatest, call, put } from 'redux-saga/effects';

import * as types from '../actions/actionTypes';
import api from '../api/index';

function* fetchWeatherDetails(action) {
	try {
		const weatherDetails = yield call(api.fetchWeatherDetails);
		yield put({
			type: types.WEATHER_DETAILS_SUCCESS,
			weatherDetailsData: weatherDetails,
		});
	} catch (e) {
		yield put({ type: types.WEATHER_DETAILS_ERROR, message: e.message });
	}
}

function* weatherDetailsSaga() {
	yield takeLatest(types.WEATHER_DETAILS_REQUEST, fetchWeatherDetails);
}

export default weatherDetailsSaga;
