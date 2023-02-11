import * as React from 'react';
import { TextInput as RNTextInput } from 'react-native';

import useFocusTrap from '@wcpos/hooks/src/use-focus-trap';

import DigitButton from './digit-button';
import NumpadDisplay from './display';
import OperationButton from './operation-button';
import { reducer, formatOperand, ACTIONS } from './reducer';
import Box from '../box';
import Button from '../button';
import Icon from '../icon';
import Text from '../text';
import TextInput from '../textinput';

export interface NumpadProps {
	initialValue?: string;
	calculator?: boolean;
	onChange?: (value: string) => void;
}

export const Numpad = ({ initialValue = '0', calculator = false, onChange }: NumpadProps) => {
	const [{ currentOperand, previousOperand, operation }, dispatch] = React.useReducer(reducer, {
		currentOperand: initialValue,
	});
	console.log(currentOperand);

	const handleClear = React.useCallback(() => {
		dispatch({ type: ACTIONS.CLEAR, payload: undefined });
	}, [dispatch]);

	const handleEvaluate = React.useCallback(() => {
		dispatch({ type: ACTIONS.EVALUATE, payload: undefined });
	}, [dispatch]);

	// const textInputRef = React.useRef<RNTextInput>(null);

	// React.useEffect(() => {
	// 	if (onChange) {
	// 		onChange(currentOperand);
	// 	}
	// }, [currentOperand, onChange]);

	// // detect keyboard for web
	// const digitPress = useAllKeysPress({ userKeys: '1' });
	// React.useEffect(() => {
	// 	if (digitPress) {
	// 		dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: '1' } });
	// 	}
	// }, [digitPress]);

	return (
		<Box space="xxSmall" style={{ width: 140 }}>
			<NumpadDisplay value={currentOperand || ''} dispatch={dispatch} />
			<Box fill horizontal>
				<Box fill>
					<Box fill horizontal padding="xxSmall" space="xxSmall">
						<DigitButton digit="1" dispatch={dispatch} />
						<DigitButton digit="2" dispatch={dispatch} />
						<DigitButton digit="3" dispatch={dispatch} />
					</Box>
					<Box horizontal padding="xxSmall" space="xxSmall">
						<DigitButton digit="4" dispatch={dispatch} />
						<DigitButton digit="5" dispatch={dispatch} />
						<DigitButton digit="6" dispatch={dispatch} />
					</Box>
					<Box horizontal padding="xxSmall" space="xxSmall">
						<DigitButton digit="7" dispatch={dispatch} />
						<DigitButton digit="8" dispatch={dispatch} />
						<DigitButton digit="9" dispatch={dispatch} />
					</Box>
					<Box horizontal padding="xxSmall" space="xxSmall">
						<Button onPress={() => dispatch({ type: ACTIONS.SWITCH_SIGN })} style={{ flex: 1 }}>
							<Icon name="plusMinus" size="xSmall" type="inverse" />
						</Button>
						<DigitButton digit="0" dispatch={dispatch} />
						<DigitButton digit="." dispatch={dispatch} />
					</Box>
				</Box>
				{calculator && (
					<Box padding="xxSmall" space="xSmall">
						<OperationButton operation="÷" dispatch={dispatch} />
						<OperationButton operation="*" dispatch={dispatch} />
						<OperationButton operation="+" dispatch={dispatch} />
						<OperationButton operation="-" dispatch={dispatch} />
					</Box>
				)}
			</Box>
			{calculator && (
				<Box fill horizontal padding="xxSmall" space="xSmall">
					<Button title="Clear" onPress={handleClear} />
					<Button onPress={handleEvaluate}>
						<Icon name="equals" size="xSmall" />
					</Button>
				</Box>
			)}
		</Box>
	);
};
