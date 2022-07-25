import * as React from 'react';
import { View } from 'react-native';
import Text from '../text';
import Portal from '../portal';

import { Tooltip, TooltipProps } from './tooltip';

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

export default {
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
