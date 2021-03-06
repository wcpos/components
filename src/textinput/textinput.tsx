import * as React from 'react';
import {
	View,
	TextInputProps as RNTextInputProps,
	TextInput as RNTextInput,
	NativeSyntheticEvent,
	TextInputContentSizeChangeEventData,
	Text as RNText,
	StyleProp,
	ViewStyle,
} from 'react-native';
import { useTheme } from 'styled-components/native';
import useUncontrolledState from '@wcpos/hooks/src/use-uncontrolled-state';
import useWhyDidYouUpdate from '@wcpos/hooks/src/use-why-did-you-update';
import get from 'lodash/get';
import useMeasure from '@wcpos/hooks/src/use-measure';
import * as Styled from './styles';
import Box from '../box';
import Button from '../button';
import Text from '../text';
import Icon from '../icon';
import Portal from '../portal';
import { BaseInputContainer } from '../base-input';

export interface Action {
	/**
	 * Label to display.
	 */
	label: string;
	/**
	 * Action to execute on click.
	 */
	action?: (value: string) => void;
	/**
	 *
	 */
	type?: import('@wcpos/themes').ColorTypes;
}

export interface TextInputProps {
	/**
	 * Label to display above the input.
	 */
	label: string;
	/**
	 * Text value in the input.
	 */
	value?: string;
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
	 * Placeholder text when input is empty.
	 */
	placeholder?: string;
	/**
	 * Help text shown to help the user with usage of this input.
	 */
	helpText?: string;
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
	autosize?: boolean;
	/**
	 * Set to `true` to add icon for clearing textfield.
	 */
	clearable?: boolean;
	/**
	 * Error text to display _(shown in a `InlineError` component)_.
	 *
	 * User can also pass `true` boolean value to display the `InlineError` without any message.
	 */
	error?: string | boolean;
	/**
	 * Type of the return key for the software keyboard.
	 */
	returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
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
	 * Set this to `true` to hide the label on top of the input. `label` property is still mandatory for accessibility purposes, even if not shown.
	 */
	hideLabel?: boolean;
	/**
	 * Set to `true` to select all text when focused.
	 */
	selectTextOnFocus?: boolean;
	/**
	 * Automatically handled by `type` property. Use this to override or when using `type="text"`.
	 *
	 * @see https://reactnative.dev/docs/textinput#autocapitalize
	 */
	autoCapitalize?: RNTextInputProps['autoCapitalize'];
	/**
	 * Called when the input value changes. `value` property should be changed to reflect this new value.
	 *
	 * If not set, component will be an uncontrolled component. @see https://reactjs.org/docs/uncontrolled-components.html
	 */
	onChange?: (value: string) => void;
	/**
	 * Called when focused.
	 */
	onFocus?: () => void;
	/**
	 * Called when blurred.
	 */
	onBlur?: () => void;
	/**
	 * Called when the keyboard submit to this field.
	 */
	onSubmit?: () => void;
	// action?: string;
	// invalid?: boolean;
	// onAction?: (value: string) => void;
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
	 * Called when a key is pressed.
	 */
	onKeyPress?: RNTextInputProps['onKeyPress'];
	/**
	 * Primary action to perform in the TextInput.
	 */
	action?: Action;
	/**
	 * Styles for the textinput container
	 */
	style?: StyleProp<ViewStyle>;
}

/**
 * Measure Text
 */
const MeasureText = ({
	value,
	onMeasure,
}: {
	value: string;
	onMeasure: ({ width }: { width: number }) => void;
}) => {
	const ref = React.useRef<RNText>(null);
	const { onLayout } = useMeasure({ onMeasure, ref });

	/**
	 * Place text in hidden portal
	 */
	return (
		<Portal keyPrefix="TextInputSize">
			<View style={{ position: 'absolute', top: '100%', height: 0, alignItems: 'flex-start' }}>
				<RNText onLayout={onLayout} ref={ref}>
					{value}
				</RNText>
			</View>
		</Portal>
	);
};

/**
 * Input field that users can type into.
 */
