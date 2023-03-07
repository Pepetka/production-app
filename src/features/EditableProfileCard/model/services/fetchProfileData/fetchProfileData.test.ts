import { describe, expect, test } from '@jest/globals';
import { TestAsyncThunk } from '@/shared/lib/testAsyncThunk/testAsyncThunk';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData', () => {
	test('fulfilled', async () => {
		const data: Profile = {
			username: 'Some username',
			age: '22',
			country: Country.RUSSIA,
			city: 'city',
			currency: Currency.RUB,
			first: 'first',
			lastname: 'last',
			avatar: 'some avatar',
		};

		const thunk = new TestAsyncThunk(fetchProfileData);
		thunk.api.get.mockReturnValue(Promise.resolve({ data }));
		const result = await thunk.callThunk('1');

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toEqual('fulfilled');
		expect(result.payload).toEqual(data);
	});

	test('rejected', async () => {
		const thunk = new TestAsyncThunk(fetchProfileData);
		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk('1');

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toEqual('rejected');
	});
});
