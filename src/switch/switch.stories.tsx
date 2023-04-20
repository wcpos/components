import * as React from 'react';

import { action } from '@storybook/addon-actions';

import { Switch, SwitchProps } from './switch';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Switch> = {
	title: 'Components/Switch',
	component: Switch,
};

export const BasicUsage = (props: SwitchProps) => <Switch {...props} />;
BasicUsage.args = {
	onChecked: action('onChecked'),
};

export default meta;
