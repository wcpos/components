import * as React from 'react';
import { NativeSyntheticEvent, NativeTouchEvent, StyleSheet } from 'react-native';

import isFunction from 'lodash/isFunction';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import * as Styled from './styles';
import Pressable from '../pressable';

export interface BackdropProps {
	/**
	 * Determines if Backdrop is visible or not.
	 */
	// open: boolean;
	/**
	 * Determines if Popover is transparent or not.
	 */
	invisible?: boolean;
	/**
	 * If true, the popover and its backdrop won't be clickable and won't receive mouse events.
	 *
	 * For example, this is used by the `Tooltip` component. Prefer using the `Tooltip` component instead
	 * of this property.
	 */
	clickThrough?: boolean;
	/**
	 * Called when the Backdrop is pressed
	 */
	onPress?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
	/**
	 * Backdrop children
	 */
	children?: React.ReactNode;
}

/**
 *
 */
export const Backdrop = ({
	// open,
	invisible = false,
	clickThrough = false,
	onPress,
	children,
}: BackdropProps) => {
	const handlePress = (event: NativeSyntheticEvent<NativeTouchEvent>) => {
		if (isFunction(onPress)) onPress(event);
	};

	const contentView = (
		<Styled.Backdrop
			as={Animated.View}
			// entering={FadeIn}
			// exiting={FadeOut} // this was causing a getBoundingClientRect error from react-native-reanimated
			style={[
				invisible && { backgroundColor: 'transparent' },
				{ pointerEvents: !clickThrough ? 'auto' : 'none' },
			]}
		>
			{children}
		</Styled.Backdrop>
	);

	return clickThrough ? (
		contentView
	) : (
		<Pressable
			style={{ ...StyleSheet.absoluteFillObject, flex: 1, cursor: 'default' }}
			onPress={handlePress}
		>
			{contentView}
		</Pressable>
	);
};
