import * as React from 'react';
import { NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';

import get from 'lodash/get';

import useFocusTrap from '@wcpos/hooks/src/use-focus-trap';

import { reducer, ACTIONS } from './reducer';
import Box from '../box';
import Button from '../button';
import Icon, { IconName } from '../icon';
import TextInput from '../textinput';

export interface NumpadProps {
	/**  */
	initialValue?: string;

	/**  */
	calculator?: boolean;

	/** Emits on every change */
	onChange?: (value: string) => void;

	/** Triggers with the return key (returnKeyType) has been pressed */
	onSubmitEditing?: (value: string) => void;

	/** Decimal or comma */
	decimalSeparator?: string;
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
export const Numpad = ({
	initialValue = '0',
	calculator = false,
	onChange,
	decimalSeparator = '.',
	onSubmitEditing,
}: NumpadProps) => {
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
	React.useEffect(() => {
		onChange && onChange(currentOperand || '');
	}, [currentOperand, onChange]);

	/**
	 *
	 */
	const addDigit = React.useCallback(
		(digit: string) => {
			dispatch({
				type: ACTIONS.ADD_DIGIT,
				payload: { digit, overwrite: textSelected, decimalSeparator },
			});
			// @FIXME - this is a hack to make sure overwrite is not left on
			setTextSelected(false);
		},
		[decimalSeparator, textSelected]
	);

	/**
	 *
	 */
	const chooseOperation = React.useCallback((operation: string) => {
		dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } });
	}, []);

	/**
	 * dispatch integers to reducer
	 * also handle backspace
	 */
	const handleKeyPress = React.useCallback(
		(e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
			const key = get(e, 'nativeEvent.key');

			switch (key) {
				case 'Backspace':
					dispatch({ type: ACTIONS.DELETE_DIGIT });
					break;
				case 'Enter':
					onSubmitEditing?.(currentOperand || '');
					break;
				case decimalSeparator:
					if (!currentOperand.includes(decimalSeparator)) {
						dispatch({
							type: ACTIONS.ADD_DIGIT,
							payload: { digit: key, overwrite: textSelected },
						});
					}
					break;
				default:
					if (/^[0-9]$/.test(key)) {
						dispatch({
							type: ACTIONS.ADD_DIGIT,
							payload: { digit: key, overwrite: textSelected },
						});
					}
			}
		},
		[currentOperand, decimalSeparator, onSubmitEditing, textSelected]
	);

	/**
	 *
	 */
	return (
		<Box space="xxSmall" style={{ width: 140 }}>
			<TextInput
				ref={focusTrapRef}
				value={currentOperand || ''}
				selectTextOnFocus
				onSelectionChange={(e) => {
					setTextSelected(e.nativeEvent.selection.start !== e.nativeEvent.selection.end);
				}}
				readonly
				onKeyPress={handleKeyPress}
				onChangeText={() => {}} // NOTE: needs onChangeText to become controlled
				rightAccessory={
					<Box paddingRight="small">
						<Icon name="deleteLeft" onPress={() => dispatch({ type: ACTIONS.DELETE_DIGIT })} />
					</Box>
				}
			/>
			<Box horizontal>
				<Box fill>
					<Box horizontal padding="xxSmall" space="xxSmall">
						<Button title="1" onPress={() => addDigit('1')} style={{ flex: 1 }} type="secondary" />
						<Button title="2" onPress={() => addDigit('2')} style={{ flex: 1 }} type="secondary" />
						<Button title="3" onPress={() => addDigit('3')} style={{ flex: 1 }} type="secondary" />
					</Box>
					<Box horizontal padding="xxSmall" space="xxSmall">
						<Button title="4" onPress={() => addDigit('4')} style={{ flex: 1 }} type="secondary" />
						<Button title="5" onPress={() => addDigit('5')} style={{ flex: 1 }} type="secondary" />
						<Button title="6" onPress={() => addDigit('6')} style={{ flex: 1 }} type="secondary" />
					</Box>
					<Box horizontal padding="xxSmall" space="xxSmall">
						<Button title="7" onPress={() => addDigit('7')} style={{ flex: 1 }} type="secondary" />
						<Button title="8" onPress={() => addDigit('8')} style={{ flex: 1 }} type="secondary" />
						<Button title="9" onPress={() => addDigit('9')} style={{ flex: 1 }} type="secondary" />
					</Box>
					<Box horizontal padding="xxSmall" space="xxSmall">
						<Button
							onPress={() => dispatch({ type: ACTIONS.SWITCH_SIGN })}
							style={{ flex: 1 }}
							type="secondary"
						>
							<Icon name="plusMinus" size="xSmall" type="inverse" />
						</Button>
						<Button title="0" onPress={() => addDigit('0')} style={{ flex: 1 }} type="secondary" />
						<Button
							title={decimalSeparator}
							onPress={() => addDigit(decimalSeparator)}
							style={{ flex: 1 }}
							type="secondary"
						/>
					</Box>
				</Box>
				{calculator && (
					<Box padding="xxSmall" space="xSmall">
						<Button onPress={() => chooseOperation('÷')} style={{ flex: 1 }} type="secondary">
							<Icon name="divide" size="xSmall" type="inverse" />
						</Button>
						<Button onPress={() => chooseOperation('*')} style={{ flex: 1 }} type="secondary">
							<Icon name="xmark" size="xSmall" type="inverse" />
						</Button>
						<Button onPress={() => chooseOperation('+')} style={{ flex: 1 }} type="secondary">
							<Icon name="plus" size="xSmall" type="inverse" />
						</Button>
						<Button onPress={() => chooseOperation('-')} style={{ flex: 1 }} type="secondary">
							<Icon name="minus" size="xSmall" type="inverse" />
						</Button>
					</Box>
				)}
			</Box>
			{calculator && (
				<Box horizontal padding="xxSmall" space="xSmall">
					<Button
						title="Clear"
						onPress={() => dispatch({ type: ACTIONS.CLEAR })}
						type="secondary"
					/>
					<Button onPress={() => dispatch({ type: ACTIONS.EVALUATE })} type="secondary">
						<Icon name="equals" size="xSmall" />
					</Button>
				</Box>
			)}
		</Box>
	);
};
