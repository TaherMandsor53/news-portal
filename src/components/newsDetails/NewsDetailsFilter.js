import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';
import { DatePicker } from 'antd';
import moment from 'moment';
import NewsDetailsTable from './NewsDetailsTable';

const categoryOptions = [
	{
		text: 'General News',
		value: 'GENE',
	},
	{
		text: 'Business',
		value: 'BUSI',
	},
	{
		text: 'Education',
		value: 'EDUC',
	},
	{
		text: 'Trending',
		value: 'TREN',
	},
];

class NewsDetailsFilter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categorySelectedValue: categoryOptions[0].value,
			dateSelectedValue: '',
		};
		this.onDateChange = this.onDateChange.bind(this);
		this.onCategoryChange = this.onCategoryChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
		const { requestNewsDetails } = this.props;
		const { categorySelectedValue, dateSelectedValue } = this.state;
		requestNewsDetails(categorySelectedValue, dateSelectedValue);
	}

	onDateChange(date) {
		this.setState({ dateSelectedValue: moment(date._d).format('DD-MM-YYYY') });
	}

	onCategoryChange(event, data) {
		this.setState({ categorySelectedValue: data.value });
	}

	onSubmit() {
		const { requestNewsDetails } = this.props;
		const { categorySelectedValue, dateSelectedValue } = this.state;
		requestNewsDetails(categorySelectedValue, dateSelectedValue);
	}

	render() {
		const { categorySelectedValue } = this.state;
		const { newsDetailsData, isLoading } = this.props;
		console.log('News Details:', newsDetailsData);
		return (
			<div>
				<Dropdown
					options={categoryOptions}
					placeholder="Select Category"
					selection
					onChange={this.onCategoryChange}
					value={categorySelectedValue}
				/>
				<DatePicker
					onChange={this.onDateChange}
					allowClear={false}
					format={'DD-MMM-YYYY'}
					defaultValue={moment().subtract(1, 'months')}
				/>
				<Button onClick={this.onSubmit}>OK</Button>
				{isLoading ? (
					<div className="loading-img">
						<img className="image" src={require('../../assets/LOADING.gif')} alt="" />
					</div>
				) : (
					<NewsDetailsTable data={newsDetailsData} />
				)}
			</div>
		);
	}
}

export default NewsDetailsFilter;
