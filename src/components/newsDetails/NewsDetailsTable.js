import React from 'react';
import { Table } from 'semantic-ui-react';

class NewsDetailsTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Table celled>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Published Date</Table.HeaderCell>
							<Table.HeaderCell>Headline</Table.HeaderCell>
							<Table.HeaderCell>News Content</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						<Table.Row>
							<Table.Cell>First</Table.Cell>
							<Table.Cell>Cell</Table.Cell>
							<Table.Cell>Cell</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Cell</Table.Cell>
							<Table.Cell>Cell</Table.Cell>
							<Table.Cell>Cell</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Cell</Table.Cell>
							<Table.Cell>Cell</Table.Cell>
							<Table.Cell>Cell</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
			</div>
		);
	}
}

export default NewsDetailsTable;
