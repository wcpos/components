import * as React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';

import { useObservableRef } from 'observable-hooks';
import { useSharedValue, MeasuredDimensions } from 'react-native-reanimated';
// import { switchMap, tap, filter } from 'rxjs/operators';

// TODO - haptics is breaking Storybook
// import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics';

import { Content, PopoverContentProps } from './content';
import { PopoverContext, PortalContext } from './context';
// import { isPressInsideElement } from './helpers';
import { Target, PopoverTargetProps } from './target';
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

	/**
	 * If true, the popover and its backdrop won't be clickable and won't receive mouse events.
	 *
	 * For example, this is used by the `Tooltip` component. Prefer using the `Tooltip` component instead
	 * of this property.
	 */
	clickThrough?: boolean;

	/** Force popover to match the width of the triggering view. */
	matchWidth?: boolean;

	/** */
	primaryAction?: PopoverFooterProps['primaryAction'];

	/** */
	secondaryActions?: PopoverFooterProps['secondaryActions'];

	/** */
	style?: StyleProp<ViewStyle>;

	/** contexted passed  down to the portal */
	context?: Record<string, unknown>;
}

/**
 *
 */
export const Popover = ({
	children,
	closeOnPressOutside = true,
	clickThrough = false,
	defaultOpened,
	matchWidth = false,
	onChange,
	onClose,
	onOpen,
	opened = false,
	placement = 'bottom',
	trigger = 'press',
	withArrow = true,
	// withinPortal = false,
	style,
	...props
}: PopoverProps) => {
	const [primaryActionRef, primaryAction$] = useObservableRef(props.primaryAction);
	const [secondaryActionsRef, secondaryActions$] = useObservableRef(props.secondaryActions);

	const targetMeasurements = useSharedValue<MeasuredDimensions>({
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		pageX: 0,
		pageY: 0,
	});
	const contentMeasurements = useSharedValue<MeasuredDimensions>({
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		pageX: 0,
		pageY: 0,
	});

	/**
	 * BUG FIX: for some reason the user dropdown menu was giving the wrong measurements
	 * Is there any reason not to use the portal for all popovers?
	 */
	const withinPortal = true;

	/**
	 * TODO: Uncontrolled state
	 * Generally a component should decide when to open/close the popover, but if there is no
	 * onOpen or onClose handlers, perhaps we should manage the open state internally?
	 */

	/**
	 * Convenience functions to set the primary and secondary actions
	 * Also, sync the refs with the props
	 */
	const setPrimaryAction = React.useCallback(
		(newPrimaryAction) => {
			primaryActionRef.current = newPrimaryAction;
		},
		[primaryActionRef]
	);

	const setSecondaryActions = React.useCallback(
		(newSecondaryActions) => {
			secondaryActionsRef.current = newSecondaryActions;
		},
		[secondaryActionsRef]
	);

	React.useEffect(() => {
		primaryActionRef.current = props.primaryAction;
	}, [props.primaryAction, primaryActionRef]);

	React.useEffect(() => {
		secondaryActionsRef.current = props.secondaryActions;
	}, [props.secondaryActions, secondaryActionsRef]);

	/**
	 * HACK: bit of a hack to detect clicks outside of the popover
	 * This could probably be improved
	 */
	// const { tapEvent$ } = useGesture();
	// const tapsWhenOpened$ = useObservable(
	// 	(inputs$) =>
	// 		inputs$.pipe(
	// 			filter(([isOpen]) => isOpen),
	// 			switchMap(() => tapEvent$)
	// 		),
	// 	[opened]
	// );
	// useSubscription(tapsWhenOpened$, (event) => {
	// 	const contentPress = isPressInsideElement(event, contentMeasurements.value);
	// 	const targetPress = isPressInsideElement(event, targetMeasurements.value);
	// 	if (closeOnPressOutside && !contentPress && !targetPress) {
	// 		onClose && onClose();
	// 	}
	// });

	/**
	 * @TODO - I need to clean this up, some props can be passed directly to the content, eg:
	 * primaryAction$ and secondaryActions$
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
			primaryAction: primaryActionRef.current,
			secondaryActions: secondaryActionsRef.current,
			setPrimaryAction,
			setSecondaryActions,
			primaryAction$,
			secondaryActions$,
			onOpen,
			onClose,
			clickThrough,
		}),
		[
			closeOnPressOutside,
			contentMeasurements,
			matchWidth,
			placement,
			targetMeasurements,
			trigger,
			withArrow,
			withinPortal,
			primaryActionRef,
			secondaryActionsRef,
			setPrimaryAction,
			setSecondaryActions,
			primaryAction$,
			secondaryActions$,
			onOpen,
			onClose,
			clickThrough,
		]
	);

	if (props.context) {
		Object.assign(context, props.context);
	}

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
					if (child.type === Content && opened) {
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
