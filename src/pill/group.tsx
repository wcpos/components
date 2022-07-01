import * as React from 'react';
import { Pill } from './pill';
import Box from '../box';
import * as Styled from './styles';

/**
 * Action with a Label.
 */
export interface TextAction {
	/**
	 * Unique key identifier
	 */
	key?: string | number;
	/**
	 * Label to display.
	 */
	label: string;
	/**
	 * Action to execute on click.
	 */
	action?: () => void;
}

/**
 *
 */
export interface PillGroupProps {
	/**
	 *
	 */
	pills: (TextAction | string)[];
	/**
	 *
	 */
	size?: 'small' | 'medium' | 'large';
}

const spacingMap = {
	small: 'xxSmall',
	medium: 'xSmall',
	large: 'small',
};

/**
 *
 */
export const PillGroup = ({ pills, size = 'medium' }: PillGroupProps) => {
	return (
		<Box horizontal space={spacingMap[size]}>
			{pills.map((pill, i) =>
				typeof pill === 'string' ? (
					<Pill key={i} size={size}>
						pill
					</Pill>
				) : (
					<Pill key={pill.key || i} size={size} onPress={pill.action}>
						{pill.label}
					</Pill>
				)
			)}
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
