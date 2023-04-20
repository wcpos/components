import * as React from 'react';

import Loader, { LoaderProps } from './loader';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Loader> = {
	title: 'Components/Loader',
	component: Loader,
};

export const basicUsage = ({ size }: LoaderProps) => <Loader size={size} />;

export default meta;
