import * as React from 'react';
import { View } from 'react-native';

import { action } from '@storybook/addon-actions';

import { Draggable, DraggableProps } from './draggable';
import Icon from '../icon';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Draggable> = {
	title: 'Components/Draggable2',
	component: Draggable,
};

export const BasicUsage = (props: DraggableProps) => (
	<View style={{ height: 300 }}>
		<Draggable {...props}>
			<Icon name="more-vert" />
		</Draggable>
	</View>
);
BasicUsage.args = {
	onDrag: action('Drag'),
	onShortPressRelease: action('Short Press Release'),
	onDragRelease: action('Drag Release'),
	onLongPress: action('Long Press'),
	onPressIn: action('Press In'),
	onPressOut: action('Press Out'),
	onRelease: action('Release'),
};

export default meta;
