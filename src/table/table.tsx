import * as React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';

import {
	FlashList,
	FlashListProps,
	ListRenderItemInfo,
	ListRenderItem,
	CellContainer,
} from '@shopify/flash-list';
import Animated from 'react-native-reanimated';

import Empty from './empty';
import Header from './header';
import Row from './row';
import * as Styled from './styles';
import ErrorBoundary from '../error-boundary';

const AnimatedCellContainer = Animated.createAnimatedComponent(CellContainer);

/**
 *
 */
export type TableProps<T> = {
	style?: StyleProp<ViewStyle>;
	footer?: React.ReactNode;
	extraData: import('./').TableExtraDataProps<T>;
	renderItem?: ListRenderItem<T>;
} & Omit<FlashListProps<T>, 'extraData' | 'renderItem'>;

/**
 *
 */
const Table = <T extends object>({
	style,
	footer,
	renderItem,
	extraData,
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
			<ErrorBoundary>
				<Header extraData={extraData} />
			</ErrorBoundary>
			{/* 
			FIXME: FlashList complains about rendered size being not usable, but explicitly setting doesn't fix?
			<View style={{ flex: 1, width: 800, height: 700 }}> */}
			<FlashList
				keyExtractor={keyExtractor}
				ListEmptyComponent={<Empty />}
				// CellRendererComponent={(props) => {
				// 	return <CellContainer {...props} />;
				// }}
				renderItem={renderItem || defaultRenderItem}
				extraData={extraData}
				// The scrollbars on windows web and desktop are ugly
				// TODO - perhaps have a standard scrollbar for web and desktop
				// See: https://css-tricks.com/the-current-state-of-styling-scrollbars-in-css/#aa-a-cross-browser-demo-of-custom-scrollbars
				showsVerticalScrollIndicator={false}
				{...props}
			/>
			{/* </View> */}
			<ErrorBoundary>{footer}</ErrorBoundary>
		</Styled.Table>
	);
};

export default Table;
// export default React.memo(Table);
