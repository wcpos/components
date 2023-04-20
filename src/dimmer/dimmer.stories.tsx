import * as React from 'react';

import { action } from '@storybook/addon-actions';

import Dimmer from '.';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Dimmer> = {
	title: 'Components/Dimmer',
};

export const basicUsage = () => <Dimmer onPress={action('Dimmer pressed')} />;

export default meta;
