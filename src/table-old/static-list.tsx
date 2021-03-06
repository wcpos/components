import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import get from 'lodash/get';
import { RedrawContext } from '.';
import EmptyRow from './empty';
import ScrollView from '../scrollview';

export interface StaticListProps<T extends object, C> {
	/**
	 * The data source to render
	 */
	data: T[];
	style?: ViewStyle;
	/**
	 * additional context that will be passed verbatim to the itemRenderer, so that it can be easily memoized
	 */
	context?: C;
	/**
	 * Takes care of rendering an item
	 * @param item The item as stored in the dataSource
	 * @param index The index of the item being rendered. The index represents the offset in the _visible_ items of the dataSource
	 * @param context The optional context passed into this DataSourceRenderer
	 */
	rowRenderer: (item: T, index: number, context: any) => React.ReactNode;
	emptyRenderer?: () => React.ReactNode;
}

/**
 * This component is UI agnostic, and just takes care of rendering all items in the DataSource.
 * This component does not apply virtualization, so don't use it for large datasets!
 */
const StaticList = <T extends object, C = any>({
	data,
	style,
	context,
	emptyRenderer = () => <EmptyRow />,
	rowRenderer,
}: StaticListProps<T, C>) => {
	// render scheduling
	const [_, setForceUpdate] = React.useState(0);

	const redraw = React.useCallback(() => {
		setForceUpdate((x) => x + 1);
	}, []);

	/**
	 *
	 */
	const keyExtractor = React.useCallback(
		(item: any, index: number) => get(item, 'localID') || index,
		[]
	);

	return (
		<RedrawContext.Provider value={redraw}>
			{/* <View onKeyDown={onKeyDown} tabIndex={0}> */}
			<ScrollView>
				{data.length === 0
					? emptyRenderer?.()
					: data.map((item, index) => {
							return (
								<View key={keyExtractor(item, index)}>{rowRenderer(item, index, context)}</View>
							);
					  })}
			</ScrollView>
		</RedrawContext.Provider>
	);
};

export default React.memo(StaticList);
