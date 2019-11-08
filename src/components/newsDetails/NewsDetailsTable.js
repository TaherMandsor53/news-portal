import React from 'react';
import { Table } from 'semantic-ui-react';

class NewsDetailsTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { data } = this.props;
		const transformData = data && data.slice(0, 2);
		return (
			<div>
				{data && data.length > 0 ? (
					<Table celled>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Published Date</Table.HeaderCell>
								<Table.HeaderCell>Headline</Table.HeaderCell>
								<Table.HeaderCell>News Content</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{transformData.map((row, key) => {
								let publishedDate = row.publishedAt.split(' ')[0];
								return (
									<Table.Row>
										<Table.Cell>{publishedDate}</Table.Cell>
										<Table.Cell>{row.title}</Table.Cell>
										<Table.Cell>{row.content}</Table.Cell>
									</Table.Row>
								);
							})}
						</Table.Body>
					</Table>
				) : (
					<h3 className="no-content">Currently no news available for selected time period.</h3>
				)}
			</div>
		);
	}
}

export default NewsDetailsTable;
