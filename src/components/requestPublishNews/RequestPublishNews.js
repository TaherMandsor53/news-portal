import React from 'react';
import { Modal, Label, Input, TextArea, Button } from 'semantic-ui-react';
import { DatePicker } from 'antd';

class RequestPublishNews extends React.Component {
	constructor(props) {
		super(props);
		this.state = { dateSelectedVal: '', headlineContent: '', content: '' };
		this.onDateChange = this.onDateChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onCancel = this.onCancel.bind(this);
		this.onHeadlineChange = this.onHeadlineChange.bind(this);
		this.onContentChange = this.onContentChange.bind(this);
	}

	onSubmit() {
		const { sendNewsDetails } = this.props;
		const { dateSelectedVal, headlineContent, content } = this.state;
		sendNewsDetails(headlineContent, content, dateSelectedVal);
		this.setState({ headlineContent: '', content: '', dateSelectedVal: '' });
	}

	onCancel() {
		this.setState({ headlineContent: '', content: '' });
		this.props.onPublishNewsClose();
	}

	onHeadlineChange(event) {
		this.setState({ headlineContent: event.target.value });
	}

	onContentChange(event) {
		this.setState({ content: event.target.value });
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
						<div>
							<Label className="publish-text">News Headline</Label>
							<Input placeholder="Headline" className="headline-input" onChange={this.onHeadlineChange} />
						</div>
						<div>
							<Label className="content-text">News Content</Label>
							<div>
								<TextArea
									placeholder="Content"
									className="content-input"
									onChange={this.onContentChange}
								/>
							</div>
						</div>
						<div className="publish-btn">
							<Button onClick={this.onSubmit} className="publish-submit">
								Submit
							</Button>
							<Button onClick={this.onCancel} className="publish-cancel">
								Cancel
							</Button>
						</div>
					</Modal.Content>
				</Modal>
			</div>
		);
	}
}

export default RequestPublishNews;
