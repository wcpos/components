import * as React from 'react';
import { View } from 'react-native';

import { action } from '@storybook/addon-actions';
import { StoryWrapper } from '@storybook/addons';

import Button from '../button';
import { SnackbarProvider } from './provider';
import { useSnackbar } from './use-snackbar';

/**
 * Snackbar require
 * - Portals
 */
const AppProvider: StoryWrapper = (Story, context) => {
	return (
		<SnackbarProvider>
			<Story {...context} />
		</SnackbarProvider>
	);
};

export default {
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
