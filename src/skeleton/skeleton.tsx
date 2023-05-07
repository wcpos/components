import * as React from 'react';
import { ViewStyle } from 'react-native';

import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withRepeat,
	withTiming,
	Easing,
} from 'react-native-reanimated';

import * as Styled from './styles';

/**
 *
 */
export type Borders = 'square' | 'rounded' | 'circular';

/**
 *
 */
export interface SkeletonProps {
	/**
	 *
	 */
	width?: number | string;
	/**
	 *
	 */
	height?: number | string;
	/**
	 *
	 */
	border?: Borders;
	/**
	 *
	 */
	style?: ViewStyle;
}

/**
 *
 */
export const Skeleton = ({ width, height, border = 'rounded', style }: SkeletonProps) => {
	const opacity = useSharedValue(0.6);

	/**
	 *
	 */
	React.useEffect(() => {
		opacity.value = withRepeat(withTiming(1, { duration: 1000, easing: Easing.ease }), -1, true);
	}, [opacity]);

	/**
	 *
	 */
	const animatedStyle = useAnimatedStyle(() => ({
		opacity: opacity.value,
	}));

	return (
		<Styled.Container
			as={Animated.View}
			style={[{ width, height }, style, animatedStyle]}
			border={border}
		/>
	);
};
