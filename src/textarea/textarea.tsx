import * as React from 'react';
import { TextInput as RNTextInput } from 'react-native';

import TextInput, { TextInputProps } from '../textinput';

export interface TextAreaProps extends TextInputProps {}

export const TextArea = React.forwardRef<RNTextInput, TextAreaProps>(
	({ numberOfLines = 3, ...props }: TextAreaProps, ref) => {
		return <TextInput multiline numberOfLines={numberOfLines} {...props} ref={ref} />;
	}
);
