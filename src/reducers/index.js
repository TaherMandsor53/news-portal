import { combineReducers } from 'redux';

import weatherDetails from './WeatherDetailsReducer';
import newsDetails from './NewsDetailsReducer';
import registerUserDetails from './RegisterUserDetailsReducer';
import userDetails from './UserDetailsReducer';
import publishNewsDetails from './PublishNewsDetailReducer';

export default combineReducers({
	weatherDetails,
	newsDetails,
	registerUserDetails,
	userDetails,
	publishNewsDetails,
});
