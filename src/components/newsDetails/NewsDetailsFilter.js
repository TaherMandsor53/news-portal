import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';
import { DatePicker } from 'antd';
import moment from 'moment';

const categoryOptions = [
	{
		key: 'general',
		text: 'General News',
		value: 'General News',
	},
	{
		key: 'business',
		text: 'Business',
		value: 'Business',
	},
	{
		key: 'education',
		text: 'Education',
		value: 'Education',
	},
	{
		key: 'technology',
		text: 'Technology',
		value: 'Technology',
	},
	{
		key: 'sports',
		text: 'Sports',
		value: 'Sports',
	},
];

class NewsDetailsFilter extends React.Component {
	constructor(props) {
		super(props);
		this.state = { categorySelectedValue: '' };
		this.onDateChange = this.onDateChange.bind(this);
		this.onCategoryChange = this.onCategoryChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onDateChange(date) {
		console.log('Date Value selected:', date._d);
	}

	onCategoryChange(event, data) {
		this.setState({ categorySelectedValue: data.value });
		console.log('Category Value:', data);
	}

	onSubmit() {
		console.log('OK Click');
	}

	render() {
		const { categorySelectedValue } = this.state;
		return (
			<div>
				<Dropdown
					options={categoryOptions}
					placeholder="Select Category"
					selection
					defaultValue={categoryOptions[0].text}
					onChange={this.onCategoryChange}
					value={categorySelectedValue ? categorySelectedValue : categoryOptions[0].text}
				/>
				<DatePicker onChange={this.onDateChange} allowClear={false} />
				<Button onClick={this.onSubmit}>OK</Button>
			</div>
		);
	}
}

export default NewsDetailsFilter;
