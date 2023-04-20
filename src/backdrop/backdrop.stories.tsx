import * as React from 'react';

import { action } from '@storybook/addon-actions';

import Backdrop from '.';
import Button from '../button';

import type { Meta } from '@storybook/react';

type BackdropProps = import('./backdrop').BackdropProps;

const meta: Meta<typeof Backdrop> = {
	title: 'Components/Backdrop',
	component: Backdrop,
};

export const basicUsage: React.FC<BackdropProps> = (props) => (
	<Backdrop {...props} onPress={action('Backdrop pressed')} />
);

export const backdropWithChildren: React.FC<BackdropProps> = (props) => (
	<Backdrop {...props}>
		<Button title="Press Me" onPress={action('Button pressed')} />
	</Backdrop>
);

export default meta;
