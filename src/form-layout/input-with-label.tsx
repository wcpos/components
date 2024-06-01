import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';

import Box from '../box';
import InlineError from '../inline-error';
import Pressable from '../pressable';
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
	/**
	 * Additional styles.
	 */
	style?: StyleProp<ViewStyle>;
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
	style,
}: InputWithLabelProps) => {
	return (
		<Box space="xSmall" style={style}>
			{label && (
				<Pressable onPress={onLabelPress} disabled={disabled}>
					<Box>
						<Text uppercase size="small" numberOfLines={1} type="textMuted">
							{label}
						</Text>
					</Box>
				</Pressable>
			)}

			{/* Actual form element goes here */}
			{children}

			{error && (
				<Box>
					<InlineError size="small" message={typeof error === 'string' ? error : ''} />
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
