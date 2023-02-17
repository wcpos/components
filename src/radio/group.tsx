import * as React from 'react';

import isPlainObject from 'lodash/isPlainObject';

import { Radio } from './radio';
import Box from '../box';
import { InputWithLabel } from '../form-layout';

/**
 *
 */
export interface RadioOption {
	/**
	 * Label for the Option.
	 */
	label: string;
	/**
	 * Value for the option.
	 */
	value: any;
	/**
	 * Disable this option.
	 */
	disabled?: boolean;
}

/**
 *
 */
export interface RadioGroupProps {
	/**
	 * Options available for selection.
	 */
	options: RadioOption[] | string[];
	/**
	 * Currently selected value. If null, no value is selected.
	 */
	value?: RadioOption | string | null;
	/**
	 * Callback called when selection is changed.
	 */
	onChange?: (selected: string) => void;
}

/**
 *
 */
export const Group = ({ options: optionsRaw, value, onChange, label }: RadioGroupProps) => {
	/**
	 * Options can be passed as an array of strings or an array of objects.
	 * NOTE - this mirrors select
	 */
	const options = React.useMemo(() => {
		let _options = optionsRaw;

		// special case for { 0: '', 1: '', ... } or { '0': { label: '', value: ''}, ... }
		if (isPlainObject(optionsRaw)) {
			_options = Object.values(optionsRaw);
		}

		// turn strings into [{ label: '', value: '' }, ...]
		if (Array.isArray(_options)) {
			return _options.map((choice) =>
				typeof choice === 'string' ? { label: choice, value: choice } : choice
			);
		}

		return _options;
	}, [optionsRaw]);

	/**
	 *
	 */
	const handleChange = (option: RadioOption) => {
		if (onChange) {
			onChange(option.value);
		}
	};

	/**
	 *
	 */
	return (
		<Box space="small">
			{options.map((option) => (
				<Radio
					key={option.value}
					label={option.label}
					checked={option.value === value}
					onChange={() => {
						handleChange(option);
					}}
				/>
			))}
		</Box>
	);
};
