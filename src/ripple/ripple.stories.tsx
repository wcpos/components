import * as React from 'react';

import { useSharedValue } from 'react-native-reanimated';

import { Ripple, RippleProps } from './ripple';
import Pressable from '../pressable';
import Text from '../text';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Ripple> = {
	title: 'Components/Ripple',
	component: Ripple,
};

/**
 *
 */
export const BasicUsage = (props: RippleProps) => {
	const showRipple = useSharedValue(false);

	return (
		<Pressable
			onHoverIn={() => {
				showRipple.value = true;
			}}
			onHoverOut={() => {
				showRipple.value = false;
			}}
		>
			<Text>Press me</Text>
			<Ripple {...props} showRipple={showRipple} />
		</Pressable>
	);
};

BasicUsage.args = {};

export default meta;
