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

const storeUserDetails = (userName, email, firstName, password, userType = 'User') => {
	const URL = `${baseURL}/api/userDetails`;
	return axios.post(URL, { userName, email, firstName, password, userType });
};

const fetchUserDetails = () => {
	const URL = `${baseURL}/api/userDetails`;
	return axios.get(URL);
};

const storeNewsDetails = (title, content, formatcreatedAt, city = 'Pune', status = 'Submitted') => {
	const createdAt = formatcreatedAt && moment(formatcreatedAt).format('DD-MM-YYYY hh:mm:ss');
	const URL = `${baseURL}/api/newsDetails`;
	return axios.post(URL, { title, content, createdAt, status, city });
};

const fetchAllNewsDetails = () => {
	const URL = `${baseURL}/getAllNews`;
	return axios.get(URL);
};

// const fetchPublishNewsArticle = () => {
// 	const URL = `${baseURL}/`
// }

export default {
	fetchWeatherDetails,
	fetchNewsDetails,
	storeUserDetails,
	fetchUserDetails,
	storeNewsDetails,
	fetchAllNewsDetails,
};
