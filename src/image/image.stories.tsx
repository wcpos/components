import * as React from 'react';
import { View } from 'react-native';

import { Image, ImageProps } from './image';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Image> = {
	title: 'Components/Image',
	component: Image,
	argTypes: {
		border: {
			control: {
				type: 'inline-radio',
				options: ['none', 'rounded', 'circular'],
			},
		},
	},
};

/**
 *
 */
export const BasicUsage = (props: ImageProps) => {
	return (
		<View style={{ height: '150px', width: '50%' }}>
			<Image {...props} />
		</View>
	);
};
BasicUsage.args = {
	src: 'https://i.imgur.com/0y8Ftya.jpg',
};

/**
 *
 */
export const BrokenImage = (props: ImageProps) => {
	return (
		<View style={{ height: '150px', width: '50%' }}>
			<Image {...props} />
		</View>
	);
};
BrokenImage.args = {
	src: 'https://example.com/test.jpg',
};

/**
 *
 */
export const LocalAssets = (props: ImageProps) => {
	return <Image {...props} />;
};
LocalAssets.args = {
	// source: { require('@wcpos/core/src/assets/placeholder.png') },
};

export default meta;
