import * as React from 'react';
import { ViewStyle, NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import Header from './header';
import TableRow from './row';
import EmptyRow from './empty';
import VirtualList from './virtual-list';
import StaticList from './static-list';
import * as Styled from './styles';

export type SortDirection = 'asc' | 'desc';

export interface SortProps {
	defaultSortDirection?: SortDirection;
	event: NativeSyntheticEvent<NativeTouchEvent>;
	sortBy: string | number;
	sortDirection?: SortDirection;
}

export type Sort = (props: SortProps) => void;

export interface ColumnProps<T = any> {
	key: keyof T & string;
	onRender?: (item: T, column: ColumnProps<T>, index: number) => React.ReactNode;
	label: string;
	hide?: boolean;
	disableSort?: boolean;
	hideLabel?: boolean;
	flexGrow?: 0 | 1;
	flexShrink?: 0 | 1;
	flexBasis?: any;
	width?: string;
	defaultSortDirection?: SortDirection;
	align?: 'left' | 'center' | 'right';
}

export interface TableProps<T> {
	/**
	 * The data source to render
	 */
	data: T[];
	columns: ColumnProps<T>[];
	style?: ViewStyle;
	emptyRenderer?: () => React.ReactNode;
	/**
	 * additional context that will be passed verbatim to the itemRenderer, so that it can be easily memoized
	 */
	context?: any;
	/**
	 * Takes care of rendering an item
	 * @param item The item as stored in the dataSource
	 * @param index The index of the item being rendered. The index represents the offset in the _visible_ items of the dataSource
	 * @param context The optional context passed into this DataSourceRenderer
	 */
	rowRenderer?: (item: T, index: number, context: any) => React.ReactNode;
	enableColumnHeaders?: boolean;
	footer?: React.ReactNode;
	sort?: Sort;
	sortBy?: keyof T & string;
	sortDirection?: SortDirection;
	virtual?: boolean;
	striped?: boolean;
}

const Table = <T extends object>({
	data,
	columns,
	style,
	enableColumnHeaders = true,
	footer,
	sort,
	sortBy,
	sortDirection,
	virtual,
	rowRenderer,
	striped,
}: TableProps<T>) => {
	const virtualize = React.useMemo(
		() => (virtual === undefined ? data.length > 50 : virtual),
		[virtual, data.length]
	);

	/**
	 *
	 */
	const defaultRowRenderer = React.useCallback(
		(
			item,
			index
			// renderContext: TableRowRenderContext<T>,
		) => {
			return (
				<TableRow<T>
					// config={renderContext}
					item={item}
					columns={columns}
					itemIndex={index}
				/>
			);
		},
		[columns]
	);

	const header = enableColumnHeaders && (
		<Header<T> columns={columns} sort={sort} sortBy={sortBy} sortDirection={sortDirection} />
	);

	return (
		<Styled.Table style={style}>
			{header}
			{virtualize ? (
				<VirtualList<T> data={data} rowRenderer={rowRenderer || defaultRowRenderer} />
			) : (
				<StaticList<T> data={data} rowRenderer={rowRenderer || defaultRowRenderer} />
			)}
			{footer}
		</Styled.Table>
	);
};

Table.Row = TableRow;
export default Table;
