import * as React from 'react';
import { ScrollView, LayoutChangeEvent, View } from 'react-native';
import {
	scrollTo,
	useAnimatedRef,
	useDerivedValue,
	useSharedValue,
	useAnimatedReaction,
} from 'react-native-reanimated';
import Platform from '@wcpos/utils/src/platform';
import Box from '../box';
import Icon from '../icon';
import TabItem from './tab-item';

export interface TabBarProps {
	routes: import('./tabs').Route[];
	onIndexChange: (index: number) => void;
	direction?: 'horizontal' | 'vertical';
	focusedIndex: number;
}

const TabBar = ({ routes, onIndexChange, direction = 'horizontal', focusedIndex }: TabBarProps) => {
	const scrollViewRef = useAnimatedRef<ScrollView>();
	const scroll = useSharedValue(0);
	const totalWidth = useSharedValue(0);
	const containerWidth = useSharedValue(0);
	const [scrollable, setScrollable] = React.useState(false);

	/**
	 *
	 */
	const onLayout = ({ nativeEvent }: LayoutChangeEvent) => {
		containerWidth.value = nativeEvent.layout.width;
	};

	/**
	 *
	 */
	useDerivedValue(() => {
		if (Platform.OS === 'web') {
			if (scrollViewRef && scrollViewRef.current) {
				scrollViewRef.current.scrollTo({ x: scroll.value });
			}
		} else {
			scrollTo(scrollViewRef, scroll.value, 0, true);
		}
	});

	/**
	 *
	 */
	useAnimatedReaction(() => {
		return totalWidth.value > containerWidth.value;
	}, setScrollable);

	/**
	 * Super hacky way to scroll to the right position
	 */
	const handleIndexChange = (index: number) => {
		onIndexChange(index);
		scroll.value = index * ((totalWidth.value - containerWidth.value + 100) / routes.length);
	};

	/**
	 *
	 */
	return (
		<View onLayout={onLayout} style={{ flexDirection: 'row' }}>
			<ScrollView
				ref={scrollViewRef}
				horizontal={direction === 'horizontal'}
				showsHorizontalScrollIndicator={false}
				// pagingEnabled
				onContentSizeChange={(w, h) => {
					totalWidth.value = w;
				}}
				style={{ width: '100%' }}
			>
				<Box horizontal space="medium" padding="medium" style={{ width: '100%' }}>
					{routes.map((route, i) => {
						const focused = i === focusedIndex;
						return (
							<TabItem
								key={route.key}
								title={route.title}
								onPress={() => handleIndexChange(i)}
								focused={focused}
							/>
						);
					})}
				</Box>
			</ScrollView>
			{scrollable && (
				<Box horizontal space="medium" padding="medium">
					<Icon
						name="caretLeft"
						onPress={() => {
							if (focusedIndex > 0) {
								handleIndexChange(focusedIndex - 1);
							}
						}}
					/>
					<Icon
						name="caretRight"
						onPress={() => {
							if (focusedIndex < routes.length - 1) {
								handleIndexChange(focusedIndex + 1);
							}
						}}
					/>
				</Box>
			)}
		</View>
	);
};

export default TabBar;
