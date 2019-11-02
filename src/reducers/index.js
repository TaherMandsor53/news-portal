import { combineReducers } from 'redux';

import weatherDetails from './WeatherDetailsReducer';
import newsDetails from './NewsDetailsReducer';
import registerUserDetails from './RegisterUserDetailsReducer';

export default combineReducers({
	weatherDetails,
	newsDetails,
	registerUserDetails,
});
