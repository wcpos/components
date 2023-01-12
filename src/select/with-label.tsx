import * as React from 'react';

import { Select, SelectProps } from './select';
import { InputWithLabel, InputWithLabelProps } from '../form-layout';

export type SelectWithLabelProps = SelectProps & Omit<InputWithLabelProps, 'children'>;

export const SelectWithLabel = ({
	label,
	helpText,
	error,
	onLabelPress,
	...props
}: SelectWithLabelProps) => {
	return (
		<InputWithLabel label={label} helpText={helpText} error={error} onLabelPress={onLabelPress}>
			<Select {...props} />
		</InputWithLabel>
	);
};
