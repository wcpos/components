import * as React from 'react';

import isPlainObject from 'lodash/isPlainObject';

import { useUncontrolledState } from '@wcpos/hooks/src/use-uncontrolled-state';

import Dropdown, { DropdownProps } from '../dropdown';
import Text from '../text';
import { TextInputContainer } from '../textinput';

/**
 *
 */
export interface SelectOption {
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
export type SelectProps = Omit<DropdownProps, 'items' | 'children'> & {
	/**
	 * Options available in the Select.
	 */
	options: SelectOption[] | string[];
	/**
	 * Currently selected value. If null, no value is selected.
	 */
	value?: SelectOption | string | null;
	/**
	 * Callback called when selection is changed.
	 */
	onChange?: (selected: SelectOption) => void;
	/**
	 * Text to display as a placeholder.
	 */
	placeholder?: string;
	/**
	 * Display an error state.
	 */
	error?: boolean | string;
	/**
	 * Disable the input and choice selection.
	 */
	disabled?: boolean;
};

const maxHeight = 300;

/**
 * Let the user choose one option from multiple ones.
 */
export const Select = ({
	options: optionsRaw,
	value: valueRaw,
	onChange: onChangeRaw,
	placeholder = 'Select',
	disabled = false,
	...props
}: SelectProps) => {
	const [open, setOpen] = React.useState(false);
	const [value, onChange] = useUncontrolledState<typeof valueRaw>(valueRaw, onChangeRaw);

	/**
	 *
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
	const selected = React.useMemo(() => {
		if (typeof value === 'string') {
			return options.find((option) => option.value === value);
		}
		return value;
	}, [options, value]);

	/**
	 *
	 */
	const handleSelect = (selected: any) => {
		onChange(selected);
		setOpen(false);
	};

	return (
		<Dropdown
			opened={open}
			items={options}
			onSelect={handleSelect}
			matchWidth
			withArrow={false}
			onClose={() => setOpen(false)}
			{...props}
		>
			<TextInputContainer onPress={() => setOpen(true)}>
				{selected ? <Text>{selected.label}</Text> : <Text type="secondary">{placeholder}</Text>}
			</TextInputContainer>
		</Dropdown>
	);
};
