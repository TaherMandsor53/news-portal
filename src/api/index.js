import axios from 'axios';

const baseURL = `https://the--news--portal.herokuapp.com`;

const fetchWeatherDetails = () => {
	const URL = `https://openweathermap.org/data/2.5/weather/?appid=b6907d289e10d714a6e88b30761fae22&id=1259229&units=metric`;
	return axios.get(URL);
};

const fetchNewsDetails = (category, publishedDate) => {
	const URL = `${baseURL}/getNewsByFilters?category=${category}&publishedFromDate=${publishedDate}`;
	return axios.get(URL);
};

export default {
	fetchWeatherDetails,
	fetchNewsDetails,
};
