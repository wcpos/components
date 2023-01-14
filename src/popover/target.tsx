import * as React from 'react';
import { View } from 'react-native';

import useMeasure from '@wcpos/hooks/src/use-measure';

import { PopoverContext } from './context';
import { useScrollEvents } from '../scrollview';

export interface PopoverTargetProps {
	/** The content which will trigger the Popover. The Popover will be anchored to this component. */
	children: React.ReactNode;
}

export const Target = ({ children }: PopoverTargetProps) => {
	const { targetMeasurements } = React.useContext(PopoverContext);
	const ref = React.useRef<View>(null);
	const onMeasure = (val) => {
		targetMeasurements.value = val;
	};
	const { measurements, onLayout, forceMeasure } = useMeasure({ ref, onMeasure });

	/**
	 * Re-measure the trigger position when onScroll called
	 * Flashlist doesn't use our ScrollView, so this doesn't work
	 */
	const scrollEvents = useScrollEvents();
	scrollEvents.subscribe(() => {
		debugger;
		forceMeasure();
	});

	return (
		<View ref={ref} onLayout={onLayout}>
			{children}
		</View>
	);
};
