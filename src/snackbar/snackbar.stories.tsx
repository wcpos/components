import * as React from 'react';
import { View } from 'react-native';

import { action } from '@storybook/addon-actions';

import { SnackbarProvider } from './provider';
import { Snackbar } from './snackbar';
import { useSnackbar } from './use-snackbar';
import Button from '../button';

import type { Meta } from '@storybook/react';

/**
 * Snackbar require
 * - Portals
 */
const AppProvider = (Story, context) => {
	return (
		<SnackbarProvider>
			<Story {...context} />
		</SnackbarProvider>
	);
};

const meta: Meta<typeof Snackbar> = {
	title: 'Components/Snackbar',
	decorators: [AppProvider],
};

/**
 *
 */
export const BasicUsage = () => {
	const addSnackbar = useSnackbar();

	return (
		<View style={{ height: '300px', width: '100%' }}>
			<Button
				onPress={() => {
					addSnackbar({ message: 'This is a Snackbar!' });
				}}
			>
				Open
			</Button>
		</View>
	);
};

/**
 *
 */
export const WithAction = () => {
	const addSnackbar = useSnackbar();

	return (
		<View style={{ height: '300px', width: '100%' }}>
			<Button
				onPress={() => {
					addSnackbar({
						message: 'This is a Snackbar!',
						onDismiss: action('Dismissed'),
						action: {
							label: 'Undo',
							action: action('Undo'),
						},
					});
				}}
			>
				Open
			</Button>
		</View>
	);
};

/**
 * multiple
 */

export default meta;
