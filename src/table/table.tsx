import * as React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { FlashList, FlashListProps, ListRenderItem, ListRenderItemInfo } from '@shopify/flash-list';
import Row from './row';
import Header from './header';
import Empty from './empty';
import * as Styled from './styles';
import { TableContext, TableContextProps } from './context';
import ErrorBoundary from '../error-boundary';

export type TableProps<T> = {
	style?: StyleProp<ViewStyle>;
	footer?: React.ReactNode;
	context?: TableContextProps<T>;
} & Omit<FlashListProps<T>, 'renderItem'> & {
		renderItem?: ListRenderItem<T> | null | undefined;
	};

/**
 *
 */
const Table = <T extends object>({
	style,
	footer,
	renderItem,
	context,
	...props
}: TableProps<T>) => {
	/**
	 *
	 */
	const keyExtractor = React.useCallback((item: T, index: number) => {
		return item._id || `${index}`;
	}, []);

	/**
	 *
	 */
	const defaultRenderItem = React.useCallback(
		({ item, index }: ListRenderItemInfo<T>) => (
			<ErrorBoundary>
				<Row item={item} itemIndex={index} />
			</ErrorBoundary>
		),
		[]
	);

	/**
	 *
	 */
	return (
		<TableContext.Provider value={context}>
			<Styled.Table style={style}>
				<ErrorBoundary>
					<Header />
				</ErrorBoundary>
				<FlashList
					keyExtractor={keyExtractor}
					ListEmptyComponent={<Empty />}
					renderItem={renderItem || defaultRenderItem}
					{...props}
				/>
				<ErrorBoundary>{footer}</ErrorBoundary>
			</Styled.Table>
		</TableContext.Provider>
	);
};

export default Table;
