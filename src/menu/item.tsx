import * as React from 'react';
import { ViewStyle } from 'react-native';
import { useTheme } from 'styled-components/native';
import * as Styled from './styles';

export interface ItemProps {
	/**
	 *
	 */
	children?: string;
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

export const Item = ({ children, label = '', onPress, action, type, style }: ItemProps) => {
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
		<Styled.Item onPress={handlePress} style={calculatedStyled}>
			{
				// @ts-ignore
				({ hovered }) => (
					<Styled.Label type={type} hovered={hovered}>
						{children || label}
					</Styled.Label>
				)
			}
		</Styled.Item>
	);
};
