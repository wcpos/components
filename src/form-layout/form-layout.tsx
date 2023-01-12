import * as React from 'react';

import { action } from '@storybook/addon-actions';

import { InputContainer, InputContainerProps } from './input-with-label';

export default {
	title: 'Components/InputContainer',
	component: InputContainer,
};

export const BasicUsage = (props: InputContainerProps) => {
	return <InputContainer {...props}>hi</InputContainer>;
};
BasicUsage.args = {
	label: 'Label',
	helpText: 'Help text',
	error: 'Error text',
};
