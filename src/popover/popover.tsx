import * as React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';

import { useSubscription } from 'observable-hooks';
import { useSharedValue, MeasuredDimensions } from 'react-native-reanimated';

// TODO - haptics is breaking Storybook
// import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics';
import useUncontrolled from '@wcpos/hooks/src/use-uncontrolled';

import { Content, PopoverContentProps } from './content';
import { PopoverContext, PortalContext } from './context';
import { isPressInsideElement } from './helpers';
import { Target, PopoverTargetProps } from './target';
import useGesture from '../gesture-detector';
import Portal from '../portal';

import type { PopoverFooterProps } from './footer';
import type { PopoverPlacement } from './helpers';

/**
 *
 */
export interface PopoverProps {
	/** Popover.Target and Popover.Content components */
	children: React.ReactElement<PopoverTargetProps | PopoverContentProps>[];

	/**
	 * Preferred placement of the Popover. The Popover will try to place itself according to this
	 * property. However, if there is not enough space left there to show up, it will show itself
	 * in opposite direction.
	 *
	 * For example, if we set `placement="top"`, and there is not enough space for the Popover
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

	/** Method for activating an uncontrolled Popover. */
	trigger?: 'press' | 'longpress' | 'hover';

	/** Called when popover closes */
	onClose?(): void;

	/** Called when popover opens */
	onOpen?(): void;

	/** Show arrow pointing to the target. */
	withArrow?: boolean;

	/** Determines whether Popover should be rendered within Portal, defaults to true */
	withinPortal?: boolean;

	/** Determines whether dropdown should be closed on outside clicks, default to true */
	closeOnPressOutside?: boolean;

	/** Force popover to match the width of the triggering view. */
	matchWidth?: boolean;

	/** */
	primaryAction?: PopoverFooterProps['primaryAction'];

	/** */
	secondaryActions?: PopoverFooterProps['secondaryActions'];

	/** */
	style?: StyleProp<ViewStyle>;
}

/**
 *
 */
export const Popover = ({
	children,
	closeOnPressOutside = true,
	defaultOpened,
	matchWidth = false,
	onChange,
	onClose,
	onOpen,
	opened = false,
	placement = 'bottom',
	trigger = 'press',
	withArrow = true,
	withinPortal = false,
	primaryAction,
	secondaryActions,
	style,
	...props
}: PopoverProps) => {
	const targetMeasurements = useSharedValue<MeasuredDimensions>(null);
	const contentMeasurements = useSharedValue<MeasuredDimensions>(null);
	const { tapEvent$ } = useGesture();

	/**
	 *
	 */
	// const [_opened, setOpened] = useUncontrolled({
	// 	value: opened,
	// 	defaultValue: defaultOpened,
	// 	finalValue: false,
	// 	onChange,
	// });
	const [_opened, setOpened] = React.useState(opened);

	/**
	 * This seems like a hack, shouldn't the change in props trigger a re-render?
	 */
	React.useEffect(() => {
		setOpened(opened);
	}, [opened]);

	/**
	 *
	 */
	useSubscription(tapEvent$, (event) => {
		if (opened && closeOnPressOutside && targetMeasurements.value && contentMeasurements.value) {
			const targetPress = isPressInsideElement(event, targetMeasurements.value);
			const contentPress = isPressInsideElement(event, contentMeasurements.value);
			if (!targetPress && !contentPress) {
				setOpened(false);
			}
		}
	});

	/**
	 *
	 */
	const context = React.useMemo(
		() => ({
			closeOnPressOutside,
			contentMeasurements,
			matchWidth,
			placement,
			targetMeasurements,
			trigger,
			withArrow,
			withinPortal,
			primaryAction,
			secondaryActions,
			onOpen: () => {
				setOpened(true);
				onOpen && onOpen();
			},
			onClose: () => {
				setOpened(false);
				onClose && onClose();
			},
		}),
		[
			closeOnPressOutside,
			contentMeasurements,
			matchWidth,
			onClose,
			onOpen,
			placement,
			primaryAction,
			secondaryActions,
			setOpened,
			targetMeasurements,
			trigger,
			withArrow,
			withinPortal,
		]
	);

	/** */
	return (
		<PopoverContext.Provider value={context}>
			<View style={{ position: 'relative' }}>
				{React.Children.map(children, (child) => {
					if (child.type === Target) {
						return child;
					}
					/**
					 * Only render the Content if the Popover is opened.
					 * Wrap the Content in a Provider so we can pass props to the portal
					 * TODO: There must be a better way to do this
					 */
					if (child.type === Content && _opened) {
						return withinPortal ? (
							<Portal keyPrefix="Popover">
								<PortalContext.Provider value={context}>{child}</PortalContext.Provider>
							</Portal>
						) : (
							child
						);
					}
				})}
			</View>
		</PopoverContext.Provider>
	);
};
