import type { TextInputProps as RNTextInputProps } from 'react-native';

import get from 'lodash/get';

import type { TextInputProps } from './textinput';

const modifiers = {
	text: {
		textContentType: 'none',
		autoCapitalize: 'none',
	},
	email: {
		keyboardType: 'email-address',
		textContentType: 'emailAddress',
		autoComplete: 'email',
		autoCapitalize: 'none',
	},
	password: {
		textContentType: 'password',
		autoComplete: 'password',
		autoCapitalize: 'none',
		secureTextEntry: true,
	},
	'new-password': {
		textContentType: 'password',
		autoComplete: 'password',
		autoCapitalize: 'none',
		secureTextEntry: true,
	},
	'first-name': {
		textContentType: 'name',
		autoCapitalize: 'words',
	},
	'last-name': {
		textContentType: 'familyName',
		autoCapitalize: 'words',
	},
	integer: {
		textContentType: 'none',
		keyboardType: 'number-pad',
	},
	url: {
		textContentType: 'URL',
		keyboardType: 'url',
		autoCapitalize: 'none',
		autoComplete: 'off',
	},
	username: {
		textContentType: 'none',
		autoCapitalize: 'none',
	},
};

type ModifierFn = (
	type: TextInputProps['type'],
	autoCapitalize?: RNTextInputProps['autoCapitalize']
) => Pick<
	RNTextInputProps,
	'keyboardType' | 'textContentType' | 'autoCapitalize' | 'autoCorrect' | 'autoComplete'
>;

export const getModifiers: ModifierFn = (type = 'text', autoCapitalize = 'none') => {
	const obj = get(modifiers, type, modifiers.text);

	// overwriting autoCapitalize
	if (autoCapitalize) {
		return {
			...obj,
			autoCapitalize,
		};
	}

	return obj;
};
