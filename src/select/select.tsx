import * as React from 'react';
import { ViewStyle, StyleProp } from 'react-native';

import isFunction from 'lodash/isFunction';
import isPlainObject from 'lodash/isPlainObject';

import Dropdown, { DropdownProps } from '../dropdown';
import Text from '../text';
import { TextInputContainer } from '../textinput';

/**
 *
 */
export interface SelectOption {
	/** Label for the Option. */
	label: string;

	/** Value for the option. */
	value: any;

	/** Disable this option. */
	disabled?: boolean;
}

/**
 *
 */
export type SelectProps = Omit<DropdownProps, 'items' | 'children'> & {
	/** Options available in the Select. */
	options: SelectOption[] | string[];

	/** Currently selected value. If null, no value is selected. */
	value?: SelectOption | string | null;

	/** Callback called when selection is changed. */
	onChange: (selected: SelectOption) => void;

	/** Text to display as a placeholder. */
	placeholder?: string;

	/** Display an error state. */
	error?: boolean | string;

	/** Disable the input and choice selection. */
	disabled?: boolean;

	/** */
	size?: import('@wcpos/themes').FontSizeTypes;

	/** Pass style prop to the select container */
	style?: StyleProp<ViewStyle>;

	/** */
	onBlur?: () => void;

	/** */
	autoFocus?: boolean;
};

/**
 * Let the user choose one option from multiple ones.
 */
export const Select = ({
	opened: _opened,
	options: optionsRaw,
	value,
	onChange,
	placeholder = 'Select',
	disabled = false,
	size = 'normal',
	onBlur,
	style,
	...props
}: SelectProps) => {
	const [opened, setOpened] = React.useState(_opened);

	/**
	 * Sync opened state with prop.
	 */
	React.useEffect(() => {
		setOpened(_opened);
	}, [_opened]);

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
		setOpened(false);
	};

	/**
	 *
	 */
	const handleBlur = React.useCallback(() => {
		if (isFunction(onBlur)) {
			onBlur();
		} else {
			setOpened(false);
		}
	}, [onBlur]);

	/**
	 *
	 */
	return (
		<Dropdown
			opened={opened}
			items={options}
			onSelect={handleSelect}
			matchWidth
			withArrow={false}
			onClose={() => setOpened(false)}
			{...props}
		>
			<TextInputContainer
				size={size}
				onPress={() => setOpened(true)}
				onFocus={() => setOpened(true)}
				onBlur={handleBlur}
				style={style}
			>
				{selected ? (
					<Text size={size}>{selected.label}</Text>
				) : (
					<Text size={size} type="secondary">
						{placeholder}
					</Text>
				)}
			</TextInputContainer>
		</Dropdown>
	);
};
