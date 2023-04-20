import * as React from 'react';
import { View } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Select, SelectProps } from './select';
import { SelectWithLabel, SelectWithLabelProps } from './with-label';
import Portal from '../portal';

import type { Meta } from '@storybook/react';

/**
 * Select require (uses Popover)
 * - SafeAreaProvider
 * - Portals
 * - AppProviderSizeProvider
 */
const AppProvider = (Story, context) => {
	return (
		<SafeAreaProvider>
			<Portal.Provider>
				<View style={{ height: '600px' }}>
					<Story {...context} />
				</View>
				<Portal.Manager />
			</Portal.Provider>
		</SafeAreaProvider>
	);
};

const meta: Meta<typeof Select> = {
	title: 'Components/Select',
	component: Select,
	decorators: [AppProvider],
};

/**
 *
 */
export const BasicUsage = (props: SelectProps) => {
	const [selected, setSelected] = React.useState(props.value);

	return <Select {...props} value={selected} onChange={setSelected} />;
};
BasicUsage.args = {
	value: null,
	placeholder: 'Should be a color',
	options: [
		{ label: 'Blue', value: 'blue' },
		{ label: 'Red', value: 'red' },
		{ label: 'Green', value: 'green' },
		{ label: 'Yellow', value: 'yellow' },
	],
};

/**
 *
 */
export const WithLabel = (props: SelectWithLabelProps) => {
	const [selected, setSelected] = React.useState(props.value);

	return <SelectWithLabel {...props} value={selected} onChange={setSelected} />;
};
WithLabel.args = {
	label: 'Select your favorite color',
	value: null,
	placeholder: 'Should be a color',
	helpText: 'Colors are displayed in neutral color, in case you are color blind.',
	options: [
		{ label: 'Blue', value: 'blue' },
		{ label: 'Red', value: 'red' },
		{ label: 'Green', value: 'green' },
		{ label: 'Yellow', value: 'yellow' },
	],
};

/**
 *
 */
export const WithManyOptions = () => {
	const [selected, setSelected] = React.useState<string | null>(null);
	const options: number[] = [];

	for (let i = 0; i < 100; i++) {
		options.push(i);
	}

	return (
		<SelectWithLabel
			label="Choose a number"
			placeholder="choose"
			value={selected}
			options={options.map((x) => ({
				label: x.toString(),
				value: x.toString(),
				disabled: x < 10,
			}))}
			onChange={setSelected}
			helpText="Numbers which are below 10 are disabled."
		/>
	);
};

/**
 *
 */
export const Disabled: React.FC = () => {
	const [selected, setSelected] = React.useState<string | null>(null);

	return (
		<SelectWithLabel
			label="Choose a color"
			value={selected}
			options={[
				{ label: 'Blue', value: 'blue' },
				{ label: 'Red', value: 'red' },
				{ label: 'Green', value: 'green' },
				{ label: 'Yellow', value: 'yellow' },
			]}
			onChange={setSelected}
			disabled
		/>
	);
};

export const WithError: React.FC = () => {
	const [selected, setSelected] = React.useState<string | null>(null);

	return (
		<SelectWithLabel
			label="Choose a color"
			value={selected}
			options={[
				{ label: 'Blue', value: 'blue' },
				{ label: 'Red', value: 'red' },
				{ label: 'Green', value: 'green' },
				{ label: 'Yellow', value: 'yellow' },
			]}
			onChange={setSelected}
			error="Please choose a more beautiful color"
		/>
	);
};

export default meta;
