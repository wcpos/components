import * as React from 'react';

import TextInput, { TextInputProps } from '../textinput';

export interface TextAreaProps extends TextInputProps {}

export const TextArea = ({ numberOfLines = 3, ...props }: TextAreaProps) => {
	return <TextInput multiline numberOfLines={numberOfLines} {...props} />;
};
