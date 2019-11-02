import axios from 'axios';
import moment from 'moment';

const baseURL = `https://the--news--portal.herokuapp.com`;

const fetchWeatherDetails = () => {
	const URL = `https://openweathermap.org/data/2.5/weather/?appid=b6907d289e10d714a6e88b30761fae22&id=1259229&units=metric`;
	return axios.get(URL);
};

const fetchNewsDetails = (category, publishedDate) => {
	let newsPublishedDate = publishedDate
		? publishedDate
		: moment()
				.subtract(1, 'months')
				.format('DD-MM-YYYY');
	const URL = `${baseURL}/getNewsByFilters?category=${category}&publishedFromDate=${newsPublishedDate}`;
	return axios.get(URL);
};

const storeUserDetails = (name, email, mobile, password) => {
	console.log('User:', name);
	const URL = baseURL + '/api/userDetails';
  return axios.post(URL, { name, email, mobile, password });
};

export default {
	fetchWeatherDetails,
	fetchNewsDetails,
	storeUserDetails,
};
