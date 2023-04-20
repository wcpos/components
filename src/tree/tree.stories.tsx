import * as React from 'react';

import { action } from '@storybook/addon-actions';

import { Tree, TreeProps } from './tree';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Tree> = {
	title: 'Components/Tree',
	component: Tree,
};

export const BasicUsage = (props: TreeProps) => {
	return <Tree {...props} />;
};
BasicUsage.args = {
	data: {
		foo: 'bar',
		baz: {
			foo: 'bar',
			baz: {
				foo: 'bar',
				baz: {
					foo: 'bar',
					baz: {
						foo: 'bar',
					},
				},
			},
		},
		bam: ['foo', 'bar'],
		zero: [],
	},
	onExpand: action('Expand'),
};

export default meta;
