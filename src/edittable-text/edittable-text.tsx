import * as React from 'react';

import { useTheme } from 'styled-components/native';

import * as Styled from './styles';
import Text from '../text';
import TextInput, { TextInputContainer } from '../textinput';

export interface EdittableTextProps {
	children?: string;
	/**
	 * Text value in the input.
	 */
	value?: string;
	/**
	 * Called when the input value changes. `value` property should be changed to reflect this new value.
	 *
	 * If not set, component will be an uncontrolled component. @see https://reactjs.org/docs/uncontrolled-components.html
	 */
	onChange?: (value: string) => void;
}

/**
 *
 */
export const EdittableText = ({ onChange, ...props }: EdittableTextProps) => {
	const text = props.children || props.value;
	const [isEditting, setIsEditting] = React.useState(false);
	const theme = useTheme();

	const startEditting = React.useCallback(() => {
		setIsEditting(true);
	}, []);

	const endEditting = React.useCallback(() => {
		setIsEditting(false);
	}, []);

	return isEditting ? (
		<TextInput autoFocus value={text} onBlur={() => setIsEditting(false)} onChange={onChange} />
	) : (
		<TextInputContainer onPress={() => setIsEditting(true)} style={{ width: '100%' }}>
			<Text>{text}</Text>
		</TextInputContainer>
	);
};
