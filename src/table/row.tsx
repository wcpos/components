import * as React from 'react';
import { ViewStyle } from 'react-native';
import type { ListRenderItemInfo } from '@shopify/flash-list';
import Box from '../box';
import * as Styled from './styles';

export interface TableRowProps<T> extends ListRenderItemInfo<T> {
	rowStyle?: ViewStyle;
	cellStyle?: ViewStyle;
	extraData: import('./').TableExtraDataProps<T>;
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
const TableRow = <T extends object>({
	item,
	rowStyle,
	cellStyle,
	index,
	extraData,
}: TableRowProps<T>) => {
	const { columns, cellRenderer } = extraData;

	/**
	 *
	 */
	// const renderCell = React.useCallback(
	// 	(column, index) => {
	// 		if (typeof cellRenderer === 'function') {
	// 			return cellRenderer({ item, column, index });
	// 		}
	// 		return <Text>{String(item[column.key] ?? '')}</Text>;
	// 	},
	// 	[cellRenderer, item]
	// );

	/**
	 *
	 */
	return (
		<Styled.Row horizontal align="center" style={rowStyle} alt={index % 2 !== 0}>
			{columns.map((column, idx) => {
				const { flex = 1, align = 'left', width } = column;

				return (
					<Styled.Cell
						key={column.key}
						padding="small"
						flex={flex}
						width={width}
						align={alignItemsMap[align]}
						style={[cellStyle]}
					>
						{cellRenderer({ item, column, index: idx })}
					</Styled.Cell>
				);
			})}
		</Styled.Row>
	);
};

export default React.memo(TableRow);
