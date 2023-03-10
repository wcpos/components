import * as React from 'react';
import { View } from 'react-native';

import delay from 'lodash/delay';
import pick from 'lodash/pick';

import useMeasure from '@wcpos/hooks/src/use-measure';

import { usePopover } from './context';
import Pressable from '../pressable';
import { useScrollEvents } from '../scrollview';

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
	const ref = React.useRef<View>(null);
	const onMeasure = (val) => {
		targetMeasurements.value = val;
	};
	const { measurements, onLayout, forceMeasure } = useMeasure({ ref, onMeasure });
	const triggerProps = React.isValidElement(children)
		? pick(children.props, ['onPress', 'onLongPress', 'onHoverIn', 'onHoverOut'])
		: {};

	/**  */
	const wrappedTriggerProps = {
		onPress: () => {
			if (trigger === 'press') {
				forceMeasure();
				onOpen && onOpen();
			}
			triggerProps.onPress && triggerProps.onPress();
		},
		onLongPress: () => {
			if (trigger === 'longpress') {
				forceMeasure();
				onOpen && onOpen();
			}
			triggerProps.onLongPress && triggerProps.onLongPress();
		},
		/**
		 * NOTE: The tooltips were causing flickering so I added a delay
		 * It seemed to be a conflict with the ripple animation
		 */
		onHoverIn: () => {
			if (trigger === 'hover') {
				forceMeasure();
				onOpen && delay(onOpen, 20);
			}
			triggerProps.onHoverIn && triggerProps.onHoverIn();
		},
		onHoverOut: () => {
			if (trigger === 'hover') {
				onClose && delay(onClose, 20);
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
	const scrollEvents = useScrollEvents();
	scrollEvents.subscribe(() => {
		forceMeasure();
	});

	return (
		<View ref={ref} onLayout={onLayout}>
			{pressableChild}
		</View>
	);
};
