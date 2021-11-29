import * as React from 'react';
import { ViewStyle } from 'react-native';
import get from 'lodash/get';
import { useTheme } from 'styled-components/native';
import Svgs from './svg/fontawesome/solid';
import Tooltip from '../tooltip2';
import Skeleton from '../skeleton';
import * as Styled from './styles';

/**
 *
 */
const sizeMap = {
	default: 20,
	small: 16,
	'x-small': 12,
	large: 24,
	'x-large': 30,
};

/**
 *
 */
export interface IconProps {
	/**
	 * Icon colour
	 */
	color?: string;
	/**
	 * Set to `true` to disable.
	 */
	disabled?: boolean;
	/**
	 * Set icon height.
	 */
	height?: number;
	/**
	 * Icon key.
	 */
	name: Extract<keyof typeof Svgs, string>;
	/**
	 * Set icon size.
	 */
	size?: Extract<keyof typeof sizeMap, string>;
	/**
	 * Set icon width.
	 */
	width?: number;
	/**
	 * Turns icon into a button. Called when icon is pressed.
	 */
	onPress?: null | ((event: import('react-native').GestureResponderEvent) => void);
	/**
	 * Wraps the icon in a Tooltip component
	 */
	tooltip?: string;
	/**
	 * Styling for Pressable icons
	 */
	backgroundStyle?: 'none' | ViewStyle;
	/**
	 * Icon colour
	 */
	type?: import('@wcpos/common/src/themes').ColorTypes;
}

/**
 * Icon component
 */
export const Icon = ({
	color,
	disabled,
	name,
	size = 'default',
	width,
	height,
	onPress,
	tooltip,
	backgroundStyle,
	type = 'primary',
}: IconProps) => {
	const theme = useTheme();

	const SvgIcon = get(Svgs, name, Svgs.circleExclamation);
	let IconComponent = (
		<SvgIcon
			// @TODO - clean up this component
			// @ts-ignore
			width={width || sizeMap[size]}
			// @ts-ignore
			height={height || sizeMap[size]}
			// @ts-ignore
			fill={color || theme[`COLOR_${type.toUpperCase()}`]}
		/>
	);

	const pressableStyle = React.useCallback(
		({ hovered }) =>
			backgroundStyle !== 'none'
				? [
						{ backgroundColor: hovered ? theme.ICON_BACKGROUND_COLOR : 'transparent' },
						backgroundStyle,
				  ]
				: { padding: 0 },
		[backgroundStyle, theme.ICON_BACKGROUND_COLOR]
	);

	if (onPress) {
		IconComponent = (
			<Styled.PressableIcon onPress={onPress} style={pressableStyle}>
				{IconComponent}
			</Styled.PressableIcon>
		);
	}

	if (tooltip) {
		IconComponent = <Tooltip content={tooltip}>{IconComponent}</Tooltip>;
	}

	return IconComponent;
};

/**
 *
 */
export interface IconSkeletonProps {
	/**
	 *
	 */
	size?: Extract<keyof typeof sizeMap, string>;
}

/**
 *
 */
export const IconSkeleton = ({ size = 'default' }: IconSkeletonProps) => {
	return <Skeleton border="circular" width={sizeMap[size]} height={sizeMap[size]} />;
};

Icon.Skeleton = IconSkeleton;
