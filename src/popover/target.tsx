import * as React from 'react';

import delay from 'lodash/delay';
import isFunction from 'lodash/isFunction';
import pick from 'lodash/pick';

import useMeasure from '@wcpos/hooks/src/use-measure';

import { usePopover } from './context';
import Pressable from '../pressable';
// import { useScrollEvents } from '../scrollview';

/**
 *
 */
export interface PopoverTargetProps {
	/** The content which will trigger the Popover. The Popover will be anchored to this component. */
	children: React.ReactNode;
}

/**
 *
 */
export const Target = ({ children }: PopoverTargetProps) => {
	const { targetMeasurements, onOpen, onClose, trigger } = usePopover();
	const { MeasureWrapper, forceMeasure } = useMeasure({
		onMeasure: (val) => {
			targetMeasurements.value = val;
		},
	});

	/**
	 *
	 */
	const handleOpen = React.useCallback(
		(delayTime = 0) => {
			forceMeasure();
			if (isFunction(onOpen)) {
				delay(onOpen, delayTime);
			}
		},
		[forceMeasure, onOpen]
	);

	/**
	 *
	 */
	const triggerProps = React.isValidElement(children)
		? pick(children.props, ['onPress', 'onLongPress', 'onHoverIn', 'onHoverOut'])
		: {};

	const wrappedTriggerProps = {
		onPress: () => {
			if (trigger === 'press') {
				handleOpen();
			}
			triggerProps.onPress && triggerProps.onPress();
		},
		onLongPress: () => {
			if (trigger === 'longpress') {
				handleOpen();
			}
			triggerProps.onLongPress && triggerProps.onLongPress();
		},
		/**
		 * NOTE: The tooltips were causing flickering so I added a delay
		 * It seemed to be a conflict with the ripple animation
		 */
		onHoverIn: () => {
			if (trigger === 'hover') {
				handleOpen(20);
			}
			triggerProps.onHoverIn && triggerProps.onHoverIn();
		},
		onHoverOut: () => {
			if (trigger === 'hover') {
				onClose && delay(onClose, 25);
			}
			triggerProps.onHoverOut && triggerProps.onHoverOut();
		},
	};

	const isPressableChild = React.isValidElement(children) && Object.keys(triggerProps).length > 0;

	/**
	 * If the child is a Pressable, we need to clone and wrap the onPress
	 * If the child is not a Pressable, we need to wrap it in a Pressable
	 */
	const pressableChild = isPressableChild
		? React.cloneElement(children, { ...wrappedTriggerProps })
		: React.createElement(
				Pressable,
				{ ...wrappedTriggerProps, style: { flex: 1, flexDirection: 'row' } },
				children
		  );

	/**
	 * Re-measure the trigger position when onScroll called
	 * Flashlist doesn't use our ScrollView, so this doesn't work
	 */
	// const scrollEvents = useScrollEvents();
	// scrollEvents.subscribe(() => {
	// 	forceMeasure();
	// });

	/**
	 *
	 */
	return <MeasureWrapper>{pressableChild}</MeasureWrapper>;
};
