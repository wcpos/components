import * as React from 'react';
import { View, Text } from 'react-native';

import { action } from '@storybook/addon-actions';
import { StoryWrapper } from '@storybook/addons';

import Popover, { PopoverProps } from './';
import Button from '../button';
import Menu from '../menu';
import Portal from '../portal';

/**
 * Popovers require
 * - Portals
 */
const AppProvider: StoryWrapper = (Story, context) => {
	return (
		<Portal.Provider>
			<Story {...context} />
			<Portal.Manager />
		</Portal.Provider>
	);
};

export default {
	title: 'Components/Popover',
	component: Popover,
	decorators: [AppProvider],
};

export const BasicUsage = (props: PopoverProps) => {
	const [open, setOpen] = React.useState(false);

	return (
		<View style={{ padding: 300 }}>
			<Popover
				{...props}
				opened={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				<Popover.Target>
					<Button
						title="Open Menu"
						onPress={() => {
							setOpen(true);
						}}
					/>
				</Popover.Target>
				<Popover.Content>
					<View style={{ backgroundColor: 'white', width: 200, height: 200 }}>
						<Text>Content</Text>
					</View>
				</Popover.Content>
			</Popover>
		</View>
	);
};

export const WithoutPortal = (props: PopoverProps) => {
	const [open, setOpen] = React.useState(false);

	return (
		<View style={{ padding: 300 }}>
			<Popover
				{...props}
				opened={open}
				onClose={() => {
					setOpen(false);
				}}
				withinPortal={false}
			>
				<Popover.Target>
					<Button
						title="Open Menu"
						onPress={() => {
							setOpen(true);
						}}
					/>
				</Popover.Target>
				<Popover.Content>
					<View style={{ backgroundColor: 'white', width: 200, height: 200 }}>
						<Text>Content</Text>
					</View>
				</Popover.Content>
			</Popover>
		</View>
	);
};
