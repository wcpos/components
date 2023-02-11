import * as React from 'react';

import { ACTIONS } from './reducer';
import Button from '../button';

interface DigitButtonProps {
	dispatch: any;
	digit: string;
}

const DigitButton = ({ dispatch, digit }: DigitButtonProps) => {
	const handlePress = React.useCallback(() => {
		dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
	}, [digit, dispatch]);

	return <Button title={digit} onPress={handlePress} style={{ flex: 1 }} />;
};

export default DigitButton;
