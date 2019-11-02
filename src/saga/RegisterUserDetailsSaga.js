import { takeLatest, call, put } from 'redux-saga/effects';

import * as types from '../actions/actionTypes';
import api from '../api/index';

function* storeUserDetails(action) {
	try {
		const storeUserDetails = yield call(
			api.storeUserDetails,
			action.name,
			action.email,
			action.mobile,
			action.password,
		);
		yield put({
			type: types.REGISTER_USER_DETAILS_SUCCESS,
			registerUserDetailsData: storeUserDetails.data,
		});
	} catch (e) {
		yield put({ type: types.REGISTER_USER_DETAILS_ERROR, message: e.message });
	}
}

function* registerUserDetailsSaga() {
	yield takeLatest(types.REGISTER_USER_DETAILS_REQUEST, storeUserDetails);
}

export default registerUserDetailsSaga;
