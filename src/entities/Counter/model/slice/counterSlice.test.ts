import { CounterSchema } from 'entities/Counter';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice', () => {
	test('increment', () => {
		const testState: CounterSchema = {
			value: 10,
		};

		expect(counterReducer(testState, counterActions.increment())).toEqual({ value: 11 });
	});
	test('decrement', () => {
		const testState: CounterSchema = {
			value: 10,
		};

		expect(counterReducer(testState, counterActions.decrement())).toEqual({ value: 9 });
	});
	test('undefined state', () => {
		expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
		expect(counterReducer(undefined, counterActions.decrement())).toEqual({ value: -1 });
	});
});
