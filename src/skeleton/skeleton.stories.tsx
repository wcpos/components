import * as React from 'react';

import { Skeleton, SkeletonProps } from './skeleton';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Skeleton> = {
	title: 'Components/Skeleton',
	component: Skeleton,
};

/**
 *
 */
export const BasicUsage = (props: SkeletonProps) => <Skeleton {...props} />;
BasicUsage.args = {
	width: 100,
	height: 100,
};

export default meta;
