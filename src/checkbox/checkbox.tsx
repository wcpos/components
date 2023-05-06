import * as React from 'react';
import { ViewStyle } from 'react-native';

import isFunction from 'lodash/isFunction';

import Icon from './icon';
import Label, { CheckboxLabelProps } from './label';
import Box from '../box';
import Pressable from '../pressable';

export interface CheckboxProps {
	/** True if selected. */
	value?: boolean;

	/** Label to display next to the Checkbox. */
	label?: React.ReactNode;

	/** Additional text to aid in use. */
	helpText?: React.ReactNode;

	/** Disables the input. */
	disabled?: boolean;

	/** Called when selection state changes. Should propagate change to `checked` prop. */
	onChange?: (checked: boolean) => void;

	/** Size of the Checkbox. Matches font sizes. */
	size?: CheckboxLabelProps['size'];

	/** */
	type?: CheckboxLabelProps['type'];

	/** Style passed to surrounding box. */
	style?: ViewStyle;
}

/**
 * FIXME - it would be good if space was in correcr proportion to size
 */
const spaceMap = {
	xSmall: 'xSmall',
	small: 'xSmall',
	normal: 'small',
	medium: 'small',
	large: 'normal',
	xLarge: 'normal',
	xxLarge: 'medium',
};

/**
 * TODO - hover, focus states
 */
export const Checkbox = ({
	label,
	disabled,
	helpText,
	value = false,
	onChange,
	size = 'normal',
	type,
	style,
}: CheckboxProps) => {
	const onPress = React.useCallback(() => {
		if (isFunction(onChange)) {
			onChange(!value);
		}
	}, [value, onChange]);

	return (
		<Pressable disabled={disabled} onPress={onPress}>
			<Box horizontal space={spaceMap[size]} style={style}>
				<Icon checked={value} disabled={disabled} size={size} />
				{label && (
					<Label checked={value} info={helpText} size={size} type={type}>
						{label}
					</Label>
				)}
			</Box>
		</Pressable>
	);
};
