import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { useTheme } from 'styled-components/native';

import Box from '../box';
import Icon from '../icon';
import Pressable, { PressableProps } from '../pressable';
import Text from '../text';

/**
 *
 */
export type TextInputContainerProps = {
	/**
	 * Usually this will be the TextInput component, but can be plain text, eg: for Select component
	 */
	children: React.ReactNode;
	/**
	 * Set to `true` to add clear icon.
	 */
	showClear?: boolean;
	/**
	 *
	 */
	leftAccessory?: React.ReactNode;
	/**
	 *
	 */
	prefix?: string;
	/**
	 *
	 */
	rightAccessory?: React.ReactNode;
	/**
	 *
	 */
	style?: StyleProp<ViewStyle>;
	/**
	 * Called when the clear icon is pressed
	 */
	onClear?: () => void;

	/**  */
	hasFocus?: boolean;
} & Pick<PressableProps, 'onPress' | 'onLongPress' | 'onHoverIn' | 'onHoverOut' | 'onFocus'>;

/**
 *
 */
export const TextInputContainer = ({
	children,
	showClear,
	leftAccessory,
	prefix,
	rightAccessory,
	style,
	onClear,
	onPress,
	onLongPress,
	onHoverIn,
	onHoverOut,
	onFocus,
	hasFocus,
}: TextInputContainerProps) => {
	const theme = useTheme();
	const input = typeof children === 'string' ? <Text>{children}</Text> : children;

	return (
		<Pressable
			onPress={onPress}
			onLongPress={onLongPress}
			onHoverIn={onHoverIn}
			onHoverOut={onHoverOut}
			onFocus={onFocus}
			style={style}
		>
			<Box
				fill
				horizontal
				border
				rounding="small"
				align="center"
				// focused={hasFocus}
				style={[
					{
						flex: 1,
						backgroundColor: theme.colors.inputBackground,
						borderColor: hasFocus ? theme.colors.primary : theme.colors.border,
						// alignItems: 'stretch',
					},
				]}
			>
				{leftAccessory}
				{prefix && (
					<Box padding="small" paddingRight="none">
						<Text>{prefix}</Text>
					</Box>
				)}
				<Box padding="small" style={{ flex: 1 }}>
					{/** The actual input goes here */ input}
				</Box>
				{showClear && (
					<Box padding="small">
						<Icon
							name="xmark"
							size="small"
							// type="secondary"
							onPress={onClear}
							// backgroundStyle="none"
						/>
					</Box>
				)}
				{rightAccessory}
			</Box>
		</Pressable>
	);
};
