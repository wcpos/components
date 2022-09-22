import * as React from 'react';
import { useTheme } from 'styled-components/native';
import * as Styled from './styles';
import Icon from '../icon';
import Pressable from '../pressable';

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
	size?: 'small' | 'medium' | 'large';
	/**
	 * Background color of the pill
	 */
	color?: ColorTypes;
}

// can't have negative in react-native
const marginMap = {
	small: 0,
	medium: 3,
	large: 6,
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
	size = 'medium',
	color = 'primary',
}: PillProps) => {
	const theme = useTheme();

	/**
	 *
	 */
	const removeIconPadding = React.useMemo(
		() => ({
			small: theme.spacing.xxSmall,
			medium: theme.spacing.xSmall,
			large: theme.spacing.small,
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

/**
 *
 */
export interface PillSkeletonProps {
	/**
	 * Called if pill is pressed
	 */
	size?: 'small' | 'medium' | 'large';
}

/**
 *
 */
const PillSkeleton = ({ size = 'medium' }: PillSkeletonProps) => (
	<Styled.PillSkeleton size={size} />
);

Pill.Skeleton = PillSkeleton;
