import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import WeatherDetailsContainer from '../../container/WeatherDetailsContainer';
import { headLine1, headLine2, headLine3, content1, content2, content3 } from '../../constants/constants';
import NewsDetailsContainer from '../../container/NewsDetailsContainer';
import RegisterUserDetailsContainer from '../../container/RegisterUserDetailsContainer';
import LoginForm from '../loginForm/LoginForm';
import PublishNews from '../publishNews/PublishNews';
import { Segment, Icon, Label } from 'semantic-ui-react';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			onLoginBtnClick: false,
			onPublishBtnClick: false,
		};
		this.showLoginModel = this.showLoginModel.bind(this);
		this.onCloseLoginModel = this.onCloseLoginModel.bind(this);
		this.showPublishNewsModel = this.showPublishNewsModel.bind(this);
		this.onClosePublishNewsModel = this.onClosePublishNewsModel.bind(this);
	}
	showLoginModel() {
		this.setState({ onLoginBtnClick: true });
	}

	onCloseLoginModel() {
		this.setState({ onLoginBtnClick: false });
	}

	showPublishNewsModel() {
		this.setState({ onPublishBtnClick: true });
	}

	onClosePublishNewsModel() {
		this.setState({ onPublishBtnClick: false });
	}
	render() {
		const { onLoginBtnClick, onPublishBtnClick } = this.state;
		return (
			<div>
				<Segment>
					<Icon name="newspaper outline" size="huge" />
					<Label>NewsHunt</Label>
					<div className="login-icon">
						<Icon name="user outline" size="big" />
						<Label className="login-label" onClick={this.showLoginModel}>
							Login
						</Label>
					</div>
					<div className="news-publish-icon">
						<Icon name="paper plane outline" size="big" />
						<Label className="news-publish-label" onClick={this.showPublishNewsModel}>
							Publish News
						</Label>
					</div>
				</Segment>
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
				<NewsDetailsContainer />
				<RegisterUserDetailsContainer />
				<LoginForm loginModalOpen={onLoginBtnClick} modalClose={this.onCloseLoginModel} />
				<PublishNews showPublishModal={onPublishBtnClick} onPublishNewsClose={this.onClosePublishNewsModel} />
			</div>
		);
	}
}

export default Home;
