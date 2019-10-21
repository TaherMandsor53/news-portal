import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home';
import { Provider } from 'react-redux';
import store from './store/store';
class Main extends Component {
	render() {
		return (
			<div>
				<Provider store={store}>
					<Router>
						<Route exact path="/project/home" component={Home} />
					</Router>
				</Provider>
			</div>
		);
	}
}

export default Main;
