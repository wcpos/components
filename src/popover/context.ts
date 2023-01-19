import * as React from 'react';

import type { Measurements } from '@wcpos/hooks/src/use-measure';

import type { PopoverPlacement } from './placements';
import type { SharedValue } from 'react-native-reanimated';

type PopoverProps = import('./popover').PopoverProps;
type PopoverContextProps = {
	targetMeasurements: SharedValue<Measurements>;
	contentMeasurements: SharedValue<Measurements>;
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
>;

export const PopoverContext = React.createContext<PopoverContextProps>(null);
