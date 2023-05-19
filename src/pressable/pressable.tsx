import * as React from 'react';
import {
	Pressable as RNPressable,
	StyleSheet,
	StyleProp,
	ViewStyle,
	View,
	PressableStateCallbackType,
} from 'react-native';

export type PressableProps = import('react-native').PressableProps & {
	onHoverIn?: () => void;
	onHoverOut?: () => void;
};

/**
 *
 */
export const Pressable = React.forwardRef<View, PressableProps>((props, ref) => {
	const { style, ...restProps } = props;

	const resolvedStyle = React.useCallback(
		(state: PressableStateCallbackType) => {
			let finalStyle: StyleProp<ViewStyle> = {};

			if (typeof style === 'function') {
				const dynamicStyle = style(state);
				finalStyle = StyleSheet.compose(dynamicStyle, { flexDirection: 'row' });
			} else {
				finalStyle = StyleSheet.compose({ flexDirection: 'row' }, style);
			}

			return finalStyle;
		},
		[style]
	);

	return <RNPressable style={resolvedStyle} ref={ref} {...restProps} />;
});
