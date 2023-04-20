import * as React from 'react';

import Logo from '.';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Logo> = {
	title: 'Components/Logo',
};

export const basicUsage = () => <Logo animate={false} />;

export default meta;
