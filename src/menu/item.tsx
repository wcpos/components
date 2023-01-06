import * as React from 'react';
import { ViewStyle } from 'react-native';

import isString from 'lodash/isString';
import { useTheme } from 'styled-components/native';

import Box from '../box';
import Icon, { IconName } from '../icon';
import Pressable from '../pressable';
import Text from '../text';

/**
 *
 */
export interface ItemProps {
	/**
	 *
	 */
	children: React.ReactNode;
	/**
	 *
	 */
	icon?: IconName | React.ReactElement;
	/**
	 *
	 */
	accessoryRight?: React.ReactElement;
	/**
	 *
	 */
	onPress?: (value: any) => void;
	/**
	 * Color of menu item
	 */
	type?: import('@wcpos/themes').ColorTypes;
	/**
	 *
	 */
	style?: ViewStyle;
}

/**
 * Spacer is the same width as icon and right accessory to keep the menu item aligned
 */
const Spacer = () => <Box style={{ width: 16 }} />;

/**
 *
 */
export const Item = ({
	children,
	icon = <Spacer />,
	accessoryRight = <Spacer />,
	onPress,
	type,
	style,
}: ItemProps) => {
	const theme = useTheme();
	const accessoryLeft = isString(icon) ? <Icon name={icon} /> : icon;

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
		<Pressable onPress={onPress} style={calculatedStyled}>
			{({ hovered }) => (
				<Box horizontal space="small" padding="small">
					{accessoryLeft}
					<Text style={{ flex: 1 }}>{children}</Text>
					{accessoryRight}
				</Box>
			)}
		</Pressable>
	);
};
