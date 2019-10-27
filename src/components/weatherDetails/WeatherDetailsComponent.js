import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';

class WeatherDetailsComponent extends Component {
	componentDidMount() {
		const { requestWeatherDetails } = this.props;
		requestWeatherDetails();
	}
	render() {
		const { weatherDetailsData } = this.props;
		const country = weatherDetailsData.sys && weatherDetailsData.sys.country;
		const header = 'Weather in ' + weatherDetailsData.name + ', ' + country;
		const weatherDetails = weatherDetailsData.weather && weatherDetailsData.weather[0];
		const weatherIcon = weatherDetails && weatherDetails.main === 'Rain' ? 'rain' : 'cloud';
		const weatherDescription = weatherDetails && weatherDetails.description.toUpperCase();
		const temperature = weatherDetailsData.main && weatherDetailsData.main.temp;
		const roundTemperatureVal = Math.round(temperature) + ' °C';
		const sunRiseDetails = weatherDetailsData.sys && weatherDetailsData.sys.sunrise;
		const sunSetDetails = weatherDetailsData.sys && weatherDetailsData.sys.sunset;
		console.log('Weather Details:', weatherDetailsData);
		const sunriseTime = new Date(sunRiseDetails * 1000).toLocaleTimeString('en-US');
		const sunsetTime = new Date(sunSetDetails * 1000).toLocaleTimeString('en-US');
		return (
			<div className="weather-details">
				{weatherDetailsData && (
					<Card className="weather-card">
						<Card.Content header={header} />
						<Card.Content>
							<Icon name={weatherIcon} size="big" className="weather-icon" />
							<p className="temperature-details">{roundTemperatureVal}</p>
							<div>
								<p>{weatherDescription}</p>
								<p>Sunrise: {sunriseTime}</p>
								<p>Sunset: {' ' + sunsetTime}</p>
							</div>
						</Card.Content>
					</Card>
				)}
			</div>
		);
	}
}

export default WeatherDetailsComponent;
