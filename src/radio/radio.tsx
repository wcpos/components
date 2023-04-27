import * as React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import isFunction from 'lodash/isFunction';

import { BackgroundCircle, CheckMark } from './styles';
import Box from '../box';
import InlineError from '../inline-error';
import Text from '../text';

export interface RadioProps {
	/**
	 * True if selected.
	 */
	value?: boolean;
	/**
	 * Label to display next to the Radio Button.
	 */
	label: React.ReactNode;
	/**
	 * Display an error state.
	 */
	error?: boolean | string;
	/**
	 * Additional text to aid in use.
	 */
	helpText?: React.ReactNode;
	/**
	 * Disables the input.
	 */
	disabled?: boolean;
	/**
	 * Called when selection state changes. Should propagate change to `checked` prop.
	 */
	onChange?: (checked: boolean) => void;
}

export const Radio = ({
	value = false,
	label,
	error,
	helpText,
	disabled = false,
	onChange,
}: RadioProps) => {
	const onPress = React.useCallback(() => {
		if (isFunction(onChange)) {
			onChange(!value);
		}
	}, [value, onChange]);

	return (
		<TouchableWithoutFeedback onPress={onPress} disabled={disabled}>
			<Box horizontal space="small">
				<BackgroundCircle>
					<CheckMark checked={value} />
				</BackgroundCircle>
				<Box>
					<Text>{label}</Text>

					{error ? (
						<Box>
							<InlineError message={typeof error === 'string' ? error : ''} />
						</Box>
					) : null}

					{helpText ? (
						<Box>
							<Text type="secondary" size="small">
								{helpText}
							</Text>
						</Box>
					) : null}
				</Box>
			</Box>
		</TouchableWithoutFeedback>
	);
};
