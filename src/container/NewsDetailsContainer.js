import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestNewsDetails } from '../actions/action';

import newsDetailsFilter from '../components/newsDetails/NewsDetailsFilter';

const mapStateToProps = state => ({
	newsDetailsData: state.newsDetails.newsDetailsData,
	isLoading: state.newsDetails.isFetching,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			requestNewsDetails,
		},
		dispatch,
	);

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(newsDetailsFilter);
