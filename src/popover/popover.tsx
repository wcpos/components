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
import useUncontrolledState from '@wcpos/hooks/src/use-uncontrolled-state';
import Platform from '@wcpos/utils/src/platform';

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
import Arrow from '../arrow';
import Backdrop from '../backdrop';
import Portal from '../portal';
import Pressable from '../pressable';
import { useScrollEvents } from '../scrollview';

export interface PopoverProps {
	/**
	 * The content which will trigger the Popover. The Popover will be anchored to this component.
	 */
	children: React.ReactNode;
	/**
	 * The content to display inside the Popover.
	 */
	content: React.ReactNode;
	/**
	 * Preferred placement of the Popover. The Popover will try to place itself according to this
	 * property. However, if there is not enough space left there to show up, it will show itself
	 * in opposite direction.
	 *
	 * For example, if we set `preferredPlacement="top"`, and there is not enough space for the Popover
	 * to show itself above the triggering view, it will show at the bottom of it.
	 */
	placement?: PopoverPlacement;
	/**
	 * Determines if Popover is visible or not.
	 * Note: Popover can be controlled or uncontrolled
	 */
	open: boolean;
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
	content,
	open = false,
	placement = 'bottom',
	trigger = 'press',
	withArrow = true,
	showBackdrop = false,
	clickThrough = false,
	matchWidth = false,
	style,
}: PopoverProps) => {
	// const onOpenOrClose = React.useCallback((value) => {
	// 	console.log(value);
	// }, []);
	// const [open, setOpen] = useUncontrolledState(openRaw, onOpenOrClose);
	const triggerRef = React.useRef<View>(null);
	const containerRef = React.useRef<View>(null);
	const {
		measurements: triggerRect,
		onLayout: onTriggerLayout,
		forceMeasure: forceTriggerMeasure,
	} = useMeasure({ ref: triggerRef });
	const {
		measurements: containerRect,
		onLayout: onContainerLayout,
		forceMeasure: forceContainerMeasure,
	} = useMeasure({ ref: containerRef });

	/**
	 * Re-measure the popover when onScroll called
	 */
	const scrollEvents = useScrollEvents();
	scrollEvents.subscribe(() => {
		forceTriggerMeasure();
	});

	/**
	 * Hack to make sure the position is always re-measured on open
	 */
	React.useEffect(() => {
		if (open) {
			forceTriggerMeasure();
			forceContainerMeasure();
		}
	}, [forceContainerMeasure, forceTriggerMeasure, open]);

	/**
	 * Add haptic feedback when the popover is opened
	 */
	// const handleOpen = React.useCallback(() => {
	// 	setOpen(true);
	// 	if (Platform.isNative) {
	// 		// 	impactAsync(ImpactFeedbackStyle.Light).catch((err) => {
	// 		// 		console.log(err);
	// 		// 	});
	// 	}
	// }, []);

	/**
	 *
	 */
	// const handlePress = React.useCallback(() => {
	// 	// setVisible((prev) => !prev);
	// 	if (!open) {
	// 		handleOpen();
	// 	} else {
	// 		setOpen(false);
	// 	}
	// }, [handleOpen, open, setOpen]);

	// const handleHoverIn = React.useCallback(() => {
	// 	if (trigger === 'hover') setOpen(true);
	// }, [setOpen, trigger]);

	// const handleHoverOut = React.useCallback(() => {
	// 	if (trigger === 'hover') setOpen(false);
	// }, [setOpen, trigger]);

	/**
	 * Special case for Pressables and Icons
	 * - clone and wrap touch events
	 */
	// const triggerElement = React.useMemo(() => {
	// 	if (React.Children.count(children) === 1) {
	// 		const type = get(children, ['type', 'name']);
	// 		if (type === 'Pressable' || type === 'Icon' || type === 'Button') {
	// 			const child = React.Children.only(children) as React.ReactElement;
	// 			const { onPress, onHoverIn, onHoverOut } = child.props;
	// 			return React.cloneElement(child, {
	// 				onPress: (event: any) => {
	// 					handlePress();
	// 					onPress?.(event);
	// 				},
	// 				onHoverIn: (event: any) => {
	// 					handleHoverIn();
	// 					onHoverIn?.(event);
	// 				},
	// 				onHoverOut: (event: any) => {
	// 					handleHoverOut();
	// 					onHoverOut?.(event);
	// 				},
	// 			});
	// 		}
	// 	}

	// 	return ref ? (
	// 		children
	// 	) : (
	// 		<Pressable onPress={handlePress} onHoverIn={handleHoverIn} onHoverOut={handleHoverOut}>
	// 			{children}
	// 		</Pressable>
	// 	);
	// }, [children, handleHoverIn, handleHoverOut, handlePress, ref]);

	/**
	 *
	 */
	const containerStyle = useAnimatedStyle(() => {
		if (!triggerRect.value || !containerRect.value) {
			return {}; // @TODO why is measurements.value undefined in react-native.
		}

		// @TODO - use `entering` when reanimated is stable
		const opacity = withTiming(open ? 1 : 0, { duration: 200 });
		const position = getPopoverPosition(placement, triggerRect.value, containerRect.value);
		return { opacity, ...position };
	});

	const arrow = (
		<Arrow
			color={(style && StyleSheet.flatten(style).backgroundColor) || '#fff'}
			direction={getArrowDirection(placement)}
			style={[getArrowAlign(placement), { zIndex: 10 }]}
			size="small"
		/>
	);

	/**
	 *
	 */
	return (
		<>
			<View ref={triggerRef} onLayout={onTriggerLayout}>
				{children}
			</View>
			{open && (
				<Portal keyPrefix="Popover">
					{/* <Backdrop
						invisible={!showBackdrop}
						clickThrough={clickThrough || trigger === 'hover'}
						onPress={handlePress}
					/> */}
					<Styled.Container
						as={Animated.View}
						style={[containerStyle, { width: matchWidth ? triggerRect.value.width : undefined }]}
						ref={containerRef as any}
						onLayout={onContainerLayout}
						entering={FadeInDown}
					>
						{withArrow && (isBottom(placement) || isRight(placement)) && arrow}
						<Styled.Popover style={style}>{content}</Styled.Popover>
						{withArrow && (isTop(placement) || isLeft(placement)) && arrow}
					</Styled.Container>
				</Portal>
			)}
		</>
	);
};

// export const Popover = React.forwardRef(PopoverBase);
