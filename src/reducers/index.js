import { combineReducers } from 'redux';

import weatherDetails from './WeatherDetailsReducer';
import newsDetails from './NewsDetailsReducer';

export default combineReducers({
	weatherDetails,
	newsDetails,
});
