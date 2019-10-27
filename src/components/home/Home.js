import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import WeatherDetailsContainer from '../../container/NewsDetailsContainer';
import { headLine1, headLine2, headLine3, content1, content2, content3 } from '../../constants/constants';
import NewsDetailsFilter from '../newsDetails/NewsDetailsFilter';
class Home extends Component {
	render() {
		return (
			<div>
				<div className="carousel-slide">
					<Carousel autoPlay={true} interval={5000} showArrows={false} showStatus={false} showThumbs={false}>
						<div className="carousel-items">
							<img
								src={require('../../assets/Air_India.jpg')}
								alt="Not Available"
								className="carousel-image"
							/>

							<span className="news-content">
								<p className="headline">{headLine1}</p>
								<p className="content">{content1}</p>
							</span>
						</div>
						<div>
							<img
								src={require('../../assets/china_spaceRocket.jpg')}
								alt="Not Available"
								className="carousel-image"
							/>
							<span className="news-content">
								<p className="headline">{headLine2}</p>
								<p className="content">{content2}</p>
							</span>
						</div>
						<div>
							<img
								src={require('../../assets/Indian_Railways.jpg')}
								alt="Not Available"
								className="carousel-image"
							/>
							<span className="news-content">
								<p className="headline">{headLine3}</p>
								<p className="content">{content3}</p>
							</span>
						</div>
					</Carousel>
				</div>
				<WeatherDetailsContainer />

				<NewsDetailsFilter />
			</div>
		);
	}
}

export default Home;
