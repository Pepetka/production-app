import { describe, expect, test } from '@jest/globals';
import { TestAsyncThunk } from 'shared/lib/testAsyncThunk/testAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'features/EditableProfileCard';
import { ValidateProfileError } from 'features/EditableProfileCard/model/types/profileSchema';
import { updateProfileData } from './updateProfileData';

describe('updateProfileData', () => {
	const data: Profile = {
		username: 'Some username',
		age: '22',
		country: Country.RUSSIA,
		city: 'city',
		currency: Currency.RUB,
		first: 'first',
		lastname: 'last',
		id: 'some id',
		avatar: 'some avatar',
	};

	test('fulfilled', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				formData: data,
			},
		});
		thunk.api.put.mockReturnValue(Promise.resolve({ data }));
		const result = await thunk.callThunk();

		expect(thunk.api.put).toHaveBeenCalled();
		expect(result.meta.requestStatus).toEqual('fulfilled');
		expect(result.payload).toEqual(data);
	});

	test('rejected', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				formData: data,
			},
		});
		thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk();

		expect(thunk.api.put).toHaveBeenCalled();
		expect(result.meta.requestStatus).toEqual('rejected');
	});

	test('validation error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				formData: { ...data, username: '', age: '122' },
			},
		});
		thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk();

		expect(thunk.api.put).not.toHaveBeenCalled();
		expect(result.meta.requestStatus).toEqual('rejected');
		expect((result.payload as Array<ValidateProfileError>).sort()).toEqual([
			ValidateProfileError.INCORRECT_USERNAME,
			ValidateProfileError.INCORRECT_AGE,
		].sort());
	});
});
