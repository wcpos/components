import * as React from 'react';
import { ViewStyle, FlexAlignType } from 'react-native';
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
const alignItemsMap: Record<string, FlexAlignType> = {
	left: 'flex-start',
	center: 'center',
	right: 'flex-end',
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
				const { flex = 1, align = 'left' } = column;

				return (
					<Box
						key={column.key}
						padding="small"
						style={[
							{
								flex,
								alignItems: alignItemsMap[align],
							},
							cellStyle,
						]}
					>
						{cellRenderer({ item, column, index: idx })}
					</Box>
				);
			})}
		</Styled.Row>
	);
};

export default React.memo(TableRow);
