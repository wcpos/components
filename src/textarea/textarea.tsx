import * as React from 'react';
import { TextInput as RNTextInput } from 'react-native';

import { useTheme } from 'styled-components/native';

import TextInput, { TextInputProps } from '../textinput';

export interface TextAreaProps extends TextInputProps {}

export const TextArea = React.forwardRef<RNTextInput, TextAreaProps>(
	({ numberOfLines = 3, autoFocus, style, ...props }: TextAreaProps, ref) => {
		const inputRef = React.useRef<RNTextInput>(null);
		const theme = useTheme();

		/**
		 * https://github.com/necolas/react-native-web/issues/2581
		 */
		React.useEffect(
			() => {
				if (autoFocus && inputRef.current) {
					const inputElement = inputRef.current;
					inputElement.focus();

					// Wait for the next frame to ensure focus
					requestAnimationFrame(() => {
						if (inputElement && inputElement.isFocused()) {
							const domNode = inputElement;
							const position = props.value?.length || 0;
							domNode.setSelectionRange(position, position);
						}
					});
				}
			},
			[
				// intentionally not including autoFocus
			]
		);

		return (
			<TextInput
				multiline
				numberOfLines={numberOfLines}
				style={[{ lineHeight: theme.font.lineHeight.large }, style]}
				{...props}
				ref={(curr) => {
					// @TODO - fix this
					inputRef.current = curr;
				}}
			/>
		);
	}
);
