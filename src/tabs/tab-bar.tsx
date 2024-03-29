import * as React from 'react';
import { ScrollView, LayoutChangeEvent, View, StyleProp, ViewStyle } from 'react-native';

import {
	scrollTo,
	useAnimatedRef,
	useDerivedValue,
	useSharedValue,
	useAnimatedReaction,
	runOnJS,
} from 'react-native-reanimated';

import Platform from '@wcpos/utils/src/platform';

import { TabItem } from './tab-item';
import Box from '../box';
import Button from '../button';
import Icon from '../icon';

export interface TabBarProps {
	routes: import('./tabs').Route[];
	onIndexChange: (index: number) => void;
	direction?: 'horizontal' | 'vertical';
	focusedIndex: number;
	style?: StyleProp<ViewStyle>;
}

export const TabBar = ({
	routes,
	onIndexChange,
	direction = 'horizontal',
	focusedIndex,
	style,
}: TabBarProps) => {
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
	 * TODO - react-native throws an error with this
	 * tried to sychronously call function setScrollable
	 * cannot set state in useAnimatedReaction
	 */
	useAnimatedReaction(
		() => {
			return totalWidth.value > containerWidth.value;
		},
		(result, previous) => {
			if (result !== previous) {
				runOnJS(setScrollable)(result);
			}
		},
		[totalWidth, containerWidth, setScrollable]
	);

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
		<View style={{ flexDirection: 'row', width: direction === 'vertical' ? 200 : 'auto' }}>
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
				<Box
					horizontal={direction === 'horizontal'}
					space="xSmall"
					padding="xSmall"
					style={[{ width: '100%' }, style]}
				>
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
				<Box horizontal space="xSmall" padding="xSmall" style={style}>
					<Button
						onPress={() => {
							if (focusedIndex > 0) {
								onIndexChange(focusedIndex - 1);
							}
						}}
					>
						<Icon name="caretLeft" type="inverse" />
					</Button>
					<Button
						onPress={() => {
							if (focusedIndex < routes.length - 1) {
								onIndexChange(focusedIndex + 1);
							}
						}}
					>
						<Icon name="caretRight" type="inverse" />
					</Button>
				</Box>
			)}
		</View>
	);
};
