import * as React from 'react';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';

import { PopoverPlacement, getArrowAlign, getArrowDirection } from './placements';
import { default as _Arrow } from '../arrow';

export interface PopoverArrowProps {
	placement: PopoverPlacement;

	style?: StyleProp<ViewStyle>;
}

export const Arrow = ({ placement, style }: PopoverArrowProps) => {
	return (
		<_Arrow
			color={(style && StyleSheet.flatten(style).backgroundColor) || '#fff'}
			direction={getArrowDirection(placement)}
			style={[getArrowAlign(placement), { zIndex: 10 }]}
			size="small"
		/>
	);
};
