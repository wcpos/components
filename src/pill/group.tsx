import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { Pill } from './pill';
import * as Styled from './styles';
import Box from '../box';

type ColorTypes = import('@wcpos/themes/src/index').ColorTypes;

/**
 * Action with a Label.
 */
export interface TextAction {
	/** */
	key?: string | number;

	/** */
	label: string;

	/** */
	action?: () => void;
}

/**
 *
 */
export interface PillGroupProps {
	/** */
	children?: React.ReactElement[];

	/** */
	pills?: (TextAction | string)[];

	/** */
	size?: import('@wcpos/themes').FontSizeTypes;

	/**  Background color of the pill */
	color?: ColorTypes;

	/** Style passed to Box container */
	style?: StyleProp<ViewStyle>;
}

const spacingMap = {
	xSmall: 'xxSmall',
	small: 'xxSmall',
	medium: 'xSmall',
	normal: 'xSmall',
	large: 'small',
	xLarge: 'small',
	xxLarge: 'medium',
};

/**
 *
 */
export const PillGroup = ({ children, pills, size = 'normal', color, style }: PillGroupProps) => {
	return (
		<Box
			horizontal
			space={spacingMap[size]}
			style={[{ flexWrap: 'wrap', maxWidth: '100%' }, style]}
		>
			{pills
				? pills.map((pill, i) =>
						typeof pill === 'string' ? (
							<Pill key={i} size={size} color={color}>
								pill
							</Pill>
						) : (
							<Pill key={pill.key || i} size={size} onPress={pill.action} color={color}>
								{pill.label}
							</Pill>
						)
				  )
				: children}
		</Box>
	);
};

/**
 *
 */
export interface PillGroupSkeletonProps {
	/**
	 *
	 */
	number?: number;
	/**
	 *
	 */
	size?: 'small' | 'medium' | 'large';
}

/**
 *
 */
const PillGroupSkeleton = ({ number = 3, size = 'medium' }: PillGroupSkeletonProps) => {
	return (
		<Box horizontal space={spacingMap[size]}>
			{Array.from({ length: number }, (v, i) => (
				<Pill.Skeleton key={i} size={size} />
			))}
		</Box>
	);
};

PillGroup.Skeleton = PillGroupSkeleton;
