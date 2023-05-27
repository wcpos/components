import * as React from 'react';

import * as Styled from './styles';
import Box from '../box';
import Text from '../text';

interface SimpleTableRowProps {
	columns: import('./types').Column[];
	item: Record<string, any>;
}

/**
 *
 */
const alignItemsMap = {
	left: 'start',
	center: 'center',
	right: 'end',
};

/**
 *
 */
const Row = ({ columns, item }: SimpleTableRowProps) => {
	/**
	 *
	 */
	const defaultCellRenderer = React.useCallback(({ column, item }) => {
		return <Text>{item[column.key]}</Text>;
	}, []);

	/**
	 *
	 */
	return (
		<Styled.Row horizontal align="center">
			{columns.map((column) => {
				const { flex = 1, align = 'left', width, cellRenderer = defaultCellRenderer } = column;

				return (
					<Styled.Cell
						key={column.key}
						padding="small"
						flex={flex}
						width={width}
						align={alignItemsMap[align]}
					>
						{cellRenderer({ column, item })}
					</Styled.Cell>
				);
			})}
		</Styled.Row>
	);
};

export default Row;
