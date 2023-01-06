import * as React from 'react';
import { ViewStyle } from 'react-native';

import { useTheme } from 'styled-components/native';

import Box from '../box';
import Icon from '../icon';
import Pressable from '../pressable';
import Text from '../text';

export interface ItemProps {
	/**
	 *
	 */
	children?: string | React.ReactNode;
	/**
	 *
	 */
	label?: string;
	/**
	 *
	 */
	onPress?: (value: any) => void;
	/**
	 *
	 */
	action?: () => void;
	/**
	 * Color of menu item
	 */
	type?: import('@wcpos/themes').ColorTypes;
	/**
	 *
	 */
	style?: ViewStyle;
}

export const Item = ({ label = '', onPress, action, type, style }: ItemProps) => {
	const theme = useTheme();

	/**
	 *
	 */
	const handlePress = React.useCallback(() => {
		if (typeof action === 'function') {
			action();
		}
		if (typeof onPress === 'function') {
			onPress(label);
		}
	}, [action, label, onPress]);

	/**
	 *
	 */
	const calculatedStyled = React.useCallback(
		({ hovered }) => {
			const hoverBackgroundColor = type ? theme.colors[type] : theme.colors.lightGrey;
			return [{ backgroundColor: hovered ? hoverBackgroundColor : 'transparent' }, style];
		},
		[style, theme, type]
	);

	return (
		<Pressable onPress={handlePress} style={calculatedStyled}>
			{({ hovered }) => (
				<Box horizontal space="small" padding="small" style={{ minWidth: 150 }}>
					<Icon name="cog" />
					<Text>{label}</Text>
					<Icon name="cog" />
				</Box>
			)}
		</Pressable>
	);
};
