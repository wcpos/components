import * as React from 'react';
import { View, Dimensions, ViewStyle, StyleProp, StyleSheet } from 'react-native';

import get from 'lodash/get';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
	FadeInDown,
} from 'react-native-reanimated';

// @TODO - haptics is breaking Storybook
// import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics';
import useMeasure from '@wcpos/hooks/src/use-measure';
import usePressOutside from '@wcpos/hooks/src/use-press-outside';
import useUncontrolled from '@wcpos/hooks/src/use-uncontrolled';
import useUncontrolledState from '@wcpos/hooks/src/use-uncontrolled-state';
import Platform from '@wcpos/utils/src/platform';

import { Content, PopoverContentProps } from './content';
import { PopoverContext } from './context';
import {
	PopoverPlacement,
	isBottom,
	isEnd,
	isLeft,
	isRight,
	isStart,
	isTop,
	getArrowAlign,
	getArrowDirection,
	getContainerAlign,
	getPopoverPosition,
} from './placements';
import * as Styled from './styles';
import { Target, PopoverTargetProps } from './target';
import Arrow from '../arrow';
import Backdrop from '../backdrop';
import Portal from '../portal';
import Pressable from '../pressable';
import { useScrollEvents } from '../scrollview';

export interface PopoverProps {
	/**
	 * The content which will trigger the Popover. The Popover will be anchored to this component.
	 */
	children: React.ReactElement<PopoverTargetProps | PopoverContentProps>[];
	/**
	 * Preferred placement of the Popover. The Popover will try to place itself according to this
	 * property. However, if there is not enough space left there to show up, it will show itself
	 * in opposite direction.
	 *
	 * For example, if we set `preferredPlacement="top"`, and there is not enough space for the Popover
	 * to show itself above the triggering view, it will show at the bottom of it.
	 */
	placement?: PopoverPlacement;

	/** Controlled menu opened state. Note: Popover can be controlled or uncontrolled */
	opened?: boolean;

	/** Uncontrolled menu initial opened state */
	defaultOpened?: boolean;

	/** Called when menu opened state changes */
	onChange?(opened: boolean): void;

	/** Called when Menu is opened */
	onOpen?(): void;

	/** Called when Menu is closed */
	onClose?(): void;
	/**
	 * Method for activating an uncontrolled Popover.
	 */
	trigger?: 'press' | 'longpress' | 'hover';
	/**
	 * Called when popover closes
	 */
	onClose?(): void;
	/**
	 * Called when popover opens
	 */
	onOpen?(): void;
	/**
	 * Show arrow pointing to the target.
	 */
	withArrow?: boolean;
	/** Determines whether Popover should be rendered within Portal, defaults to false */
	withinPortal?: boolean;
	/**
	 * Show backdrop behind the Popover.
	 */
	showBackdrop?: boolean;
	/**
	 * If true, the popover and its backdrop won't be clickable and won't receive mouse events.
	 *
	 * For example, this is used by the `Tooltip` component. Prefer using the `Tooltip` component instead
	 * of this property.
	 */
	clickThrough?: boolean;
	/**
	 * Force popover to match the width of the triggering view.
	 *
	 * For example, this is used by the `Select` and `Combobox` components. Prefer using the `Select` and
	 * `Combobox` components instead of this property.
	 */
	matchWidth?: boolean;
	/**
	 *
	 */
	style?: StyleProp<ViewStyle>;
}

/**
 *
 */
export const Popover = ({
	children,
	onClose,
	onOpen,
	opened,
	defaultOpened,
	onChange,
	placement = 'bottom',
	trigger = 'press',
	withArrow = true,
	withinPortal = false,
	showBackdrop = false,
	clickThrough = false,
	matchWidth = false,
	style,
	closeOnPressOutside = true,
}: PopoverProps) => {
	const targetMeasurements = useSharedValue(null);
	const contentMeasurements = useSharedValue(null);

	/**
	 *
	 */
	const [_opened, setOpened] = useUncontrolled({
		value: opened,
		defaultValue: defaultOpened,
		finalValue: false,
		onChange,
	});

	/**
	 *
	 */
	const close = React.useCallback(() => {
		setOpened(false);
		onClose && onClose();
	}, [onClose, setOpened]);

	/** */
	return (
		<PopoverContext.Provider
			value={{
				placement,
				targetMeasurements,
				contentMeasurements,
				withArrow,
				closeOnPressOutside,
				close,
				withinPortal,
			}}
		>
			<View style={{ position: 'relative' }}>
				{React.Children.map(children, (child) => {
					if (child.type === Target) {
						return (
							<Pressable
								onPress={() => {
									setOpened(!_opened);
									onOpen && onOpen();
								}}
							>
								{child}
							</Pressable>
						);
					}
					if (child.type === Content && _opened) {
						return child;
					}
					return null;
				})}
			</View>
		</PopoverContext.Provider>
	);
};
