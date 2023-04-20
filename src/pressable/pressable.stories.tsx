import * as React from 'react';

import { action } from '@storybook/addon-actions';

import { Pressable, PressableProps } from './pressable';
import Text from '../text';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Pressable> = {
	title: 'Components/Pressable',
	component: Pressable,
};

export const basicUsage = (props: PressableProps) => (
	<Pressable {...props}>
		<Text>I'm pressable!</Text>
	</Pressable>
);
basicUsage.args = {
	onLongPress: action('Long Press'),
	onPress: action('Press'),
	onHoverIn: action('Mouse In'),
	onHoverOut: action('Mouse Out'),
};

export default meta;
