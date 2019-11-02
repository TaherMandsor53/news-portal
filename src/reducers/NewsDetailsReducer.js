import * as types from '../actions/actionTypes';

const newsDetails = (
	state = {
		isFetching: false,
		newsDetailsData: [],
	},
	action,
) => {
	switch (action.type) {
		case types.NEWS_DETAILS_REQUEST:
			return Object.assign({}, state, {
				isFetching: true,
			});
		case types.NEWS_DETAILS_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				newsDetailsData: action.newsDetailsData,
			});
		case types.NEWS_DETAILS_ERROR:
			return Object.assign({}, state, {
				isFetching: false,
				error: action.message,
			});
		default:
			return state;
	}
};

export default newsDetails;
