import * as React from 'react';
import { ViewStyle } from 'react-native';

import get from 'lodash/get';
import { useSharedValue } from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

import * as Svgs from './components/fontawesome/solid';
import Pressable from '../pressable';
import Ripple from '../ripple';
import Skeleton from '../skeleton';
import Tooltip from '../tooltip';

import type { SvgProps } from 'react-native-svg';
// import * as Styled from './styles';

export type IconName = Extract<keyof typeof Svgs, string>;

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
	height?: SvgProps['height'];
	/**
	 * Set icon width.
	 */
	width?: SvgProps['width'];
	/**
	 * Icon key.
	 */
	name: IconName;
	/**
	 * Set icon size.
	 */
	size?: import('@wcpos/themes').IconSizesTypes;
	/**
	 * Turns icon into a button. Called when icon is pressed.
	 */
	onPress?: null | ((event: import('react-native').GestureResponderEvent) => void);
	/**
	 * Turns icon into a button. Called when icon is long pressed.
	 */
	onLongPress?: null | ((event: import('react-native').GestureResponderEvent) => void);
	/**
	 * Wraps the icon in a Tooltip component
	 */
	tooltip?: string;
	/**
	 *
	 */
	tooltipPlacement?: import('../tooltip').TooltipProps['placement'];
	/**
	 * Styling for Pressable icons
	 */
	backgroundStyle?: 'ripple' | 'none' | ViewStyle;
	/**
	 * Icon colour
	 */
	type?: import('@wcpos/themes').ColorTypes;
}

/**
 * Icon component
 */
export const Icon = ({
	color,
	disabled,
	name,
	size = 'normal',
	width,
	height,
	onPress,
	onLongPress,
	tooltip,
	tooltipPlacement = 'top',
	backgroundStyle = 'ripple',
	type,
}: IconProps) => {
	const theme = useTheme();
	// TODO: I shouldn't have two ways to set color
	// const iconColor = color || get(theme, ['colors', type], theme.colors.text);
	const iconColor = get(theme, ['colors', type], theme.colors.text);
	const SvgIcon = get(Svgs, name, Svgs.circleExclamation) as React.FC<SvgProps>;
	const showRipple = useSharedValue(false);

	let IconComponent = (
		<SvgIcon
			width={width || theme.iconSizes[size]}
			height={height || theme.iconSizes[size]}
			fill={iconColor}
		/>
	);

	if (onPress || onLongPress) {
		IconComponent = (
			<Pressable
				onPress={onPress}
				onLongPress={onLongPress}
				onHoverIn={() => {
					showRipple.value = true;
				}}
				onHoverOut={() => {
					showRipple.value = false;
				}}
				style={[backgroundStyle !== 'none' && backgroundStyle !== 'ripple' && backgroundStyle]}
			>
				{backgroundStyle === 'ripple' && <Ripple showRipple={showRipple} />}
				{IconComponent}
			</Pressable>
		);
	}

	if (tooltip) {
		IconComponent = (
			<Tooltip content={tooltip} placement={tooltipPlacement}>
				{IconComponent}
			</Tooltip>
		);
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
	size?: import('@wcpos/themes').IconSizesTypes;
}

/**
 *
 */
export const IconSkeleton = ({ size = 'normal' }: IconSkeletonProps) => {
	const theme = useTheme();
	return (
		<Skeleton border="circular" width={theme.iconSizes[size]} height={theme.iconSizes[size]} />
	);
};

Icon.Skeleton = IconSkeleton;
