import { StateSchema } from 'app/provider/Store';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
	test('return counter value', () => {
		const testState: DeepPartial<StateSchema> = {
			counter: {
				value: 110,
			},
		};

		expect(getCounterValue(testState as StateSchema)).toEqual(110);
	});
});
