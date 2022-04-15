import * as React from 'react';
import { Pressable as RNPressable, StyleSheet } from 'react-native';

export type PressableProps = import('react-native').PressableProps & {
	onHoverIn?: () => void;
	onHoverOut?: () => void;
};

/**
 *
 */
export const Pressable = (props: PressableProps) => {
	return <RNPressable style={[{ flexDirection: 'row' }, props.style]} {...props} />;
};
