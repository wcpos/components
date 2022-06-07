import * as React from 'react';
import { ScrollView, LayoutChangeEvent } from 'react-native';
import Animated, {
	Easing,
	scrollTo,
	useAnimatedRef,
	useDerivedValue,
	useSharedValue,
	useAnimatedStyle,
	withTiming,
} from 'react-native-reanimated';
import Platform from '@wcpos/utils/src/platform';
// import useMeasure from '@wcpos/hooks/src/use-measure';
import Box from '../box';
import Icon from '../icon';
import Pressable from '../pressable';
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
	const hovered = useSharedValue(false);

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
	const leftArrowStyle = useAnimatedStyle(() => {
		return {
			display: hovered.value ? 'flex' : 'none',
		};
	});

	/**
	 *
	 */
	const rightArrowStyle = useAnimatedStyle(() => {
		console.log(hovered.value);
		return {
			display: hovered.value ? 'flex' : 'none',
		};
	});

	/**
	 *
	 */
	return (
		<Pressable
			onLayout={onLayout}
			// horizontal={direction === 'horizontal'}
			style={{ position: 'relative' }}
			onHoverIn={() => {
				console.log('hover in');
				hovered.value = true;
			}}
			onHoverOut={() => {
				console.log('hover out');
				hovered.value = false;
			}}
		>
			<ScrollView
				ref={scrollViewRef}
				horizontal={direction === 'horizontal'}
				showsHorizontalScrollIndicator={false}
				pagingEnabled
				onContentSizeChange={(w, h) => {
					totalWidth.value = w;
				}}
			>
				<Box horizontal space="medium" padding="medium">
					{routes.map((route, i) => {
						const focused = i === focusedIndex;
						return (
							<TabItem
								key={route.key}
								title={route.title}
								onPress={() => onIndexChange(i)}
								focused={focused}
							/>
						);
					})}
				</Box>
			</ScrollView>
			<Animated.View style={leftArrowStyle}>
				<Pressable
					style={{
						backgroundColor: 'black',
						width: 20,
						height: '100%',
						position: 'absolute',
						left: 0,
						display: 'none',
					}}
					align="center"
					distribution="center"
					// onHoverIn={() => {
					// 	console.log('hi');
					// 	scroll.value += 10;
					// }}
					onPress={() => {
						if (scroll.value > 0) {
							scroll.value -= containerWidth.value / 2;
						}
					}}
				>
					<Icon name="caretLeft" />
				</Pressable>
			</Animated.View>
			<Animated.View
				style={[
					{ position: 'absolute', right: 0, width: 20, height: '100%', backgroundColor: 'black' },
					rightArrowStyle,
				]}
			>
				<Pressable
					style={{ width: '100%', height: '100%' }}
					align="center"
					distribution="center"
					// onHoverIn={() => {
					// 	console.log('hi');
					// 	scroll.value += 10;
					// }}
					onPress={() => {
						if (scroll.value < totalWidth.value - containerWidth.value) {
							scroll.value += containerWidth.value / 2;
						}
					}}
				>
					<Icon name="caretRight" />
				</Pressable>
			</Animated.View>
		</Pressable>
	);
};

export default TabBar;
