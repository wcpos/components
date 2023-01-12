import * as React from 'react';

import { action } from '@storybook/addon-actions';

import { TextInput, TextInputProps } from './textinput';
import { TextInputWithLabel, TextInputWithLabelProps } from './with-label';
import Portal from '../portal';

export default {
	title: 'Components/TextInput',
	component: TextInput,
	subcomponents: { TextInputWithLabel },
};

/**
 *
 */
export const BasicUsage = (props: TextInputProps) => {
	const [value, setValue] = React.useState(props.value || '');
	const onTextChanged = (newText: string): void => {
		setValue(newText);
		action('Text changed')(newText);
	};

	return <TextInput value={value} onChange={onTextChanged} {...props} />;
};
BasicUsage.args = {
	placeholder: 'Placeholder Text',
	returnKeyType: 'done',
	onFocus: action('Focused'),
	onBlur: action('Blurred'),
	onSubmit: action('Submitted'),
	onKeyPress: action('Key Pressed'),
};

/**
 *
 */
export const WithInputContainer = (props: TextInputWithLabelProps) => {
	return <TextInputWithLabel {...props} />;
};
WithInputContainer.args = {
	label: 'Label',
	placeholder: 'Placeholder Text',
	returnKeyType: 'done',
	helpText: 'Help Text meant to help you',
	error: 'Error Text meant to help you',
	onLabelPress: action('Label pressed'),
};

/**
 *
 */
export const WithAction = (props: TextInputProps) => (
	<TextInput {...props} label="Label" action={{ label: 'Action', action: action('submit') }} />
);

/**
 *
 */
export const IntegerWithPrefix = (props: TextInputProps) => {
	const [value, setValue] = React.useState('');

	return <TextInput {...props} value={value} />;
};
IntegerWithPrefix.args = {
	label: 'Amount',
	type: 'integer',
	prefix: '$',
	placeholder: '10',
	returnKeyType: 'done',
	onChange: action('Text changed'),
};

/**
 *
 */
export const Clearable = (props: TextInputProps) => <TextInput {...props} clearable />;

/**
 *
 */
export const autosize = (props: TextInputProps) => (
	<Portal.Provider>
		<TextInput autosize {...props} />
		<Portal.Manager />
	</Portal.Provider>
);

/**
 *
 */
export const Uncontrolled = (props: TextInputProps) => <TextInput {...props} />;
