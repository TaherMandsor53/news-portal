import React from 'react';
import { Modal, Label } from 'semantic-ui-react';
import { DatePicker } from 'antd';

class PublishNews extends React.Component {
	constructor(props) {
		super(props);
		this.state = { dateSelectedVal: '' };
		this.onDateChange = this.onDateChange.bind(this);
	}

	onDateChange(date) {
		this.setState({ dateSelectedVal: date });
	}

	render() {
		const { showPublishModal, onPublishNewsClose } = this.props;
		return (
			<div>
				<Modal open={showPublishModal} onClose={onPublishNewsClose} closeIcon>
					<Modal.Header>Send News Request</Modal.Header>
					<Modal.Content>
						<Label className="publish-text">Published Date</Label>
						<DatePicker
							className="publish-date"
							onChange={this.onDateChange}
							allowClear={false}
							format={'DD-MMM-YYYY'}
						/>
					</Modal.Content>
				</Modal>
			</div>
		);
	}
}

export default PublishNews;
