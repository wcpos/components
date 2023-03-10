import * as React from 'react';

import isPlainObject from 'lodash/isPlainObject';

import { useUncontrolledState } from '@wcpos/hooks/src/use-uncontrolled-state';

import Dropdown from '../dropdown';
import TextInput from '../textinput';
// import Search from '../search';

/**
 *
 */
export interface ComboboxOption {
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
export interface ComboboxProps {
	/**
	 * Options available in the Select.
	 */
	options: ComboboxOption[] | string[];
	/**
	 * Currently selected value. If null, no value is selected.
	 */
	value?: ComboboxOption | string | null;
	/**
	 * Callback called when selection is changed.
	 */
	onChange?: (selected: any) => void;
	/**
	 * Callback called when selection is changed.
	 */
	onSearch?: (value: string) => void;
	/**
	 * Search term
	 */
	searchValue?: string | null;
	/**
	 * Text to display as a placeholder.
	 */
	placeholder?: string;
}

/**
 * Format options to be used in the Dropdown.
 * Note: this should return a new array, not mutate the original one.
 */
const formatOptions = (options: ComboboxOption[] | string[]) => {
	// special case for { 0: '', 1: '', ... } or { '0': { label: '', value: ''}, ... }
	if (isPlainObject(options)) {
		return Object.values(options);
	}

	// turn strings into [{ label: '', value: '' }, ...]
	if (Array.isArray(options)) {
		return options.map((choice) =>
			typeof choice === 'string' ? { label: choice, value: choice } : { ...choice }
		);
	}

	// this should never happen?
	return options;
};

/**
 * Let the user search and choose one option from multiple ones.
 */
export const Combobox = ({
	value: selected = null,
	onChange,
	placeholder,
	// searchValue,
	onSearch,
	...props
}: ComboboxProps) => {
	// const [selected, onChange] = useUncontrolledState(
	// 	selectedRaw,
	// 	onChangeRaw as ((value: string | null) => string) | undefined // This will never be called with a null parameter
	// );
	const [opened, setOpened] = React.useState(false);
	const [searchValue, setSearchValue] = React.useState('');
	const options = React.useMemo(() => formatOptions(props.options), [props.options]);

	/**
	 * Handle search change.
	 */
	const onSearchChange = React.useCallback(
		(value: string) => {
			setSearchValue(value);
			if (onSearch) {
				onSearch(value);
			}
		},
		[onSearch]
	);

	/**
	 * Maybe filter options based on the search term.
	 */
	const filteredOptions = React.useMemo(() => {
		// early exit if the parent is controlling the search
		if (onSearch || !searchValue || searchValue === '') {
			return options;
		}

		// filter option.label on the search term
		return options.filter((option) =>
			option.label.toLowerCase().includes(searchValue.toLowerCase())
		);
	}, [options, searchValue, onSearch]);

	/**
	 *
	 */
	return (
		<Dropdown
			opened={opened}
			onClose={() => setOpened(false)}
			withArrow={false}
			matchWidth
			items={filteredOptions}
			onSelect={onChange}
			{...props}
		>
			<TextInput
				value={searchValue}
				placeholder={selected?.label ?? (selected || placeholder)}
				onChangeText={onSearchChange}
				onFocus={() => setOpened(true)}
				clearable
				onKeyPress={(e) => {
					console.log(e);
				}}
				containerStyle={{ flex: 1 }}
			/>
		</Dropdown>
	);
};
