import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import WeatherDetailsContainer from '../../container/NewsDetailsContainer';

class Home extends Component {
	render() {
		return (
			<div>
				<Carousel autoPlay={true} interval={5000}>
					<img src={require('../../assets/news1.jpg')} alt="Not Available" />
					<img src={require('../../assets/news1.jpg')} alt="Not Available" />
				</Carousel>
				<WeatherDetailsContainer />
			</div>
		);
	}
}

export default Home;
