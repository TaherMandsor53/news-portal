import * as types from './actionTypes';

export function requestWeatherDetails() {
	return {
		type: types.WEATHER_DETAILS_REQUEST,
	};
}

export function requestNewsDetails(category, publishedDate) {
	return {
		type: types.NEWS_DETAILS_REQUEST,
		category,
		publishedDate,
	};
}

export function sendUserDetails(name, email, mobile, password) {
	return {
		type: types.REGISTER_USER_DETAILS_REQUEST,
		name,
		email,
		mobile,
		password,
	};
}

export function requestUserDetails() {
	return {
		type: types.USER_DETAILS_REQUEST,
	};
}

export function sendNewsDetails(title, content, createdAt) {
	return {
		type: types.SEND_NEWS_DETAILS_REQUEST,
		title,
		content,
		createdAt,
	};
}
