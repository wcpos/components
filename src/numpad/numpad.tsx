import * as React from 'react';

import useFocusTrap from '@wcpos/hooks/src/use-focus-trap';

import { reducer, ACTIONS } from './reducer';
import Box from '../box';
import Button from '../button';
import Icon, { IconName } from '../icon';
import TextInput from '../textinput';

export interface NumpadProps {
	initialValue?: string;
	calculator?: boolean;
	onChange?: (value: string) => void;
}

const iconMap: Record<string, IconName> = {
	'%': 'percent',
	'+': 'plus',
	'-': 'minus',
	'*': 'xmark',
	'÷': 'divide',
};

/**
 * TODO: handle partial selected text?
 */
export const Numpad = ({ initialValue = '0', calculator = false, onChange }: NumpadProps) => {
	const [textSelected, setTextSelected] = React.useState(false);
	const focusTrapRef = useFocusTrap();

	/**
	 *
	 */
	const [{ currentOperand, previousOperand, operation }, dispatch] = React.useReducer(reducer, {
		currentOperand: initialValue,
		previousOperand: '0',
		operation: '',
	});

	/**
	 *
	 */
	const addDigit = React.useCallback(
		(digit: string) => {
			dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit, overwrite: textSelected } });
		},
		[textSelected]
	);

	/**
	 *
	 */
	const chooseOperation = React.useCallback((operation: string) => {
		dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } });
	}, []);

	/**
	 * dispatch intergers to reducer
	 * also handle backspace
	 */
	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.nativeEvent.key === 'Backspace') {
			dispatch({ type: ACTIONS.DELETE_DIGIT });
		} else if (e.nativeEvent.key === 'Enter') {
			onChange?.(currentOperand || '');
		} else if (!isNaN(e.nativeEvent.key)) {
			dispatch({
				type: ACTIONS.ADD_DIGIT,
				payload: { digit: e.nativeEvent.key, overwrite: textSelected },
			});
		}
	};

	/**
	 *
	 */
	return (
		<Box space="xxSmall" style={{ width: 140 }}>
			<TextInput
				ref={focusTrapRef}
				value={currentOperand || ''}
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
			<Box fill horizontal>
				<Box fill>
					<Box fill horizontal padding="xxSmall" space="xxSmall">
						<Button title="1" onPress={() => addDigit('1')} style={{ flex: 1 }} />
						<Button title="2" onPress={() => addDigit('2')} style={{ flex: 1 }} />
						<Button title="3" onPress={() => addDigit('3')} style={{ flex: 1 }} />
					</Box>
					<Box horizontal padding="xxSmall" space="xxSmall">
						<Button title="4" onPress={() => addDigit('4')} style={{ flex: 1 }} />
						<Button title="5" onPress={() => addDigit('5')} style={{ flex: 1 }} />
						<Button title="6" onPress={() => addDigit('6')} style={{ flex: 1 }} />
					</Box>
					<Box horizontal padding="xxSmall" space="xxSmall">
						<Button title="7" onPress={() => addDigit('7')} style={{ flex: 1 }} />
						<Button title="8" onPress={() => addDigit('8')} style={{ flex: 1 }} />
						<Button title="9" onPress={() => addDigit('9')} style={{ flex: 1 }} />
					</Box>
					<Box horizontal padding="xxSmall" space="xxSmall">
						<Button onPress={() => dispatch({ type: ACTIONS.SWITCH_SIGN })} style={{ flex: 1 }}>
							<Icon name="plusMinus" size="xSmall" type="inverse" />
						</Button>
						<Button title="0" onPress={() => addDigit('0')} style={{ flex: 1 }} />
						<Button title="." onPress={() => addDigit('.')} style={{ flex: 1 }} />
					</Box>
				</Box>
				{calculator && (
					<Box padding="xxSmall" space="xSmall">
						<Button onPress={() => chooseOperation('÷')} style={{ flex: 1 }}>
							<Icon name="divide" size="xSmall" type="inverse" />
						</Button>
						<Button onPress={() => chooseOperation('*')} style={{ flex: 1 }}>
							<Icon name="xmark" size="xSmall" type="inverse" />
						</Button>
						<Button onPress={() => chooseOperation('+')} style={{ flex: 1 }}>
							<Icon name="plus" size="xSmall" type="inverse" />
						</Button>
						<Button onPress={() => chooseOperation('-')} style={{ flex: 1 }}>
							<Icon name="minus" size="xSmall" type="inverse" />
						</Button>
					</Box>
				)}
			</Box>
			{calculator && (
				<Box fill horizontal padding="xxSmall" space="xSmall">
					<Button title="Clear" onPress={() => dispatch({ type: ACTIONS.CLEAR })} />
					<Button onPress={() => dispatch({ type: ACTIONS.EVALUATE })}>
						<Icon name="equals" size="xSmall" />
					</Button>
				</Box>
			)}
		</Box>
	);
};
