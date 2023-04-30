import * as React from 'react';

import delay from 'lodash/delay';
import isEmpty from 'lodash/isEmpty';
import isPlainObject from 'lodash/isPlainObject';

import Dropdown, { DropdownProps } from '../dropdown';
import TextInput, { TextInputProps } from '../textinput';
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
type ComboboxProps = {
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

	/**  */
	// textInputRef?: React.RefObject<TextInput>;
} & Pick<TextInputProps, 'autoFocus' | 'onBlur' | 'onClear'>;

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
	autoFocus,
	onClear,
	...props
}: ComboboxProps) => {
	const [opened, setOpened] = React.useState(false);
	const [searchValue, setSearchValue] = React.useState('');
	const options = React.useMemo(() => formatOptions(props.options), [props.options]);
	const textInputRef = React.useRef<TextInputType>(null);

	/**
	 * Handle search change.
	 */
	const onSearchChange = React.useCallback(
		(val: string) => {
			setSearchValue(val);
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
	const selected = React.useMemo(() => {
		if (typeof value === 'string') {
			return options.find((option) => option.value === value);
		}
		return value;
	}, [options, value]);

	/**
	 * HACK: textinput loses focus when the dropdown opens, so we need to refocus it.
	 */
	React.useEffect(() => {
		if (opened) {
			textInputRef.current?.focus();
			delay(() => textInputRef.current?.focus(), 200);
		}
	}, [opened, searchValue, options]);

	/**
	 * HACK: it the value changes, clear the searchValue so that the placeholder shows.
	 */
	React.useEffect(() => {
		setSearchValue('');
	}, [value]);

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
				ref={textInputRef}
				value={searchValue}
				placeholder={selected?.label || selected || placeholder}
				onChangeText={onSearchChange}
				clearable
				onClear={onClear}
				onKeyPress={(e) => {
					// console.log(e);
				}}
				containerStyle={{ flex: 1 }}
				/**
				 * FIXME: this is a hack, useEffect is being called before onLayout for the Popover.Target
				 * which means the width is not set correctly.
				 */
				onFocus={() => delay(() => setOpened(true), 100)}
				autoFocus={autoFocus}
			/>
		</Dropdown>
	);
};
