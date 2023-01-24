import * as React from 'react';

import { ACTIONS } from './reducer';
import * as Styled from './styles';
import Button from '../button';

interface DigitButtonProps {
	dispatch: any;
	digit: string;
}

const DigitButton = ({ dispatch, digit }: DigitButtonProps) => {
	const handlePress = React.useCallback(() => {
		dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
	}, [digit, dispatch]);

	return <Styled.NumpadButton as={Button} title={digit} onPress={handlePress} />;
};

export default DigitButton;
