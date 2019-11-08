import * as types from '../actions/actionTypes';

const publishNewsDetails = (
	state = {
		isFetching: false,
		publishNewsDetailsData: [],
	},
	action,
) => {
	switch (action.type) {
		case types.SEND_NEWS_DETAILS_REQUEST:
			return Object.assign({}, state, {
				isFetching: true,
			});
		case types.SEND_NEWS_DETAILS_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				publishNewsDetailsData: action.publishNewsDetailsData,
			});
		case types.SEND_NEWS_DETAILS_ERROR:
			return Object.assign({}, state, {
				isFetching: false,
				error: action.message,
			});
		default:
			return state;
	}
};

export default publishNewsDetails;
