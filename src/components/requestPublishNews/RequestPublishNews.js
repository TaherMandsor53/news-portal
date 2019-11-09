import React from 'react';
import { Modal, Label, Input, TextArea, Button } from 'semantic-ui-react';
import { DatePicker } from 'antd';

class RequestPublishNews extends React.Component {
	constructor(props) {
		super(props);
		this.state = { dateSelectedVal: '', headlineContent: '', content: '', errorCheck: false };
		this.onDateChange = this.onDateChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onCancel = this.onCancel.bind(this);
		this.onHeadlineChange = this.onHeadlineChange.bind(this);
		this.onContentChange = this.onContentChange.bind(this);
	}

	onSubmit() {
		const { sendNewsDetails } = this.props;
		const { dateSelectedVal, headlineContent, content } = this.state;
		if (dateSelectedVal !== '' && headlineContent !== '' && content !== '') {
			sendNewsDetails(headlineContent, content, dateSelectedVal);
		} else {
			this.setState({ errorCheck: true });
		}

		this.setState({ headlineContent: '', content: '', dateSelectedVal: '' });
		this.props.onPublishNewsClose();
	}

	onCancel() {
		this.setState({ headlineContent: '', content: '', errorCheck: false });
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
		console.log('date value:', this.state.dateSelectedVal);
		console.log('content:', this.state.content);
		return (
			<div>
				<Modal open={showPublishModal} onClose={onPublishNewsClose} closeIcon>
					<Modal.Header>Send News Request</Modal.Header>
					<Modal.Content>
						{this.state.errorCheck && <Label className="error-label">Please provide all the details</Label>}
						<div>
							<Label className="publish-text">Published Date</Label>
							<DatePicker
								className="publish-date"
								onChange={this.onDateChange}
								allowClear={false}
								format={'DD-MMM-YYYY'}
							/>
							<div>
								<Label className="publish-text">News Headline</Label>
								<Input
									placeholder="Headline"
									className="headline-input"
									onChange={this.onHeadlineChange}
								/>
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
						</div>
					</Modal.Content>
				</Modal>
			</div>
		);
	}
}

export default RequestPublishNews;
