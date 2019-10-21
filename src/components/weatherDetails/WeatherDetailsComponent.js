import React, { Component } from 'react';

class WeatherDetailsComponent extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	componentDidMount() {
		const { requestWeatherDetails } = this.props;
		requestWeatherDetails();
	}
	render() {
		const { weatherDetailsData } = this.props;
		console.log('Weather Details:', weatherDetailsData);
		return <div></div>;
	}
}

export default WeatherDetailsComponent;
