import * as types from './actionTypes';

export function requestWeatherDetails() {
	return {
		type: types.WEATHER_DETAILS_REQUEST,
	};
}
