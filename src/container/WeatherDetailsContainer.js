import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestWeatherDetails } from '../actions/action';

import WeatherDetailsComponent from '../components/weatherDetails/WeatherDetailsComponent';

const mapStateToProps = state => ({
	weatherDetailsData: state.weatherDetails.weatherDetailsData,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			requestWeatherDetails,
		},
		dispatch,
	);

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(WeatherDetailsComponent);
