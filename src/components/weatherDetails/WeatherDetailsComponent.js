import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';

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
		const country = weatherDetailsData.sys && weatherDetailsData.sys.country;
		const header = 'Weather in ' + weatherDetailsData.name + ', ' + country;
		const weatherDetails = weatherDetailsData.weather && weatherDetailsData.weather[0];
		const weatherIcon = weatherDetails && weatherDetails.main === 'Rain' ? 'rain' : 'cloud';
		const temperature = weatherDetailsData.main && weatherDetailsData.main.temp;
		const roundTemperatureVal = Math.round(temperature) + ' ° C';
		console.log('Weather Details:', weatherDetailsData);

		return (
			<div>
				{weatherDetailsData && (
					<Card>
						<Card.Content header={header} />
						<Card.Content>
							<Icon name={weatherIcon} size="big" className="weather-icon" />
							<p>{roundTemperatureVal}</p>
						</Card.Content>
					</Card>
				)}
			</div>
		);
	}
}

export default WeatherDetailsComponent;
