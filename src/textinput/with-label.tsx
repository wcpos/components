import * as React from 'react';
import { TextInput as RNTextInput } from 'react-native';

import useMergedRef from '@wcpos/hooks/src/use-merged-ref';

import { TextInput, TextInputProps } from './textinput';
import { InputWithLabel, InputWithLabelProps } from '../form-layout';

export type TextInputWithLabelProps = TextInputProps & Omit<InputWithLabelProps, 'children'>;

/**
 *
 */
export const TextInputWithLabel = React.forwardRef<RNTextInput, TextInputWithLabelProps>(
	({ label, helpText, error, onLabelPress, ...props }, ref) => {
		/**
		 *
		 */
		const mergedRef = useMergedRef(React.useRef<RNTextInput>(null), ref);

		/**
		 * Focus the input on label press.
		 */
		const handleLabelPress = React.useCallback(() => {
			mergedRef.current?.focus();
			onLabelPress && onLabelPress();
		}, [mergedRef, onLabelPress]);

		/**
		 *
		 */
		return (
			<InputWithLabel
				label={label}
				helpText={helpText}
				error={error}
				onLabelPress={handleLabelPress}
			>
				<TextInput {...props} ref={mergedRef} />
			</InputWithLabel>
		);
	}
);
