import * as React from 'react';
import {
	View,
	ViewStyle,
	StyleProp,
	FlatListProps,
	ListRenderItemInfo,
	ListRenderItem,
} from 'react-native';

import intersectionBy from 'lodash/intersectionBy';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';
import Animated from 'react-native-reanimated';

import { TableContext } from './context';
import Empty from './empty';
import { FList } from './flist';
import Header from './header';
import LoadingRow from './loading';
import Row from './row';
import * as Styled from './styles';
import ErrorBoundary from '../error-boundary';

// const AnimatedFList = Animated.createAnimatedComponent(FList);
// const AnimatedCellContainer = Animated.createAnimatedComponent(CellContainer);

/**
 *
 */
export type TableProps<T> = {
	/**  */
	style?: StyleProp<ViewStyle>;

	/**  */
	footer?: React.ReactNode;

	/**  */
	context: import('./').TableContextProps<T>;

	/**  */
	renderItem?: ListRenderItem<T>;

	/**  */
	pageSize?: number;

	/**  */
	loading?: boolean;

	/**  */
	hideHeader?: boolean;
} & Omit<FlatListProps<T>, 'extraData' | 'renderItem'>;

/**
 *
 */
const Table = <T extends object>({
	style,
	footer,
	renderItem,
	context,
	pageSize = 10,
	loading,
	hideHeader,
	...props
}: TableProps<T>) => {
	/**
	 *
	 */
	const keyExtractor = React.useCallback((item: T, index: number) => {
		return item?.primary || `${index}`;
	}, []);

	/**
	 *
	 */
	const defaultRenderItem = React.useCallback(({ item, index }: ListRenderItemInfo<T>) => {
		return (
			<ErrorBoundary>
				<Row item={item} index={index} />
			</ErrorBoundary>
		);
	}, []);

	/**
	 *
	 */
	return (
		<TableContext.Provider value={context}>
			<Styled.Table style={style}>
				{!hideHeader && (
					<ErrorBoundary>
						<Header />
					</ErrorBoundary>
				)}
				{/* 
			FIXME: FlashList complains about rendered size being not usable, but explicitly setting doesn't fix?
			<View style={{ flex: 1, width: 800, height: 700 }}> */}
				<FList
					keyExtractor={keyExtractor}
					ListEmptyComponent={props.ListEmptyComponent || <Empty />}
					// CellRendererComponent={(props) => {
					// 	return <AnimatedCellContainer {...props} />;
					// }}
					renderItem={renderItem || defaultRenderItem}
					// The scrollbars on windows web and desktop are ugly
					// TODO - perhaps have a standard scrollbar for web and desktop
					// See: https://css-tricks.com/the-current-state-of-styling-scrollbars-in-css/#aa-a-cross-browser-demo-of-custom-scrollbars
					showsVerticalScrollIndicator={false}
					onEndReachedThreshold={0.1}
					ListFooterComponent={loading ? LoadingRow : null}
					{...props}
				/>
				{/* </View> */}
				<ErrorBoundary>{footer}</ErrorBoundary>
			</Styled.Table>
		</TableContext.Provider>
	);
};

// export default Table;
export default React.memo(Table);
