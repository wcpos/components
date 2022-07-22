import * as React from 'react';
import { FlashList, FlashListProps } from '@shopify/flash-list';
import Row from './row';
import Header from './header';
import Empty from './empty';

export type TableProps<T> = {
	columns: import('./').ColumnProps<T>[];
	sort?: import('./').Sort;
	sortBy?: keyof T & string;
	sortDirection?: import('./').SortDirection;
} & FlashListProps<T>;

const Table = <T extends object>({
	columns,
	sort,
	sortBy,
	sortDirection,
	...props
}: TableProps<T>) => {
	const keyExtractor = React.useCallback((item, index) => {
		return item._id || `${index}`;
	}, []);

	return (
		<FlashList
			keyExtractor={keyExtractor}
			renderItem={({ item, index }) => <Row columns={columns} item={item} itemIndex={index} />}
			ListHeaderComponent={
				<Header columns={columns} sort={sort} sortBy={sortBy} sortDirection={sortDirection} />
			}
			ListEmptyComponent={<Empty />}
			{...props}
		/>
	);
};

export default Table;
