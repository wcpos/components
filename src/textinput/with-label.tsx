import * as React from 'react';
import { TextInput as RNTextInput } from 'react-native';

import { TextInput, TextInputProps } from './textinput';
import { InputWithLabel, InputWithLabelProps } from '../form-layout';

export type TextInputWithLabelProps = TextInputProps & InputWithLabelProps;

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
		<InputWithLabel label={label} helpText={helpText} error={error} onLabelPress={handleLabelPress}>
			<TextInput {...props} ref={ref} />
		</InputWithLabel>
	);
};
