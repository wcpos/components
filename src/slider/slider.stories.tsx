import * as React from 'react';

import { Slider, SliderProps } from './Slider';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Slider> = {
	title: 'Components/Slider',
	component: Slider,
};

/**
 *
 */
export const BasicUsage = (props: SliderProps) => <Slider {...props} />;

BasicUsage.args = {
	min: 0,
	max: 3000,
	step: 15,
};

export default meta;
