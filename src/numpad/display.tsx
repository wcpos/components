import * as React from 'react';

import useFocusTrap from '@wcpos/hooks/src/use-focus-trap';

import { ACTIONS } from './reducer';
import Box from '../box';
import Icon from '../icon';
import TextInput from '../textinput';

export interface NumpadDisplayProps {
	value: string;
	dispatch: React.Dispatch<{ type: string; payload?: any }>;
}

const NumpadDisplay = ({ value, dispatch }: NumpadDisplayProps) => {
	const focusTrapRef = useFocusTrap();

	return (
		<TextInput
			ref={focusTrapRef}
			value={value}
			selectTextOnFocus
			readonly
			onKeyPress={(e) => {
				console.log(e);
			}}
			onChange={() => {}} // NOTE: needs onChange to become controlled
			rightAccessory={
				<Box paddingRight="small">
					<Icon name="deleteLeft" onPress={() => dispatch({ type: ACTIONS.DELETE_DIGIT })} />
				</Box>
			}
			style={{ width: 100 }}
		/>
	);
};

export default NumpadDisplay;
