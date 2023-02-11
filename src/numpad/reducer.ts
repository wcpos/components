type Action = {
	type: string;
	payload: {
		[key: string]: any;
	};
};

export const ACTIONS = {
	ADD_DIGIT: 'add-digit',
	CHOOSE_OPERATION: 'choose-operation',
	CLEAR: 'clear',
	DELETE_DIGIT: 'delete-digit',
	EVALUATE: 'evaluate',
	SWITCH_SIGN: 'switch-sign',
};

type CalculatorState = {
	currentOperand: string | null;
	operation: string | null;
	overwrite?: boolean;
	previousOperand: string | null;
};

/**
 *
 */
function evaluate(state: CalculatorState): string {
	const prev = parseFloat(state.previousOperand || '');
	const current = parseFloat(state.currentOperand || '');
	if (Number.isNaN(prev) || Number.isNaN(current)) return '';
	let computation = 0;
	switch (state.operation) {
		case '+':
			computation = prev + current;
			break;
		case '-':
			computation = prev - current;
			break;
		case '*':
			computation = prev * current;
			break;
		case '÷':
			computation = prev / current;
			break;
		default:
			break;
	}

	return computation.toString();
}

/**
 *
 */
export function reducer(state: CalculatorState, { type, payload }: Action): CalculatorState {
	switch (type) {
		case ACTIONS.ADD_DIGIT:
			if (state.overwrite) {
				return {
					...state,
					currentOperand: payload.digit,
					overwrite: false,
				};
			}
			if (payload.digit === '0' && state.currentOperand === '0') {
				return state;
			}
			if (payload.digit === '.' && state.currentOperand && state.currentOperand.includes('.')) {
				return state;
			}
			if (payload.digit === '.' && state.currentOperand == null) {
				return {
					...state,
					currentOperand: '0.',
				};
			}
			if (state.currentOperand === '0') {
				return {
					...state,
					currentOperand: payload.digit,
				};
			}

			return {
				...state,
				currentOperand: `${state.currentOperand || ''}${payload.digit}`,
			};
		case ACTIONS.CHOOSE_OPERATION:
			if (state.currentOperand == null && state.previousOperand == null) {
				return state;
			}

			if (state.currentOperand == null) {
				return {
					...state,
					operation: payload.operation,
				};
			}

			if (state.previousOperand == null) {
				return {
					...state,
					operation: payload.operation,
					previousOperand: state.currentOperand,
					currentOperand: null,
				};
			}

			return {
				...state,
				previousOperand: evaluate(state),
				operation: payload.operation,
				currentOperand: null,
			};
		case ACTIONS.CLEAR:
			return {
				currentOperand: null,
				operation: null,
				overwrite: false,
				previousOperand: null,
			};
		case ACTIONS.DELETE_DIGIT:
			if (state.overwrite) {
				return {
					...state,
					overwrite: false,
					currentOperand: null,
				};
			}
			if (state.currentOperand == null) return state;
			if (state.currentOperand.length === 1) {
				return { ...state, currentOperand: null };
			}

			return {
				...state,
				currentOperand: state.currentOperand.slice(0, -1),
			};
		case ACTIONS.EVALUATE:
			if (
				state.operation == null ||
				state.currentOperand == null ||
				state.previousOperand == null
			) {
				return state;
			}

			return {
				...state,
				overwrite: true,
				previousOperand: null,
				operation: null,
				currentOperand: evaluate(state),
			};
		case ACTIONS.SWITCH_SIGN:
			if (!state.currentOperand || state.currentOperand === '0') return state;
			if (state.currentOperand.startsWith('-')) {
				return {
					...state,
					currentOperand: state.currentOperand.slice(1),
				};
			}
			return {
				...state,
				currentOperand: `-${state.currentOperand}`,
			};
		default:
			return state;
	}
}

/**
 * Intl not available in react-native, will need to refactor
 */
// const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
// 	maximumFractionDigits: 0,
// });

export function formatOperand(operand) {
	// if (operand == null) return;
	// const [integer, decimal] = operand.split('.');
	// if (decimal == null) return INTEGER_FORMATTER.format(integer);
	// return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}
