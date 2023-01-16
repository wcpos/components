import * as React from 'react';
import { View } from 'react-native';

import pick from 'lodash/pick';

import useMeasure from '@wcpos/hooks/src/use-measure';

import { PopoverContext } from './context';
import Pressable from '../pressable';
import { useScrollEvents } from '../scrollview';

export interface PopoverTargetProps {
	/** The content which will trigger the Popover. The Popover will be anchored to this component. */
	children: React.ReactNode;
}

/**  */
const triggerMap = {
	press: 'onPress',
	longPress: 'onLongPress',
	hover: 'onHoverIn',
};

/**
 *
 */
export const Target = ({ children }: PopoverTargetProps) => {
	const { targetMeasurements, onOpen, onClose, trigger } = React.useContext(PopoverContext);
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
			if (trigger === 'longPress') {
				forceMeasure();
				onOpen && onOpen();
			}
			triggerProps.onLongPress && triggerProps.onLongPress();
		},
		onHoverIn: () => {
			if (trigger === 'hover') {
				forceMeasure();
				onOpen && onOpen();
			}
			triggerProps.onHoverIn && triggerProps.onHoverIn();
		},
		onHoverOut: () => {
			if (trigger === 'hover') {
				onClose && onClose();
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
		: React.createElement(Pressable, { ...wrappedTriggerProps }, children);

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
