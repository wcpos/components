import * as React from 'react';

import { action } from '@storybook/addon-actions';

import Logo from '../logo';
import Text from '../text';
import Menu, { MenuProps } from './';

export default {
	title: 'Components/Menu',
	component: Menu,
	subcomponents: {
		'Menu.Item': Menu.Item,
		'Menu.Header': Menu.Header,
		'Menu.Divider': Menu.Divider,
	},
};

export const BasicUsage = (props: MenuProps) => <Menu {...props} />;
BasicUsage.args = {
	items: ['Item 1', 'Item 2', { label: 'Item 3', value: 3 }, { label: 'Item 4', type: 'critical' }],
	onSelect: action('Select'),
};

export const WithActions = (props: MenuProps) => <Menu {...props} />;
WithActions.args = {
	items: [
		{ label: 'Item 1', action: action('Item 1 Action') },
		{ label: 'Item 2', action: action('Item 2 Action') },
		{ label: 'Item 3', value: 3, action: action('Item 3 Action') },
		{ label: 'Item 4', action: action('Item 4 Action'), type: 'success' },
	],
};

export const WithIcons = (props: MenuProps) => <Menu {...props} />;
WithIcons.args = {
	items: [
		{ icon: 'gear', label: 'Item 1', action: action('Item 1 Action') },
		{ icon: 'star', label: 'Item 2', action: action('Item 2 Action') },
		{
			icon: '',
			label: 'Item 3',
			value: 3,
			action: action('Item 3 Action'),
			accessoryRight: <Text type="secondary">⌘K</Text>,
		},
		{
			icon: <Logo style={{ width: 16, height: 16 }} />,
			label: 'Item 4',
			action: action('Item 4 Action'),
			type: 'warning',
		},
	],
};

export const WithHeadersAndDividers = (props: MenuProps) => (
	<Menu>
		<Menu.Header>Application</Menu.Header>
		<Menu.Item icon="gear" onPress={action}>
			Settings
		</Menu.Item>
		<Menu.Item>Messages</Menu.Item>
		<Menu.Item icon="magnifyingGlass" accessoryRight={<Text type="secondary">⌘K</Text>}>
			Search
		</Menu.Item>
		<Menu.Divider />
		<Menu.Header>Danger zone</Menu.Header>
		<Menu.Item>Transfer my data</Menu.Item>
		<Menu.Item type="critical">Delete my account</Menu.Item>
	</Menu>
);
