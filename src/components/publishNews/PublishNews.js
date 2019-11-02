import React from 'react';
import { Modal, Label } from 'semantic-ui-react';

class PublishNews extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { showPublishModal, onPublishNewsClose } = this.props;
		return (
			<div>
				<Modal open={showPublishModal} onClose={onPublishNewsClose} closeIcon></Modal>
			</div>
		);
	}
}

export default PublishNews;
