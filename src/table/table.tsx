import * as React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { FlashList, FlashListProps } from '@shopify/flash-list';
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
} & FlashListProps<T>;

/**
 *
 */
const defaultRenderItem = ({ item, index }) => (
	<ErrorBoundary>
		<Row item={item} itemIndex={index} />
	</ErrorBoundary>
);

/**
 *
 */
const Table = <T extends object>({
	style,
	footer,
	renderItem = defaultRenderItem,
	context,
	...props
}: TableProps<T>) => {
	/**
	 *
	 */
	const keyExtractor = React.useCallback((item, index) => {
		return item._id || `${index}`;
	}, []);

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
					renderItem={renderItem}
					{...props}
				/>
				<ErrorBoundary>{footer}</ErrorBoundary>
			</Styled.Table>
		</TableContext.Provider>
	);
};

export default Table;
