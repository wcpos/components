import * as React from 'react';
import { View, GestureResponderEvent } from 'react-native';
import { HeaderCell as StyledView } from './styles';
import Text from '../text';
import Icon from '../icon';
import Touchable from '../touchable';
import SortIcon from '../sort-icon';

export interface IHeaderCellProps {
	children?: React.ReactNode;
	dataKey: string | number;
	defaultSortDirection?: import('./types').SortDirection;
	// headerCellRenderer?: import('./types').HeaderCellRenderer;
	label?: string;
	sort?: import('./types').Sort;
	sortBy?: string;
	sortDirection?: import('./types').SortDirection;
	// style?: any;
	flexGrow?: 0 | 1;
	flexShrink?: 0 | 1;
	width?: string;
}

export const HeaderCell = ({
	children,
	sort,
	sortBy,
	dataKey,
	defaultSortDirection = 'asc',
	sortDirection,
	// headerCellRenderer,
	label,
	// style,
	flexGrow,
	flexShrink,
	width,
}: IHeaderCellProps) => {
	const sortable = typeof sort === 'function';
	const showSortIndicator = sortable && sortBy === dataKey;

	const newSortDirection =
		sortBy !== dataKey ? defaultSortDirection : sortDirection === 'desc' ? 'asc' : 'desc';

	const onPress = (event: GestureResponderEvent) => {
		if (typeof sort === 'function') {
			sort({
				defaultSortDirection,
				event,
				sortBy: dataKey,
				sortDirection: newSortDirection,
			});
		}
	};

	// if (typeof headerCellRenderer === 'function') {
	// 	return (
	// 		<StyledView flexGrow={flexGrow} flexShrink={flexShrink} width={width}>
	// 			{headerCellRenderer({ dataKey })}
	// 		</StyledView>
	// 	);
	// }

	return (
		<StyledView flexGrow={flexGrow} flexShrink={flexShrink} width={width}>
			{sortable ? (
				<Touchable onPress={onPress}>
					<View style={{ flexDirection: 'row' }}>
						<Text>{children || label}</Text>
						{showSortIndicator && <SortIcon direction={sortDirection} />}
					</View>
				</Touchable>
			) : (
				<Text>{children || label}</Text>
			)}
		</StyledView>
	);
};

HeaderCell.displayName = 'Table.Header.Cell';
