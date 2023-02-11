import { ACTIONS, reducer } from './reducer';

describe('reducer', () => {
	it('adds digit', () => {
		const state = { currentOperand: '1' };
		const action = { type: ACTIONS.ADD_DIGIT, payload: { digit: '2' } };
		const newState = reducer(state, action);
		expect(newState).toEqual({ currentOperand: '12' });
	});

	it('chooses operation', () => {
		const state = { currentOperand: '1', previousOperand: '2' };
		const action = { type: ACTIONS.CHOOSE_OPERATION, payload: { operation: '+' } };
		const newState = reducer(state, action);
		expect(newState).toEqual({
			previousOperand: '1',
			operation: '+',
			currentOperand: null,
		});
	});

	it('clears state', () => {
		const state = { currentOperand: '1', previousOperand: '2' };
		const action = { type: ACTIONS.CLEAR };
		const newState = reducer(state, action);
		expect(newState).toEqual({
			overwrite: false,
			currentOperand: null,
			previousOperand: null,
			operation: null,
		});
	});

	it('deletes digit', () => {
		const state = { currentOperand: '12' };
		const action = { type: ACTIONS.DELETE_DIGIT };
		const newState = reducer(state, action);
		expect(newState).toEqual({ currentOperand: '1' });
	});

	it('evaluates expression', () => {
		const state = {
			currentOperand: '2',
			previousOperand: '1',
			operation: '+',
		};
		const action = { type: ACTIONS.EVALUATE };
		const newState = reducer(state, action);
		expect(newState).toEqual({
			overwrite: true,
			currentOperand: '3',
			previousOperand: null,
			operation: null,
		});
	});

	it('should switch the sign of the current operand', () => {
		let state = { currentOperand: '123' };
		state = reducer(state, { type: ACTIONS.CHOOSE_OPERATION, payload: { operation: '+/-' } });
		expect(state).toEqual({ currentOperand: '-123', operation: '+/-', previousOperand: '123' });

		state = reducer(state, { type: ACTIONS.CHOOSE_OPERATION, payload: { operation: '+/-' } });
		expect(state).toEqual({ currentOperand: '123', operation: '+/-', previousOperand: '-123' });
	});
});
