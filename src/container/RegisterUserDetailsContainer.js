import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendUserDetails } from '../actions/action';

import RegisterUser from '../components/loginForm/RegisterUser';

const mapStateToProps = state => {
	console.log('In Container');
	return {
		registerUserDetailsData: state.registerUserDetails.registerUserDetailsData,
	};
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			sendUserDetails,
		},
		dispatch,
	);

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(RegisterUser);
