import * as React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { FlashList, FlashListProps, ListRenderItemInfo, ListRenderItem } from '@shopify/flash-list';
import useWhyDidYouUpdate from '@wcpos/hooks/src/use-why-did-you-update';
import Row from './row';
import Header from './header';
import Empty from './empty';
import * as Styled from './styles';
import ErrorBoundary from '../error-boundary';

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

	useWhyDidYouUpdate('Table', {
		style,
		footer,
		renderItem,
		extraData,
		keyExtractor,
		defaultRenderItem,
	});

	/**
	 *
	 */
	return (
		<Styled.Table style={style}>
			<ErrorBoundary>
				<Header extraData={extraData} />
			</ErrorBoundary>
			<FlashList
				keyExtractor={keyExtractor}
				ListEmptyComponent={<Empty />}
				renderItem={renderItem || defaultRenderItem}
				extraData={extraData}
				// The scrollbars on windows web and desktop are ugly
				// @TODO - perhaps have a standard scrollbar for web and desktop
				// See: https://css-tricks.com/the-current-state-of-styling-scrollbars-in-css/#aa-a-cross-browser-demo-of-custom-scrollbars
				showsVerticalScrollIndicator={false}
				{...props}
			/>
			<ErrorBoundary>{footer}</ErrorBoundary>
		</Styled.Table>
	);
};

export default Table;
