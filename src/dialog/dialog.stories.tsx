import * as React from 'react';
import { View } from 'react-native';

import { action } from '@storybook/addon-actions';

import { Dialog, DialogProps } from './dialog';
import { useDialog } from './use-dialog';
import Button from '../button';
import Icon from '../icon';
import Portal from '../portal';
import Text from '../text';

import type { Meta } from '@storybook/react';

/**
 * Modal require
 * - Portals
 */
const AppProvider = (Story, context) => {
	return (
		<Portal.Provider>
			<Story {...context} />
			<Portal.Manager />
		</Portal.Provider>
	);
};

const meta: Meta<typeof Dialog> = {
	title: 'Components/Dialog',
	component: Dialog,
	decorators: [AppProvider],
};

export const BasicUsage = (props: DialogProps) => {
	const [opened, setOpened] = React.useState(false);

	return (
		<View style={{ height: '300px' }}>
			<Button title="Do something risky" onPress={onOpen} />

			<Dialog
				opened={opened}
				onClose={() => {
					setOpened(false);
				}}
				{...props}
			/>
		</View>
	);
};
BasicUsage.args = {
	children: 'This is very important!',
	onAccept: action('onAccept'),
	onDecline: action('onDecline'),
};

export default meta;
