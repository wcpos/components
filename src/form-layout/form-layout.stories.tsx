import * as React from 'react';

import { action } from '@storybook/addon-actions';

import { InputWithLabel, InputWithLabelProps } from './input-with-label';

export default {
	title: 'Components/InputContainer',
	component: InputWithLabel,
};

export const BasicUsage = (props: InputWithLabelProps) => {
	return <InputWithLabel {...props}>hi</InputWithLabel>;
};
BasicUsage.args = {
	label: 'Label',
	helpText: 'Help text',
	error: 'Error text',
};
