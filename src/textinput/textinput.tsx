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

import get from 'lodash/get';
import { useTheme } from 'styled-components/native';

import useMeasure from '@wcpos/hooks/src/use-measure';
import useUncontrolledState from '@wcpos/hooks/src/use-uncontrolled-state';
import useWhyDidYouUpdate from '@wcpos/hooks/src/use-why-did-you-update';

import { TextInputContainer } from './container';
import { getModifiers } from './modifiers';
import * as Styled from './styles';
import Button from '../button';

/**
 *
 */
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

/**
 *
 */
type TextInputProps = RNTextInputProps & {
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
	 * Called when the input value changes. `value` property should be changed to reflect this new value.
	 *
	 * If not set, component will be an uncontrolled component. @see https://reactjs.org/docs/uncontrolled-components.html
	 */
	onChange?: (value: string) => void;
	/**
	 * Called when the keyboard submit to this field.
	 */
	onSubmit?: () => void;
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
	 * Primary action to perform in the TextInput.
	 */
	action?: Action;
};

// /**
//  * Measure Text
//  */
// const MeasureText = ({
// 	value,
// 	onMeasure,
// }: {
// 	value: string;
// 	onMeasure: ({ width }: { width: number }) => void;
// }) => {
// 	const ref = React.useRef<RNText>(null);
// 	const { onLayout } = useMeasure({ onMeasure, ref });

// 	/**
// 	 * Place text in hidden portal
// 	 */
// 	return (
// 		<Portal keyPrefix="TextInputSize">
// 			<View style={{ position: 'absolute', top: '100%', height: 0, alignItems: 'flex-start' }}>
// 				<RNText onLayout={onLayout} ref={ref}>
// 					{value}
// 				</RNText>
// 			</View>
// 		</Portal>
// 	);
// };

/**
 * Input field that users can type into.
 */
export const TextInput = React.forwardRef<RNTextInput, TextInputProps>(
	(
		{
			value: valueRaw = '',
			onChange: onChangeRaw,
			type = 'text',
			placeholder,
			disabled = false,
			readonly = false,
			error = false,
			returnKeyType = 'next',
			focused = false,
			onSubmit,
			onClear,
			selectTextOnFocus = false,
			autoCapitalize,
			prefix,
			leftAccessory,
			onKeyPress,
			onFocus: onFocusProp,
			onBlur: onBlurProp,
			action,
			// autosize = false,
			clearable = false,
			style,
			loading,
		}: TextInputProps,
		ref
	) => {
		const [value, onChange] = useUncontrolledState(valueRaw, onChangeRaw);
		const theme = useTheme();
		const [hasFocus, setHasFocus] = React.useState(focused);

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
		// React.useEffect(() => {
		// 	const input = ref.current;

		// 	if (!input) {
		// 		return;
		// 	}

		// 	if (focused) {
		// 		input.focus();
		// 	} else {
		// 		input.blur();
		// 	}
		// }, [focused, ref]);

		// useWhyDidYouUpdate('TextInput', []);

		/**
		 *
		 */
		return (
			<TextInputContainer
				showClear={clearable && value !== ''}
				onClear={handleClear}
				leftAccessory={leftAccessory}
				prefix={prefix}
				rightAccessory={
					action && (
						<Button
							title={action.label}
							onPress={handleSubmitText}
							style={{
								borderTopLeftRadius: 0,
								borderBottomLeftRadius: 0,
								borderTopRightRadius: theme.rounding.small,
								borderBottomRightRadius: theme.rounding.small,
							}}
							loading={loading}
						/>
					)
				}
			>
				<Styled.TextInput
					ref={ref}
					{...getModifiers(type, autoCapitalize)}
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
					// style={{ width: autosize ? measuredWidth : '100%' }}
					style={{ width: '100%' }}
				/>
			</TextInputContainer>
		);
	}
);
