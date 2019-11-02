import * as types from '../actions/actionTypes';

const registerUserDetails = (
	state = {
		isFetching: false,
		registerUserDetailsData: [],
	},
	action,
) => {
	switch (action.type) {
		case types.REGISTER_USER_DETAILS_REQUEST:
			return Object.assign({}, state, {
				isFetching: true,
			});
		case types.REGISTER_USER_DETAILS_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				registerUserDetailsData: action.registerUserDetailsData,
			});
		case types.REGISTER_USER_DETAILS_ERROR:
			return Object.assign({}, state, {
				isFetching: false,
				error: action.message,
			});
		default:
			return state;
	}
};

export default registerUserDetails;
