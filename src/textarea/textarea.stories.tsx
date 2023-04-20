import * as React from 'react';

import { TextArea, TextAreaProps } from './textarea';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof TextArea> = {
	title: 'Components/TextArea',
	component: TextArea,
};

export const BasicUsage = (props: TextAreaProps) => {
	return <TextArea {...props} />;
};

export default meta;
