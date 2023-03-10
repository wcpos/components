import * as React from 'react';
import { ViewStyle } from 'react-native';

import useUncontrolledState from '@wcpos/hooks/src/use-uncontrolled-state';

import Icon from './icon';
import Label, { CheckboxLabelProps } from './label';
import Box from '../box';
import Pressable from '../pressable';

export interface CheckboxProps {
	/** True if selected. */
	value?: boolean;

	/** Label to display next to the Checkbox. */
	label: React.ReactNode;

	/** Additional text to aid in use. */
	helpText?: React.ReactNode;

	/** Disables the input. */
	disabled?: boolean;

	/**
	 * Called when selection state changes. Should propagate change to `checked` prop.
	 *
	 * If not set, component will be an uncontrolled component. @see https://reactjs.org/docs/uncontrolled-components.html
	 */
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
	value: checkedRaw = false,
	onChange: onChangeRaw,
	size = 'normal',
	type,
	style,
}: CheckboxProps) => {
	const [checked, onChange] = useUncontrolledState(checkedRaw, onChangeRaw);
	const onPress = React.useCallback(() => onChange?.(!checked), [checked, onChange]);

	return (
		<Pressable disabled={disabled} onPress={onPress}>
			<Box horizontal space={spaceMap[size]} style={style}>
				<Icon checked={checked} disabled={disabled} size={size} />
				<Label checked={checked} info={helpText} size={size} type={type}>
					{label}
				</Label>
			</Box>
		</Pressable>
	);
};
