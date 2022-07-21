import React from 'react';

const Button = () => <button>Click me</button>;

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Button',
	component: Button,
};

export const Primary = () => <Button>Button</Button>;
