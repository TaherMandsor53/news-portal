import axios from 'axios';

const fetchWeatherDetails = () => {
	const URL = `https://openweathermap.org/data/2.5/weather/?appid=b6907d289e10d714a6e88b30761fae22&id=1259229&units=metric`;
	return axios.get(URL);
};

const fetchNewsDetails = () => {
	const URL = ``;
	return axios.get(URL);
};

export default {
	fetchWeatherDetails,
	fetchNewsDetails,
};
