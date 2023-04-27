import * as React from 'react';

import delay from 'lodash/delay';
import isEmpty from 'lodash/isEmpty';
import isPlainObject from 'lodash/isPlainObject';

import Dropdown from '../dropdown';
import TextInput from '../textinput';
// import Search from '../search';

type TextInputType = import('react-native').TextInput;

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

	/** Customise option display */
	renderOption?: (option: ComboboxOption) => React.ReactNode;

	/** Autofocus so the dropdown is open and textinput is in focus */
	autofocus?: boolean;

	/**  */
	// textInputRef?: React.RefObject<TextInput>;
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
	value,
	onChange,
	placeholder,
	// searchValue,
	onSearch,
	renderOption,
	autofocus,
	...props
}: ComboboxProps) => {
	const [opened, setOpened] = React.useState(false);
	const searchValue = React.useRef('');
	const options = React.useMemo(() => formatOptions(props.options), [props.options]);
	// const textInputRef = React.useRef<TextInputType>(null);

	/**
	 * Handle search change.
	 */
	const onSearchChange = React.useCallback(
		(val: string) => {
			searchValue.current = val;
			if (onSearch) {
				onSearch(val);
			}
		},
		[onSearch]
	);

	/**
	 * Maybe filter options based on the search term.
	 */
	const filteredOptions = React.useMemo(() => {
		// early exit if the parent is controlling the search
		if (onSearch || !searchValue.current || searchValue.current === '') {
			return options;
		}

		// filter option.label on the search term
		return options.filter((option) =>
			option.label.toLowerCase().includes(searchValue.current.toLowerCase())
		);
	}, [options, searchValue, onSearch]);

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
	return (
		<Dropdown
			opened={opened}
			onClose={() => setOpened(false)}
			onOpen={() => setOpened(true)}
			withArrow={false}
			matchWidth
			items={filteredOptions}
			onSelect={onChange}
			renderItem={renderOption}
			withinPortal
			{...props}
		>
			<TextInput
				value={searchValue.current}
				placeholder={selected?.label || selected || placeholder}
				onChangeText={onSearchChange}
				clearable
				onKeyPress={(e) => {
					// console.log(e);
				}}
				containerStyle={{ flex: 1 }}
				// ref={textInputRef}
				/**
				 * FIXME: this is a hack, useEffect is being called before onLayout for the Popover.Target
				 * which means the width is not set correctly.
				 */
				onFocus={() => delay(() => setOpened(true), 100)}
				autoFocus={autofocus}
			/>
		</Dropdown>
	);
};
