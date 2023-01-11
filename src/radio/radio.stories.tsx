import React, { useState } from 'react';

import { Group, RadioGroupProps } from './group';
import { Radio, RadioProps } from './radio';

export default {
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
