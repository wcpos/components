import * as React from 'react';
import { ScrollView } from 'react-native';
import { useUncontrolledState } from '@wcpos/common/src/hooks/use-uncontrolled-state';
import Popover from '../popover';
import BaseInput, { BaseInputContainer } from '../base-input';

export interface SelectChoice {
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

export interface SelectProps {
	/**
	 * Label for the Select.
	 */
	label: string;
	/**
	 * Choices available in the Select.
	 */
	choices: SelectChoice[];
	/**
	 * Currently selected value. If null, no value is selected.
	 */
	selected?: string | null;
	/**
	 * Callback called when selection is changed.
	 */
	onChange?: (selected: string) => void;
	/**
	 * Text to display as a placeholder.
	 */
	placeholder?: string;
	/**
	 * Additional text to help the user.
	 */
	helpText?: React.ReactNode;
	/**
	 * Display an error state.
	 */
	error?: boolean | string;
	/**
	 * Disable the input and choice selection.
	 */
	disabled?: boolean;
}

const maxHeight = 300;

/**
 * Let the user choose one option from multiple ones.
 */
export const Select = ({
	label,
	choices,
	selected: selectedRaw = null,
	onChange: onChangeRaw,
	placeholder,
	helpText,
	error = false,
	disabled = false,
}: SelectProps) => {
	const [open, setOpen] = React.useState(false);
	const showPopover = React.useCallback(() => setOpen(true), []);
	const hidePopover = React.useCallback(() => setOpen(false), []);
	const [selected, onChange] = useUncontrolledState(
		selectedRaw,
		onChangeRaw as ((value: string | null) => string) | undefined // This will never be called with a null parameter
	);

	const selectedChoice = React.useMemo(
		() => choices.find((x) => x.value === selected),
		[choices, selected]
	);

	const choiceComponents = React.useMemo(
		() =>
			choices.map((choice) => (
				<Popover.Item
					key={choice.value}
					label={choice.label}
					disabled={choice.disabled}
					// eslint-disable-next-line react/jsx-no-bind
					onSelect={() => onChange(choice.value)}
				/>
			)),
		[choices, onChange]
	);

	return (
		<BaseInputContainer
			label={label}
			disabled={disabled}
			helpText={helpText}
			error={error}
			onLabelClick={showPopover}
		>
			<Popover
				open={open}
				activator={
					<BaseInput
						value={selectedChoice?.label ?? ''}
						placeholder={placeholder}
						disabled={disabled}
						focused={open}
						onPress={showPopover}
					/>
				}
				onRequestClose={hidePopover}
				popoverStyle={{ maxHeight }}
				hideBackdrop
				matchWidth
			>
				<ScrollView>{choiceComponents}</ScrollView>
			</Popover>
		</BaseInputContainer>
	);
};
