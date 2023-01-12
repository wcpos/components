import * as React from 'react';

import { Combobox, ComboboxProps } from './combobox';
import { InputWithLabel, InputWithLabelProps } from '../form-layout';

export type ComboboxWithLabelProps = ComboboxProps & Omit<InputWithLabelProps, 'children'>;

export const ComboboxWithLabel = ({
	label,
	helpText,
	error,
	onLabelPress,
	...props
}: ComboboxWithLabelProps) => {
	return (
		<InputWithLabel label={label} helpText={helpText} error={error} onLabelPress={onLabelPress}>
			<Combobox {...props} />
		</InputWithLabel>
	);
};
