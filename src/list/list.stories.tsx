import * as React from 'react';

import List from '.';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof List> = {
	title: 'Components/List',
};

export const basicUsage = () => <List items={['Apples', 'Pears', 'Oranges']} />;

export const withIcon = () => (
	<List
		items={[
			{ label: 'Apples', icon: 'completed' },
			{ label: 'Pears', icon: 'completed' },
			{ label: 'Oranges', icon: 'completed' },
		]}
	/>
);

export const selectable = () => (
	<List
		items={[
			{
				name: 'Apples',
				icon: 'completed',
				info: 'Culpa aliquip reprehenderit ex incididunt do in proident exercitation.',
				action: 'Remove',
			},
			{
				name: 'Pears',
				icon: 'completed',
				info: 'Dolore cillum commodo non sunt laborum ullamco deserunt cupidatat.',
				action: 'Remove',
			},
			{
				name: 'Oranges',
				icon: 'completed',
				info: 'Incididunt cillum elit et amet sunt ea consectetur ex ea occaecat ad est.',
				action: 'Remove',
			},
		]}
		keyExtractor={() => 'name'}
	/>
);

export default meta;
