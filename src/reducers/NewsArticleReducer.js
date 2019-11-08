import * as types from '../actions/actionTypes';

const getNewsDetails = (
	state = {
		isFetching: false,
		getNewsDetailsData: [],
	},
	action,
) => {
	switch (action.type) {
		case types.GETALL_NEWSDETAILS_REQUEST:
			return Object.assign({}, state, {
				isFetching: true,
			});
		case types.GETALL_NEWSDETAILS_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				getNewsDetailsData: action.getNewsDetailsData,
			});
		case types.GETALL_NEWSDETAILS_ERROR:
			return Object.assign({}, state, {
				isFetching: false,
				error: action.message,
			});
		default:
			return state;
	}
};

export default getNewsDetails;
