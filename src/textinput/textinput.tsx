import * as React from 'react';
import {
	TextInputProps as RNTextInputProps,
	TextInput as RNTextInput,
	NativeSyntheticEvent,
	TextInputContentSizeChangeEventData,
	StyleProp,
	TextStyle,
} from 'react-native';

import get from 'lodash/get';
import { useTheme } from 'styled-components/native';

import useMeasure from '@wcpos/hooks/src/use-measure';
import useMergedRef from '@wcpos/hooks/src/use-merged-ref';
import useUncontrolledState from '@wcpos/hooks/src/use-uncontrolled-state';

import { TextInputContainer } from './container';
import { getModifiers } from './modifiers';
import * as Styled from './styles';

/**
 *
 */
export type TextInputProps = RNTextInputProps & {
	/**
	 * Type of the TextField.
	 *
	 * Will define a logical `autoCapitalize` value if not set.
	 *
	 * Also defines the type of keyboard displayed and the value for autocomplete/autofill properties.
	 */
	type?:
		| 'text'
		| 'email'
		| 'password'
		| 'new-password'
		| 'first-name'
		| 'last-name'
		| 'integer'
		| 'url' // iOS only
		| 'username';
	/**
	 * Set to `true` to disable.
	 */
	disabled?: boolean;
	/**
	 * Set to `true` to disable.
	 */
	readonly?: boolean;
	/**
	 * Set to `true` for loading state.
	 */
	loading?: boolean;
	/**
	 * Set to `true` to expand width to fit text.
	 */
	// autosize?: boolean;
	/**
	 * Set to `true` to add icon for clearing textfield.
	 */
	clearable?: boolean;
	/**
	 * Put input into error state.
	 */
	error?: boolean;
	/**
	 * Set to `true` to focus the field and to `false` to blur it.
	 *
	 * To initially focus this field when arriving on this screen, simply use
	 *
	 * ```tsx
	 * <TextField focused />
	 * ```
	 */
	focused?: boolean;
	/**
	 * Called when the clear icon is pressed
	 */
	onClear?: () => void;
	/**
	 * Display a prefix label on the input.
	 */
	prefix?: string;
	/**
	 * Adds functionality to the TextInput, eg: buttons, pills, etc.
	 */
	leftAccessory?: React.ReactNode;
	/**
	 * Adds functionality to the TextInput, eg: action buttons
	 */
	rightAccessory?: React.ReactNode;
	/**
	 *
	 */
	style?: StyleProp<TextStyle>;

	/** */
	containerStyle?: StyleProp<TextStyle>;
};

/**
 * Input field that users can type into.
 */
export const TextInput = React.forwardRef<RNTextInput, TextInputProps>(
	(
		{
			value: valueRaw = '',
			onChangeText: onChangeTextRaw,
			type = 'text',
			placeholder,
			disabled = false,
			readonly = false,
			error = false,
			// returnKeyType = 'next',
			focused = false,
			// onSubmit,
			onClear,
			// selectTextOnFocus = false,
			autoCapitalize,
			prefix,
			leftAccessory,
			rightAccessory,
			// onKeyPress,
			onFocus: onFocusProp,
			onBlur: onBlurProp,
			clearable = false,
			style,
			loading,
			containerStyle,
			...props
		}: TextInputProps,
		ref
	) => {
		const theme = useTheme();
		const [value, onChangeText] = useUncontrolledState(valueRaw, onChangeTextRaw);
		const [hasFocus, setHasFocus] = React.useState(focused);
		const inputRef = React.useRef<RNTextInput>(null);
		const mergedRef = useMergedRef(ref, inputRef);

		/**
		 *
		 */
		const onFocus = React.useCallback(
			(e) => {
				onFocusProp?.(e);
				setHasFocus(true);
			},
			[onFocusProp]
		);

		/**
		 *
		 */
		const onBlur = React.useCallback(
			(e) => {
				onBlurProp?.(e);
				setHasFocus(false);
			},
			[onBlurProp]
		);

		/**
		 * clearable
		 */
		const handleClear = React.useCallback(() => {
			inputRef.current?.focus();
			return typeof onClear === 'function' ? onClear() : onChangeText('');
		}, [inputRef, onChangeText, onClear]);

		/**
		 * pass container focus to input
		 */
		const onContainerFocus = React.useCallback(() => {
			inputRef.current?.focus();
		}, [inputRef]);

		/**
		 *
		 */
		return (
			<TextInputContainer
				showClear={clearable && value !== ''}
				onClear={handleClear}
				prefix={prefix}
				leftAccessory={leftAccessory}
				rightAccessory={rightAccessory}
				onFocus={onContainerFocus}
				hasFocus={hasFocus}
				style={containerStyle}
			>
				<Styled.TextInput
					ref={mergedRef}
					{...getModifiers(type, autoCapitalize)}
					placeholder={placeholder}
					placeholderTextColor={theme.colors.textMuted}
					editable={!disabled && !readonly}
					value={value}
					onChangeText={onChangeText}
					// returnKeyType={returnKeyType}
					// blurOnSubmit={returnKeyType !== 'next'} // Prevent keyboard flicker when going from one field to another
					onFocus={onFocus}
					onBlur={onBlur}
					// onSubmitEditing={onSubmit}
					// selectTextOnFocus={selectTextOnFocus}
					// onKeyPress={onKeyPress}
					style={style}
					{...props}
				/>
			</TextInputContainer>
		);
	}
);
