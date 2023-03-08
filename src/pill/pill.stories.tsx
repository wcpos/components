import * as React from 'react';

import { action } from '@storybook/addon-actions';

import Pill from '.';
import { PillGroupProps, PillGroupSkeletonProps } from './group';
import { PillProps, PillSkeletonProps } from './pill';

export default {
	title: 'Components/Pill',
	component: Pill,
	subcomponents: { Skeleton: Pill.Skeleton },
};

export const BasicUsage = (props: PillProps) => <Pill {...props} />;
BasicUsage.args = {
	children: 'Label',
	onPress: action('Pressed'),
};

export const Removable = (props: PillProps) => <Pill {...props} />;
Removable.args = {
	children: 'Label',
	removable: true,
	onRemove: action('Remove'),
	onPress: action('Pressed'),
};

export const Skeleton = (props: PillSkeletonProps) => <Pill.Skeleton {...props} />;

export const Group = (props: PillGroupProps) => <Pill.Group {...props} />;
Group.args = {
	pills: [
		{ label: 'Pill 1', action: action('Pill 1 pressed') },
		{ label: 'Pill 2', action: action('Pill 2 pressed') },
		{ label: 'Pill 3', action: action('Pill 3 pressed') },
	],
};

export const GroupSkeleton = (props: PillGroupSkeletonProps) => <Pill.Group.Skeleton {...props} />;
GroupSkeleton.args = {
	number: 2,
};
