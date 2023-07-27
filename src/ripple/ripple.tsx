import * as React from 'react';

import Animated, {
	useAnimatedStyle,
	withTiming,
	Easing,
	useAnimatedReaction,
} from 'react-native-reanimated';

import * as Styled from './styles';

export interface RippleProps {
	showRipple: Animated.SharedValue<boolean>;
}

export const Ripple = ({ showRipple }: RippleProps) => {
	const rippleScale = useAnimatedStyle(() => ({
		transform: `scale(${withTiming(showRipple.value ? 1.5 : 0, {
			duration: 200,
			easing: Easing.out(Easing.quad),
		})})`,
	}));

	// useAnimatedReaction(
	// 	() => showRipple.value,
	// 	(result) => {
	// 		console.log(`showRipple value has changed to: ${result}`);
	// 	}
	// );

	return (
		<Styled.RippleEffect as={Animated.View} style={[{ pointerEvents: 'none' }, rippleScale]} />
	);
};
