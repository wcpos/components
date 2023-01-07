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
	iconSpacer?: boolean;
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
const IconSpacer = () => <Box style={{ width: 16 }} />;

/**
 *
 */
const convertHexToRGBA = (hexCode, opacity = 1) => {
	let hex = hexCode.replace('#', '');

	if (hex.length === 3) {
		hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
	}

	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	/* Backward compatibility for whole number based opacity values. */
	if (opacity > 1 && opacity <= 100) {
		opacity = opacity / 100;
	}

	return `rgba(${r},${g},${b},${opacity})`;
};

/**
 *
 */
export const Item = ({
	children,
	icon,
	iconSpacer,
	accessoryRight,
	onPress,
	type,
	style,
}: ItemProps) => {
	const theme = useTheme();
	const accessoryLeft = isString(icon) ? <Icon name={icon} type={type} /> : icon;
	const label = isString(children) ? <Text type={type}>{children}</Text> : children;

	/**
	 *
	 */
	const calculatedStyled = React.useCallback(
		({ hovered }) => {
			const hoverBackgroundColor = convertHexToRGBA(theme.colors[type || 'primary'], 0.1);
			return [{ backgroundColor: hovered ? hoverBackgroundColor : 'transparent' }, style];
		},
		[style, theme, type]
	);

	/**
	 *
	 */
	return (
		<Pressable onPress={onPress} style={calculatedStyled}>
			{({ hovered }) => (
				<Box horizontal space="small" padding="small">
					{accessoryLeft || (iconSpacer && <IconSpacer />)}
					<Box fill paddingRight="small">
						{label}
					</Box>
					{accessoryRight}
				</Box>
			)}
		</Pressable>
	);
};
