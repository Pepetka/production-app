import { StateSchema } from 'app/provider/Store';
import { getCounter } from './getCounter';

describe('getCounter', () => {
	test('return counter', () => {
		const testState: DeepPartial<StateSchema> = {
			counter: {
				value: 110,
			},
		};

		expect(getCounter(testState as StateSchema)).toEqual({ value: 110 });
	});
});
