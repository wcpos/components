import * as React from 'react';
import { View } from 'react-native';

import { useTheme } from 'styled-components/native';

import * as Styled from './styles';
import Icon, { IconName } from '../icon';
import Pressable from '../pressable';
import Text from '../text';

type ColorTypes = import('@wcpos/themes/src/index').ColorTypes;

export interface PillProps {
	/** Pill label */
	children: React.ReactNode;

	/** Set to `true` add remove icon. */
	removable?: boolean;

	/** Set to `true` to disable. */
	disabled?: boolean;

	/** Called if remove icon is pressed */
	onRemove?: () => void;

	/** Called if pill is pressed */
	onPress?: () => void;

	/** Pill text size, also scales spacing */
	size?: import('@wcpos/themes').FontSizeTypes;

	/** Background color of the pill */
	color?: ColorTypes;

	/** Add an icon next to the label */
	icon?: IconName;
}

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
	icon,
}: PillProps) => {
	const theme = useTheme();

	/**
	 * If children is a string we need to wrap in a Text component
	 */
	const label =
		typeof children === 'string' ? (
			<Text size={size} type="inverse" backgroundType={color} numberOfLines={1}>
				{children}
			</Text>
		) : (
			children
		);

	return (
		<View style={{ maxWidth: '100%', flexDirection: 'row' }}>
			<Pressable onPress={disabled ? undefined : onPress} style={{ flex: 1, flexDirection: 'row' }}>
				{icon && (
					<Styled.Pill
						disabled={disabled}
						size={size}
						color={color}
						style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0, paddingRight: 0 }}
					>
						<Icon name={icon} size={size} type="inverse" backgroundType={color} />
					</Styled.Pill>
				)}
				<Styled.Pill
					disabled={disabled}
					size={size}
					color={color}
					style={{
						borderTopLeftRadius: icon ? 0 : undefined,
						borderBottomLeftRadius: icon ? 0 : undefined,
						borderTopRightRadius: removable ? 0 : undefined,
						borderBottomRightRadius: removable ? 0 : undefined,
						paddingRight: removable ? 0 : undefined,
					}}
				>
					{label}
				</Styled.Pill>
			</Pressable>
			{removable && (
				<Pressable onPress={onRemove}>
					<Styled.Pill
						disabled={disabled}
						size={size}
						color={color}
						style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
					>
						<Icon
							name="xmark"
							size={size}
							disabled={disabled}
							type="inverse"
							backgroundType={color}
						/>
					</Styled.Pill>
				</Pressable>
			)}
		</View>
	);
};

/**
 *
 */
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
