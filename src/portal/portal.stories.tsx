import * as React from 'react';
import { View } from 'react-native';

import Portal from '.';
import Button from '../button';
import Text from '../text';

// import { select } from '@storybook/addon-knobs';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Portal> = {
	title: 'Components/Portal',
};

const AppProvider = ({ children }) => {
	return (
		<Portal.Provider>
			{children}
			<Portal.Manager />
		</Portal.Provider>
	);
};

/**
 *
 */
export const BasicUsage = () => {
	return (
		<AppProvider>
			<Text>In document flow</Text>
			<Portal keyPrefix="Test">
				<Text>Out of document flow</Text>
			</Portal>
			<Text>In document flow</Text>
		</AppProvider>
	);
};

export default meta;
