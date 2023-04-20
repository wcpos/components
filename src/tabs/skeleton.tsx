import * as React from 'react';

import Box, { BoxProps } from '../box';
import Button from '../button';

interface TabBarSkeletonProps extends BoxProps {
	numberOfTabs: number;
	buttonText: React.ReactNode | React.ReactNode[];
}

export const TabBarSkeleton = ({
	numberOfTabs = 3,
	buttonText = 'Loading',
	...props
}: TabBarSkeletonProps) => {
	return (
		<Box horizontal space="xSmall" padding="xSmall" {...props}>
			{Array.from({ length: numberOfTabs }).map((_, i) => (
				<Button key={i} disabled>
					{Array.isArray(buttonText) ? buttonText[i] : buttonText}
				</Button>
			))}
		</Box>
	);
};

export const TabsSkeleton = () => {};
