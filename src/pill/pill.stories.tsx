import * as React from 'react';
import { View } from 'react-native';

import { action } from '@storybook/addon-actions';

import Pill from '.';
import { PillGroupProps, PillGroupSkeletonProps } from './group';
import { PillProps, PillSkeletonProps } from './pill';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Pill> = {
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

export const GroupWithWrap = (props: PillGroupProps) => (
	<View style={{ width: 200 }}>
		<Pill.Group {...props} />
	</View>
);
GroupWithWrap.args = {
	pills: [
		{ label: 'Pill 1', action: action('Pill 1 pressed') },
		{ label: 'Pill 2', action: action('Pill 2 pressed') },
		{ label: 'Pill 3', action: action('Pill 3 pressed') },
		{ label: 'Pill 4', action: action('Pill 4 pressed') },
		{ label: 'Pill 5', action: action('Pill 5 pressed') },
		{ label: 'Pill 6', action: action('Pill 6 pressed') },
	],
};

export const GroupWithTruncated = (props: PillGroupProps) => (
	<View style={{ width: 60 }}>
		<Pill.Group {...props} />
	</View>
);
GroupWithTruncated.args = {
	pills: [
		{ label: 'Lorem ipsum dolor sit amet', action: action('Pill 1 pressed') },
		{ label: 'Consectetur adipiscing elit', action: action('Pill 2 pressed') },
		{ label: 'Donec auctor, nisl eget', action: action('Pill 3 pressed') },
	],
};

export const GroupWithComponentChildren = (props: PillGroupProps) => (
	<Pill.Group>
		<Pill>Pill 1</Pill>
		<Pill>Pill 2</Pill>
		<Pill>Pill 3</Pill>
	</Pill.Group>
);

export const GroupSkeleton = (props: PillGroupSkeletonProps) => <Pill.Group.Skeleton {...props} />;
GroupSkeleton.args = {
	number: 2,
};

export default meta;
