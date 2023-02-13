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

const NumpadDisplay = ({ value, dispatch, setTextSelected }: NumpadDisplayProps) => {
	const focusTrapRef = useFocusTrap();

	/**
	 * dispatch intergers to reducer
	 * also handle backspace
	 */
	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.nativeEvent.key === 'Backspace') {
			dispatch({ type: ACTIONS.DELETE_DIGIT });
		} else if (e.nativeEvent.key === 'Enter') {
			// handle return key press
		} else if (!isNaN(e.nativeEvent.key)) {
			dispatch({
				type: ACTIONS.ADD_DIGIT,
				payload: { digit: e.nativeEvent.key },
			});
		}
	};

	/**
	 *
	 */
	return (
		<TextInput
			ref={focusTrapRef}
			value={value}
			selectTextOnFocus
			onSelectionChange={(e) =>
				setTextSelected(e.nativeEvent.selection.start !== e.nativeEvent.selection.end)
			}
			readonly
			onKeyPress={handleKeyPress}
			onChange={() => {}} // NOTE: needs onChange to become controlled
			rightAccessory={
				<Box paddingRight="small">
					<Icon name="deleteLeft" onPress={() => dispatch({ type: ACTIONS.DELETE_DIGIT })} />
				</Box>
			}
		/>
	);
};

export default NumpadDisplay;
