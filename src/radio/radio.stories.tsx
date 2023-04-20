import React, { useState } from 'react';

import { Group, RadioGroupProps } from './group';
import { GroupWithLabel, RadioGroupWithLabelProps } from './group-with-label';
import { Radio, RadioProps } from './radio';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Radio> = {
	title: 'Components/Radio',
	component: Radio,
	subcomponents: { Group },
};

/**
 *
 */
export const Basic = (props: RadioProps) => {
	const [checked, setChecked] = useState(props.checked);

	return <Radio {...props} checked={checked} onChange={setChecked} />;
};
Basic.args = {
	checked: false,
	label: 'A smoothie',
	helpText: 'Contains orange juice, mangos and love ❤️',
};
Basic.argTypes = {
	label: { control: 'text' },
	helpText: { control: 'text' },
};

/**
 *
 */
export const WithoutHelpText = (props: RadioProps) => {
	const [checked, setChecked] = useState(false);

	return <Radio label="Pizza" checked={checked} onChange={setChecked} />;
};

/**
 *
 */
export const Disabled = (props: RadioProps) => {
	const [checked, setChecked] = useState(false);

	return <Radio label="Pizza" checked={checked} onChange={setChecked} disabled />;
};

/**
 *
 */
export const Uncontrolled = (props: RadioProps) => <Radio label="Pizza" />;

/**
 *
 */
export const Grouped = (props: RadioGroupProps) => {
	const [checked, setChecked] = useState('pizza');

	return (
		<Group
			onChange={setChecked}
			value={checked}
			options={[
				{ label: 'Pizza', value: 'pizza' },
				{ label: 'Hamburger', value: 'hamburger' },
				{ label: 'Taco', value: 'taco' },
				{ label: 'Salad', value: 'salad' },
			]}
		/>
	);
};
Grouped.args = {
	label: 'What is your favorite food?',
	helpText: 'Select one',
	options: [
		{ label: 'Pizza', value: 'pizza' },
		{ label: 'Hamburger', value: 'hamburger' },
		{ label: 'Taco', value: 'taco' },
		{ label: 'Salad', value: 'salad' },
	],
};

/**
 *
 */
export const RadiosWithLabel = (props: RadioGroupProps) => {
	const [checked, setChecked] = useState(null);

	return <GroupWithLabel {...props} value={checked} onChange={setChecked} />;
};
RadiosWithLabel.args = {
	label: 'What is your favorite food?',
	helpText: 'Select one',
	options: [
		{ label: 'Pizza', value: 'pizza' },
		{ label: 'Hamburger', value: 'hamburger' },
		{ label: 'Taco', value: 'taco' },
		{ label: 'Salad', value: 'salad' },
	],
};

export default meta;
