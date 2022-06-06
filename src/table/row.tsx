import * as React from 'react';
import { ViewStyle } from 'react-native';
import Text from '../text';
import Box from '../box';
import * as Styled from './styles';

export interface TableRowProps<T> {
	item: T;
	columns: import('./table').ColumnProps<T>[];
	rowStyle?: ViewStyle;
	cellStyle?: ViewStyle;
	cellRenderer?: (
		item: T,
		column: import('./table').ColumnProps<T>,
		index: number
	) => React.ReactNode;
	itemIndex: number;
}

const TableRow = <T extends object>({
	item,
	columns,
	rowStyle,
	cellStyle,
	cellRenderer,
	itemIndex,
}: TableRowProps<T>) => {
	/**
	 *
	 */
	const renderCell = React.useCallback(
		(column, index) => {
			if (typeof cellRenderer === 'function') {
				return cellRenderer(item, column, index);
			}
			return <Text>{String(item[column.key] ?? '')}</Text>;
		},
		[cellRenderer, item]
	);

	/**
	 *
	 */
	return (
		<Styled.Row horizontal align="center" style={rowStyle} alt={itemIndex % 2 !== 0}>
			{columns.map((column, index) => {
				const { flexGrow = 1, flexShrink = 1, flexBasis = 'auto', width = '100%' } = column;
				return (
					<Box
						key={column.key}
						padding="small"
						style={[{ flexGrow, flexShrink, flexBasis, width }, cellStyle]}
					>
						{renderCell(column, index)}
					</Box>
				);
			})}
		</Styled.Row>
	);
};

export default React.memo(TableRow);
