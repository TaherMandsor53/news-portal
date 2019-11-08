import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestNewsDetails, requestUserDetails, sendNewsDetails, getAllNewsDetails } from '../actions/action';

import CommonComponent from '../components/CommonComponent';

const mapStateToProps = state => ({
	newsDetailsData: state.newsDetails.newsDetailsData,
	isLoading: state.newsDetails.isFetching,
	userDetailsData: state.userDetails.userDetailsData,
	publishNewsDetailsData: state.publishNewsDetails.publishNewsDetailsData,
	getNewsDetailsData: state.getNewsDetails.getNewsDetailsData,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			requestNewsDetails,
			requestUserDetails,
			sendNewsDetails,
			getAllNewsDetails,
		},
		dispatch,
	);

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CommonComponent);
