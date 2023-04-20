import * as React from 'react';

import { FormatNumber, FormatNumberProps } from './format-number';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof FormatNumber> = {
	title: 'Components/FormatNumber',
	component: FormatNumber,
};

/**
 *
 */
export const BasicUsage = (props) => {
	return <FormatNumber {...props} />;
};
BasicUsage.args = {
	value: 3.99,
};

export default meta;
