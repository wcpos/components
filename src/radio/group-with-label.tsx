import * as React from 'react';

import { Group, RadioGroupProps } from './group';
import { InputWithLabel, InputWithLabelProps } from '../form-layout';

export type RadioGroupWithLabelProps = RadioGroupProps & Omit<InputWithLabelProps, 'children'>;

export const RadioGroupWithLabel = ({
	label,
	helpText,
	error,
	onLabelPress,
	...props
}: RadioGroupWithLabelProps) => {
	return (
		<InputWithLabel label={label} helpText={helpText} error={error} onLabelPress={onLabelPress}>
			<Group {...props} />
		</InputWithLabel>
	);
};
