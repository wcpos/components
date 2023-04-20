import * as React from 'react';

import { Numpad, NumpadProps } from './numpad';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Numpad> = {
	title: 'Components/Numpad',
	component: Numpad,
};

export const basicUsage = (props: NumpadProps) => {
	return <Numpad {...props} />;
};

export const calculator = (props: NumpadProps) => {
	return <Numpad {...props} />;
};
calculator.args = {
	calculator: true,
};

export default meta;
