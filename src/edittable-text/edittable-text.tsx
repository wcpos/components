import * as React from 'react';
import { useTheme } from 'styled-components/native';
import Text from '../text';
import TextInput from '../textinput';
import * as Styled from './styles';

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
		<TextInput focused label="" value={text} onBlur={endEditting} onChange={onChange} />
	) : (
		<Styled.BorderedPressable
			onPress={startEditting}
			style={({ hovered }) => {
				if (hovered) {
					return { borderColor: theme.colors.lightestGrey };
				}
				return {};
			}}
		>
			<Text>{text}</Text>
		</Styled.BorderedPressable>
	);
};
