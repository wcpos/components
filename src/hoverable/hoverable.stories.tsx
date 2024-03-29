import * as React from 'react';

import { action } from '@storybook/addon-actions';

import { Hoverable, HoverableProps } from './hoverable.web';
import Button from '../button';
import Pressable from '../pressable';
import Text from '../text';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Hoverable> = {
	title: 'Components/Hoverable',
	component: Hoverable,
};

export const BasicUsage = (props: HoverableProps) => (
	<Hoverable {...props}>
		<Pressable
			onHoverIn={() => action('Pressable HoverIn')}
			onHoverOut={() => action('Pressable HoverOut')}
			style={{ width: 100, height: 100 }}
		>
			<Text>Hover</Text>
			<Button onPress={() => action('Button Press')}>Button</Button>
		</Pressable>
	</Hoverable>
);
BasicUsage.args = {
	onHoverIn: action('HoverIn'),
	onHoverOut: action('HoverOut'),
	onPressIn: action('PressIn'),
	onPressOut: action('PressOut'),
};

export default meta;
