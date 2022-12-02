import { describe, expect, test } from '@jest/globals';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../consts/consts';
import type { Profile } from '../../types/profileSchema';
import { validateProfileData } from './validateProfileData';

describe('validateProfileData', () => {
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

	test('fulfilled', () => {
		expect(validateProfileData(data)).toEqual([]);
	});

	test('rejected', () => {
		expect(validateProfileData({ ...data, age: '120', username: '' })).toEqual([
			ValidateProfileError.INCORRECT_USERNAME,
			ValidateProfileError.INCORRECT_AGE,
		]);
	});
});
