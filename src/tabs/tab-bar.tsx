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
import Button from '../button';
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
	const tabRefs = React.useMemo(() => routes.map(() => React.createRef<View>()), [routes]);
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
	 *
	 */
	React.useEffect(() => {
		if (focusedIndex >= 0) {
			const activeTabRef = tabRefs[focusedIndex].current;
			if (activeTabRef) {
				activeTabRef.measure((x, y, width, height, pageX, pageY) => {
					scroll.value = x - containerWidth.value / 2 + width / 2;
				});
			}
		}
	}, [containerWidth.value, focusedIndex, scroll, tabRefs]);

	/**
	 *
	 */
	return (
		<View style={{ flexDirection: 'row' }}>
			<ScrollView
				onLayout={onLayout}
				ref={scrollViewRef}
				horizontal={direction === 'horizontal'}
				showsHorizontalScrollIndicator={false}
				// pagingEnabled
				onContentSizeChange={(w, h) => {
					totalWidth.value = w;
				}}
				style={{ width: '100%' }}
			>
				<Box horizontal space="xSmall" padding="xSmall" style={{ width: '100%' }}>
					{routes.map((route, i) => {
						const focused = i === focusedIndex;
						return (
							<View key={route.key} ref={tabRefs[i]}>
								<TabItem title={route.title} onPress={() => onIndexChange(i)} focused={focused} />
							</View>
						);
					})}
				</Box>
			</ScrollView>
			{scrollable && (
				<Box horizontal space="xSmall" padding="xSmall">
					<Button
						onPress={() => {
							if (focusedIndex > 0) {
								onIndexChange(focusedIndex - 1);
							}
						}}
					>
						<Icon name="caretLeft" />
					</Button>
					<Button
						onPress={() => {
							if (focusedIndex < routes.length - 1) {
								onIndexChange(focusedIndex + 1);
							}
						}}
					>
						<Icon name="caretRight" />
					</Button>
				</Box>
			)}
		</View>
	);
};

export default TabBar;
