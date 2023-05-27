import * as React from 'react';

import Header from './header';
import Row from './row';
import Box from '../box';

interface SimpleTableProps {
	columns: import('./types').Column[];
	data: Record<string, any>[];
}

/**
 *
 */
const SimpleTable = ({ columns, data }: SimpleTableProps) => {
	return (
		<Box>
			<Header columns={columns} />
			{data.map((row, index) => (
				<Row key={row?.primary || index} columns={columns} item={row} />
			))}
		</Box>
	);
};

export default SimpleTable;
