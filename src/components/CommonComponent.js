import React from 'react';
import NewsDetailsFilter from './newsDetails/NewsDetailsFilter';
import LoginForm from './loginForm/LoginForm';
import RequestPublishNews from './requestPublishNews/RequestPublishNews';

class CommonComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<NewsDetailsFilter {...this.props} />
				<LoginForm {...this.props} />
				<RequestPublishNews {...this.props} />
			</div>
		);
	}
}

export default CommonComponent;
