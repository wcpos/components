import * as React from 'react';
import { View } from 'react-native';

import { Tooltip, TooltipProps } from './tooltip';
import Portal from '../portal';
import Text from '../text';

import type { Meta } from '@storybook/react';

/**
 * Tooltips require
 * - Portals
 */
const AppProvider = ({ children }) => {
	return (
		<Portal.Provider>
			{children}
			<Portal.Manager />
		</Portal.Provider>
	);
};

const meta: Meta<typeof Tooltip> = {
	title: 'Components/Tooltip',
	component: Tooltip,
};

export const BasicUsage = (props: TooltipProps) => (
	<AppProvider>
		<View style={{ padding: 50, alignItems: 'flex-start' }}>
			<Tooltip {...props}>
				<Text>This is some unclear text.</Text>
			</Tooltip>
		</View>
	</AppProvider>
);
BasicUsage.args = {
	content: 'Here is some very important clarification!',
};

export default meta;
