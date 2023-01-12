import * as React from 'react';
import { TextInput as RNTextInput } from 'react-native';

import { TextInput, TextInputProps } from './textinput';
import InputContainer, { InputContainerProps } from '../form-layout';

export type TextInputWithLabelProps = TextInputProps & InputContainerProps;

export const TextInputWithLabel = ({
	label,
	helpText,
	error,
	onLabelPress,
	...props
}: TextInputWithLabelProps) => {
	/**
	 *
	 */
	const ref = React.useRef<RNTextInput>(null);

	/**
	 * Focus the input on label press.
	 */
	const handleLabelPress = React.useCallback(() => {
		ref.current?.focus();
		onLabelPress && onLabelPress();
	}, [onLabelPress]);

	/**
	 *
	 */
	return (
		<InputContainer label={label} helpText={helpText} error={error} onLabelPress={handleLabelPress}>
			<TextInput {...props} ref={ref} />
		</InputContainer>
	);
};
