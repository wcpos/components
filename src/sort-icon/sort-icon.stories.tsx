import * as React from 'react';

import { SortIcon, SortIconProps } from './sort-icon';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof SortIcon> = {
	title: 'Components/SortIcon',
	component: SortIcon,
};

export const basic = (props: SortIconProps) => <SortIcon {...props} />;

export default meta;
