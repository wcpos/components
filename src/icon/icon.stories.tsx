import * as React from 'react';
import { View } from 'react-native';
import { action } from '@storybook/addon-actions';
import random from 'lodash/random';
import { Icon, IconProps, IconSkeletonProps } from './icon';
import Portal from '../portal';
import * as Svgs from './components/fontawesome/solid';

export default {
	title: 'Components/Icon',
	component: Icon,
	// argTypes: {
	// 	color: { control: 'color' },
	// 	size: {
	// 		control: {
	// 			type: 'inline-radio',
	// 			// options: [
	// 			// 	'default', 'small', 'large'
	// 			// ],
	// 		},
	// 	},
	// },
};

const getRandomIconName = () => {
	const iconNames = Object.keys(Svgs);
	return iconNames[random(0, iconNames.length - 1)];
};

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

export const BasicUsage = (props: IconProps) => <Icon {...props} />;
BasicUsage.args = {
	name: getRandomIconName(),
};

export const PressableIcon = (props: IconProps) => <Icon {...props} />;
PressableIcon.args = {
	name: getRandomIconName(),
	onPress: action('Pressed'),
};

export const IconWithTooltip = (props: IconProps) => (
	<AppProvider>
		<View style={{ padding: '30px', alignItems: 'flex-start' }}>
			<Icon {...props} />
		</View>
	</AppProvider>
);
IconWithTooltip.args = {
	name: getRandomIconName(),
	tooltip: 'Icon label',
};

export const Skeleton = (props: IconSkeletonProps) => <Icon.Skeleton {...props} />;
