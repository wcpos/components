import * as React from 'react';

import { useTheme } from 'styled-components/native';

import Icon from '../icon';
import Pressable from '../pressable';
import * as Styled from './styles';

type ColorTypes = import('@wcpos/themes/src/index').ColorTypes;

export interface PillProps {
	/**
	 * Pill label
	 */
	children: string;
	/**
	 * Set to `true` add remove icon.
	 */
	removable?: boolean;
	/**
	 * Set to `true` to disable.
	 */
	disabled?: boolean;
	/**
	 * Called if remove icon is pressed
	 */
	onRemove?: () => void;
	/**
	 * Called if pill is pressed
	 */
	onPress?: () => void;
	/**
	 * Called if pill is pressed
	 */
	size?: import('@wcpos/themes').FontSizeTypes;
	/**
	 * Background color of the pill
	 */
	color?: ColorTypes;
}

// can't have negative in react-native
const marginMap = {
	xSmall: 0,
	small: 0,
	normal: 0,
	medium: 3,
	large: 6,
	xLarge: 6,
	xxLarge: 6,
};

/**
 *
 */
export const Pill = ({
	children,
	removable,
	disabled,
	onRemove,
	onPress,
	size = 'normal',
	color = 'primary',
}: PillProps) => {
	const theme = useTheme();

	/**
	 *
	 */
	const removeIconPadding = React.useMemo(
		() => ({
			xSmall: theme.spacing.xxSmall,
			small: theme.spacing.xxSmall,
			normal: theme.spacing.xSmall,
			medium: theme.spacing.xSmall,
			large: theme.spacing.small,
			xLarge: theme.spacing.small,
			xxLarge: theme.spacing.small,
		}),
		[theme.spacing.small, theme.spacing.xSmall, theme.spacing.xxSmall]
	);

	return (
		<Pressable onPress={disabled ? undefined : onPress}>
			<Styled.Pill disabled={disabled} size={size} color={color}>
				<Styled.Label size={size}>{children}</Styled.Label>
				{removable && (
					<Icon
						name="xmark"
						size={size}
						disabled={disabled}
						onPress={onRemove}
						backgroundStyle={{
							backgroundColor: 'transparent',
							paddingLeft: removeIconPadding[size],
							marginRight: marginMap[size],
						}}
						type="inverse"
					/>
				)}
			</Styled.Pill>
		</Pressable>
	);
};

const skeletonSizeMap = {
	xSmall: {
		width: 30,
		height: 12,
	},
	small: {
		width: 50,
		height: 18,
	},
	normal: {
		width: 80,
		height: 24,
	},
	medium: {
		width: 90,
		height: 28,
	},
	large: {
		width: 100,
		height: 36,
	},
	xLarge: {
		width: 120,
		height: 48,
	},
	xxLarge: {
		width: 140,
		height: 60,
	},
};

/**
 *
 */
export interface PillSkeletonProps {
	/**
	 * Called if pill is pressed
	 */
	size?: import('@wcpos/themes').FontSizeTypes;
}

/**
 *
 */
const PillSkeleton = ({ size = 'medium' }: PillSkeletonProps) => (
	<Styled.PillSkeleton
		size={size}
		width={skeletonSizeMap[size].width}
		height={skeletonSizeMap[size].height}
	/>
);

Pill.Skeleton = PillSkeleton;
