import * as React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';

import intersectionBy from 'lodash/intersectionBy';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';
import Animated from 'react-native-reanimated';

import Empty from './empty';
import Header from './header';
import LoadingRow from './loading';
import Row from './row';
import * as Styled from './styles';
import ErrorBoundary from '../error-boundary';
import {
	FlashList,
	FlashListProps,
	ListRenderItemInfo,
	ListRenderItem,
	CellContainer,
} from '../flash-list';

const AnimatedFlashList = Animated.createAnimatedComponent(FlashList);
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
	extraData: import('./').TableExtraDataProps<T>;

	/**  */
	renderItem?: ListRenderItem<T>;

	/**  */
	pageSize?: number;

	/**  */
	loading?: boolean;

	/**  */
	hideHeader?: boolean;
} & Omit<FlashListProps<T>, 'extraData' | 'renderItem'>;

/**
 *
 */
const Table = <T extends object>({
	style,
	footer,
	renderItem,
	extraData,
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
	const defaultRenderItem = React.useCallback(
		({ item, index, extraData: context, target }: ListRenderItemInfo<T>) => (
			<ErrorBoundary>
				<Row item={item} index={index} extraData={context} target={target} />
			</ErrorBoundary>
		),
		[]
	);

	/**
	 *
	 */
	return (
		<Styled.Table style={style}>
			{!hideHeader && (
				<ErrorBoundary>
					<Header extraData={extraData} />
				</ErrorBoundary>
			)}
			{/* 
			FIXME: FlashList complains about rendered size being not usable, but explicitly setting doesn't fix?
			<View style={{ flex: 1, width: 800, height: 700 }}> */}
			<AnimatedFlashList
				keyExtractor={keyExtractor}
				ListEmptyComponent={props.ListEmptyComponent || <Empty />}
				// CellRendererComponent={(props) => {
				// 	return <AnimatedCellContainer {...props} />;
				// }}
				renderItem={renderItem || defaultRenderItem}
				extraData={extraData}
				// The scrollbars on windows web and desktop are ugly
				// TODO - perhaps have a standard scrollbar for web and desktop
				// See: https://css-tricks.com/the-current-state-of-styling-scrollbars-in-css/#aa-a-cross-browser-demo-of-custom-scrollbars
				showsVerticalScrollIndicator={false}
				onEndReachedThreshold={0.5}
				ListFooterComponent={loading ? LoadingRow : null}
				{...props}
			/>
			{/* </View> */}
			<ErrorBoundary>{footer}</ErrorBoundary>
		</Styled.Table>
	);
};

// export default Table;
export default React.memo(Table);
