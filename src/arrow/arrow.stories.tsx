import * as React from 'react';

import { Arrow, ArrowProps } from './arrow';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Arrow> = {
	title: 'Components/Arrow',
	component: Arrow,
};

export const BasicUsage = (props: ArrowProps) => <Arrow {...props} />;

export default meta;
