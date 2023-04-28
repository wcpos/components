import * as React from 'react';

import type { PopoverPlacement } from './helpers';
import type { MeasuredDimensions, SharedValue } from 'react-native-reanimated';

type PopoverProps = import('./popover').PopoverProps;
type PopoverContextProps = {
	targetMeasurements: SharedValue<MeasuredDimensions>;
	contentMeasurements: SharedValue<MeasuredDimensions>;
	placement: PopoverPlacement;
} & Pick<
	PopoverProps,
	| 'withArrow'
	| 'closeOnPressOutside'
	| 'withinPortal'
	| 'trigger'
	| 'matchWidth'
	| 'onOpen'
	| 'onClose'
	| 'primaryAction'
	| 'secondaryActions'
>;

export const PopoverContext = React.createContext<PopoverContextProps>(null);
export const PortalContext = React.createContext(null);

export const usePopover = () => {
	const popoverContext = React.useContext(PopoverContext);
	const portalContext = React.useContext(PortalContext);
	const context = popoverContext || portalContext;

	if (!context) {
		throw new Error(`usePopover must be called within the right context`);
	}

	return context;
};
