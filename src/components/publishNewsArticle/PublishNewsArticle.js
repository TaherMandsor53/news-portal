import React from 'react';
import { Modal, ModalHeader, ModalContent, Table, Button } from 'semantic-ui-react';

class PublishNewsArticle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		const { getAllNewsDetails } = this.props;
		getAllNewsDetails();
	}

	render() {
		const { showPublishNewsArticle, onClosePublishNewsArticle, getNewsDetailsData } = this.props;
		console.log('Get All Data:', getNewsDetailsData);
		const transformGetNewsDetails =
			getNewsDetailsData && getNewsDetailsData.filter(item => item.status === 'Submitted');
		const splitData = transformGetNewsDetails && transformGetNewsDetails.slice(0, 3);
		console.log('Transform Data:', transformGetNewsDetails);
		return (
			<div>
				<Modal open={showPublishNewsArticle} onClose={onClosePublishNewsArticle} closeIcon>
					<ModalHeader>Publish News Articles</ModalHeader>
					<ModalContent>
						<Table celled className="Publish-news-table">
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell className="publish-date-row">Published Date</Table.HeaderCell>
									<Table.HeaderCell className="headline-row">Headline</Table.HeaderCell>
									<Table.HeaderCell>News Content</Table.HeaderCell>
									<Table.HeaderCell className="approve-btn-row">Approved</Table.HeaderCell>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								{splitData &&
									splitData.map((row, key) => {
										let publishedDate = row && row.createdAt.split(' ')[0];
										return (
											<Table.Row>
												<Table.Cell>{publishedDate}</Table.Cell>
												<Table.Cell>{row.title}</Table.Cell>
												<Table.Cell>{row.content}</Table.Cell>
												<Table.Cell>
													<Button className="approve-btn">Approve</Button>
												</Table.Cell>
											</Table.Row>
										);
									})}
							</Table.Body>
						</Table>
					</ModalContent>
				</Modal>
			</div>
		);
	}
}

export default PublishNewsArticle;
