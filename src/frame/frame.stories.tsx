import * as React from 'react';

import Frame from '.';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Frame> = {
	title: 'Components/Frame',
};

export const basicUsage = () => <Frame />;

export default meta;
