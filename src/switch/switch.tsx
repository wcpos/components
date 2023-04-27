import * as React from 'react';
import { Switch as RNSwitch } from 'react-native';

import { useTheme } from 'styled-components/native';

import Platform from '@wcpos/utils/src/platform';

export interface SwitchProps {
	/** Set to true if options is enabled. */
	checked?: boolean;

	/** Called when `checked` property is changed. `checked` property should reflect change. */
	onChecked?: (checked: boolean) => void;
}

/**
 * Used to toggle yes/no enabled/disabled options.
 *
 * >**Note:** The look of this component is very different depending if you are on Web, Android or iOS.
 */
export const Switch: React.FC<SwitchProps> = ({ value, onChange }) => {
	const theme = useTheme();

	return (
		<RNSwitch
			trackColor={
				Platform.OS === 'ios'
					? {
							true: 'blue',
							false: 'green',
					  }
					: {
							true: 'black',
							false: 'red',
					  }
			}
			// @ts-ignore
			thumbColor={Platform.OS === 'ios' ? undefined : checked ? 'blue' : 'green'}
			onValueChange={onChange}
			value={value}
		/>
	);
};
