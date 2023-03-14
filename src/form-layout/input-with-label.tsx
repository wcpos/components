import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import Box from '../box';
import InlineError from '../inline-error';
import Text from '../text';

export interface InputWithLabelProps {
	/**
	 * Label shown above the input.
	 */
	label?: string;
	/**
	 * Callback called on click of the label.
	 */
	onLabelPress?: () => void;
	/**
	 * Additional text to help the user.
	 */
	helpText?: React.ReactNode;
	/**
	 * Display an error state.
	 */
	error?: string;
	/**
	 * Disable the input.
	 */
	disabled?: boolean;
	/**
	 * TextInput component.
	 */
	children: React.ReactNode;
}

/**
 * Wraps a basic Input field with label, helpText and error features.
 */
export const InputWithLabel = ({
	label,
	error,
	helpText,
	disabled,
	children,
	onLabelPress,
}: InputWithLabelProps) => {
	return (
		<Box space="xSmall">
			{label && (
				<TouchableWithoutFeedback onPress={onLabelPress} disabled={disabled}>
					<Box>
						<Text uppercase size="small" numberOfLines={1} type="textMuted">
							{label}
						</Text>
					</Box>
				</TouchableWithoutFeedback>
			)}

			{/* Actual form element goes here */}
			{children}

			{error && (
				<Box>
					<InlineError message={typeof error === 'string' ? error : ''} />
				</Box>
			)}

			{helpText && (
				<Box>
					<Text type="secondary" size="small">
						{helpText}
					</Text>
				</Box>
			)}
		</Box>
	);
};