export const TextInputBase = (
	{
		label,
		value: valueRaw = '',
		onChange: onChangeRaw,
		type = 'text',
		placeholder,
		helpText,
		disabled = false,
		readonly = false,
		error = false,
		returnKeyType = 'next',
		focused = false,
		onSubmit,
		onClear,
		hideLabel = false,
		selectTextOnFocus = false,
		autoCapitalize,
		prefix,
		leftAccessory,
		onKeyPress,
		onFocus: onFocusProp,
		onBlur: onBlurProp,
		action,
		autosize = false,
		clearable = false,
		style,
		loading,
	}: TextInputProps,
	ref
) => {
	const [value, onChange] = useUncontrolledState(valueRaw, onChangeRaw);
	const theme = useTheme();

	// Register the form field in the Form
	const inputRef = React.useRef<RNTextInput>(null);
	React.useImperativeHandle(ref, () => inputRef.current as RNTextInput);

	const [hasFocus, setHasFocus] = React.useState(focused);

	const onFocus = React.useCallback(() => {
		onFocusProp?.();
		setHasFocus(true);
	}, [onFocusProp]);

	const onBlur = React.useCallback(() => {
		onBlurProp?.();
		setHasFocus(false);
	}, [onBlurProp]);

	const onLabelClick = React.useCallback(() => {
		const input = inputRef.current;

		if (input) {
			input.focus();
		}
	}, []);

	/**
	 * clearable
	 */
	const handleClear = React.useCallback(() => {
		return typeof onClear === 'function' ? onClear() : onChange('');
	}, [onChange, onClear]);

	/**
	 * autosize
	 */
	// const [measuredWidth, setMeasuredWidth] = React.useState(0);
	// const [measuredHeight, setMeasureHeight] = React.useState(0);
	// const handleContentSizeChange = (
	// 	event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>
	// ) => {
	// 	const contentSize = get(event, 'nativeEvent.contentSize');
	// 	console.log(contentSize.width);
	// 	// setWidth(contentSize.width);
	// 	setMeasureHeight(contentSize.height);
	// };
	// const handleMeasure = ({ width }: { width: number }) => {
	// 	setMeasuredWidth(width + 3);
	// };

	/**
	 * action
	 */
	const handleSubmitText = () => {
		if (typeof action?.action === 'function') {
			action?.action(value);
		}
	};

	/**
	 * Handle focus changes
	 */
	React.useEffect(() => {
		const input = inputRef.current;

		if (!input) {
			return;
		}

		if (focused) {
			input.focus();
		} else {
			input.blur();
		}
	}, [focused]);

	/**
	 *
	 */
	const inputType = React.useMemo<
		Pick<
			RNTextInputProps,
			'keyboardType' | 'textContentType' | 'autoCapitalize' | 'autoCorrect' | 'autoComplete'
		>
	>(() => {
		switch (type) {
			case 'text':
				return { textContentType: 'none', autoCapitalize };
			case 'email':
				return {
					keyboardType: 'email-address',
					textContentType: 'emailAddress',
					autoComplete: 'email',
					autoCapitalize: 'none',
				};
			case 'password':
				return {
					textContentType: 'password',
					autoComplete: 'password',
					autoCapitalize: 'none',
				};
			case 'new-password':
				return {
					textContentType: 'newPassword',
					autoComplete: 'password',
					autoCapitalize: 'none',
				};
			case 'first-name':
				return { textContentType: 'name', autoCapitalize: 'words' };
			case 'last-name':
				return { textContentType: 'familyName', autoCapitalize: 'words' };
			case 'integer':
				return { textContentType: 'none', keyboardType: 'number-pad' };
			case 'url':
				return {
					textContentType: 'URL',
					keyboardType: 'url',
					autoCapitalize: 'none',
					autoComplete: 'off',
				};
			case 'username':
				return { textContentType: 'none', autoCapitalize: 'none' };
			default:
				return {};
		}
	}, [type, autoCapitalize]);

	// useWhyDidYouUpdate('TextInput', []);

	return (
		<BaseInputContainer
			label={label}
			hideLabel={hideLabel}
			error={error}
			helpText={helpText}
			onLabelClick={onLabelClick}
			disabled={disabled}
		>
			<Box
				horizontal
				border
				rounding="small"
				align="center"
				// focused={hasFocus}
				style={[{ backgroundColor: theme.colors.inputBackground }, style]}
			>
				{leftAccessory || null}
				{prefix ? (
					<Box padding="small" paddingRight="none">
						<Text>{prefix}</Text>
					</Box>
				) : null}
				<Box fill padding="small">
					<Styled.TextInput
						ref={inputRef}
						{...inputType}
						placeholder={placeholder}
						placeholderTextColor={theme.colors.textMuted}
						editable={!disabled && !readonly}
						value={value}
						onChangeText={onChange}
						returnKeyType={returnKeyType}
						blurOnSubmit={returnKeyType !== 'next'} // Prevent keyboard flicker when going from one field to another
						onFocus={onFocus}
						onBlur={onBlur}
						onSubmitEditing={onSubmit}
						selectTextOnFocus={selectTextOnFocus}
						onKeyPress={onKeyPress}
						// multiline
						// onContentSizeChange={handleContentSizeChange}
						style={{ width: autosize ? measuredWidth : '100%' }}
					/>
				</Box>
				{clearable && value !== '' && (
					<Box padding="small">
						<Icon
							name="xmark"
							size="small"
							// type="secondary"
							onPress={handleClear}
							// backgroundStyle="none"
						/>
					</Box>
				)}
				{action && (
					<Button
						fill
						title={action.label}
						onPress={handleSubmitText}
						style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
						loading={loading}
					/>
				)}
				{autosize && <MeasureText value={value} onMeasure={handleMeasure} />}
			</Box>
		</BaseInputContainer>
	);
};

export const TextInput = React.forwardRef(TextInputBase);
