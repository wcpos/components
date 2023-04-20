import * as React from 'react';
import { View } from 'react-native';

import { action } from '@storybook/addon-actions';

import { Dropdown, DropdownProps } from './dropdown';
import Button from '../button';
import Icon from '../icon';
import Portal from '../portal';
import Text from '../text';

import type { Meta } from '@storybook/react';

/**
 * Dropdowns require (same as popover)
 * - SafeAreaProvider
 * - Portals
 * - AppProviderSizeProvider
 */
const AppProvider = (Story, context) => {
	return (
		<Portal.Provider>
			<Story {...context} />
			<Portal.Manager />
		</Portal.Provider>
	);
};

const meta: Meta<typeof Dropdown> = {
	title: 'Components/Dropdown',
	component: Dropdown,
	// subcomponents: { 'Dropdown.Item': Dropdown.Item },
	decorators: [AppProvider],
};

/**
 *
 */
export const BasicUsage = (props: DropdownProps) => {
	const [open, setOpen] = React.useState(false);

	return (
		<View style={{ padding: '100px' }}>
			<Dropdown
				{...props}
				opened={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				<Button
					onPress={() => {
						setOpen(true);
					}}
				>
					Click me
				</Button>
			</Dropdown>
		</View>
	);
};
BasicUsage.args = {
	items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
	onSelect: action('Select'),
};

/**
 *
 */
export const IconActivator = (props: DropdownProps) => {
	const [open, setOpen] = React.useState(false);

	return (
		<View style={{ padding: '100px' }}>
			<Dropdown
				{...props}
				opened={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				<Icon
					name="ellipsisVertical"
					onPress={() => {
						setOpen(true);
					}}
				/>
			</Dropdown>
		</View>
	);
};
IconActivator.args = {
	items: [
		{ label: 'Item 1', action: action('Item 1') },
		{ label: 'Item 2', action: action('Item 2') },
		{ label: 'Item 3', action: action('Item 3') },
		{ label: 'Item 4', action: action('Item 4') },
	],
	onSelect: action('Select'),
};

export default meta;
