import * as React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { FlashList, FlashListProps } from '@shopify/flash-list';
import Row from './row';
import Header from './header';
import Empty from './empty';
import * as Styled from './styles';

export type TableProps<T> = {
	columns: import('./').ColumnProps<T>[];
	sort?: import('./').Sort;
	sortBy?: keyof T & string;
	sortDirection?: import('./').SortDirection;
	style?: StyleProp<ViewStyle>;
	footer?: React.ReactNode;
} & FlashListProps<T>;

const Table = <T extends object>({
	columns,
	sort,
	sortBy,
	sortDirection,
	style,
	footer,
	...props
}: TableProps<T>) => {
	const keyExtractor = React.useCallback((item, index) => {
		return item._id || `${index}`;
	}, []);

	return (
		<Styled.Table style={style}>
			<Header columns={columns} sort={sort} sortBy={sortBy} sortDirection={sortDirection} />
			<FlashList
				keyExtractor={keyExtractor}
				renderItem={({ item, index }) => <Row columns={columns} item={item} itemIndex={index} />}
				// ListHeaderComponent={
				// 	<Header columns={columns} sort={sort} sortBy={sortBy} sortDirection={sortDirection} />
				// }
				ListEmptyComponent={<Empty />}
				{...props}
			/>
			{footer}
		</Styled.Table>
	);
};

export default Table;
