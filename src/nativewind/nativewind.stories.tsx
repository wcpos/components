import React from 'react';

import { Text } from './';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Text> = {
	title: 'Components/Nativewind',
	component: Text,
};

/**
 *
 */
export const Basic = (props) => {
	return <Text {...props} />;
};
Basic.args = {
	text: 'Try editing me! 🎉',
};

export default meta;
