import * as React from 'react';
import { View } from 'react-native';

import { useTheme } from 'styled-components/native';

import Text, { TextProps } from '../text';
import TextArea from '../textarea';
import { TextInputContainer } from '../textinput';

export interface EdittableTextProps extends TextProps {
	onChange?: (value: string) => void;
}

/**
 *
 */
export const EdittableText = ({
	children,
	onChange,
	numberOfLines = 2,
	...props
}: EdittableTextProps) => {
	const [isEditting, setIsEditting] = React.useState(false);
	const [text, setText] = React.useState<string>(String(children));
	const theme = useTheme();

	/**
	 *
	 */
	const startEditting = React.useCallback(() => {
		setIsEditting(true);
	}, []);

	/**
	 *
	 */
	const endEditting = React.useCallback(() => {
		setIsEditting(false);
		if (text !== String(children)) {
			onChange?.(text);
		}
	}, [children, onChange, text]);

	/**
	 *
	 */
	return isEditting ? (
		<TextArea
			autoFocus
			multiline
			numberOfLines={numberOfLines}
			value={text}
			onBlur={endEditting}
			onChangeText={setText}
			/**
			 * blurOnSubmit adds a \n to the end of the text
			 */
			onReturnKeyPress={endEditting}
		/>
	) : (
		<View style={{ flexDirection: 'row', maxWidth: '100%' }}>
			<TextInputContainer onPress={startEditting} style={{ maxWidth: '100%' }}>
				<Text style={{ lineHeight: theme.font.lineHeight.large }} {...props}>
					{children}
				</Text>
			</TextInputContainer>
		</View>
	);
};
