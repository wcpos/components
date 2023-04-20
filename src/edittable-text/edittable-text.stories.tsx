import * as React from 'react';

import { action } from '@storybook/addon-actions';

import { EdittableText, EdittableTextProps } from './edittable-text';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof EdittableText> = {
	title: 'Components/EdittableText',
	component: EdittableText,
};

const lorem = 'Lorem ipsum dolor sit amet.';

const longLorem =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, nulla at luctus ultrices, dolor.';

/**
 *
 */
export const BasicUsage = (props: EdittableTextProps) => {
	const [value, setValue] = React.useState(props.children);

	return (
		<EdittableText
			value={value}
			onChange={(newVal) => {
				props.onChange(newVal);
				setValue(newVal);
			}}
		/>
	);
};
BasicUsage.args = {
	children: lorem,
	onChange: action('onChange'),
};

export default meta;
