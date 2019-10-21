import * as types from '../actions/actionTypes';

const weatherDetails = (
	state = {
		isFetching: false,
		weatherDetailsData: [],
	},
	action,
) => {
	switch (action.type) {
		case types.WEATHER_DETAILS_REQUEST:
			return Object.assign({}, state, {
				isFetching: true,
			});
		case types.WEATHER_DETAILS_SUCCESS:
			return Object.assign(
				{},
				{
					isFetching: false,
					weatherDetailsData: action.weatherDetailsData,
				},
			);
		case types.WEATHER_DETAILS_ERROR:
			return Object.assign({}, state, {
				isFetching: false,
				error: action.message,
			});
		default:
			return state;
	}
};

export default weatherDetails;
