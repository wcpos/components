import * as React from 'react';
import { View } from 'react-native';

import { StoryWrapper } from '@storybook/addons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Combobox, ComboboxProps } from './combobox';
import { ComboboxWithLabel, ComboboxWithLabelProps } from './with-label';
import Portal from '../portal';

/**
 * Combobox require (uses Popover)
 * - SafeAreaProvider
 * - Portals
 * - AppProviderSizeProvider
 */
const AppProvider: StoryWrapper = (Story, context) => {
	return (
		<SafeAreaProvider>
			<Portal.Provider>
				<Story {...context} />
				<Portal.Manager />
			</Portal.Provider>
		</SafeAreaProvider>
	);
};

export default {
	title: 'Components/Combobox',
	component: Combobox,
	decorators: [AppProvider],
};

export const BasicUsage = (props: ComboboxProps) => {
	const [selected, setSelected] = React.useState(props.value);

	return <Combobox {...props} value={selected} onChange={setSelected} />;
};
BasicUsage.args = {
	value: null,
	placeholder: 'Select a color',
	options: [
		{ label: 'Blue', value: 'blue' },
		{ label: 'Red', value: 'red' },
		{ label: 'Green', value: 'green' },
		{ label: 'Yellow', value: 'yellow' },
	],
};

export const WithLabel = (props: ComboboxWithLabelProps) => {
	const [selected, setSelected] = React.useState(props.value);

	return <ComboboxWithLabel {...props} value={selected} onChange={setSelected} />;
};
WithLabel.args = {
	label: 'Select your favorite color',
	value: null,
	placeholder: 'Select a color',
	helpText: 'Colors are displayed in neutral color, in case you are color blind.',
	error: 'Error message',
	options: [
		{ label: 'Blue', value: 'blue' },
		{ label: 'Red', value: 'red' },
		{ label: 'Green', value: 'green' },
		{ label: 'Yellow', value: 'yellow' },
	],
};
