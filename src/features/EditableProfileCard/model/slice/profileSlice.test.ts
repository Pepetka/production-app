import { describe, expect, test } from '@jest/globals';
import { ProfileSchema } from '../types/profileSchema';
import { profileActions, profileReducer } from './profileSlice';

describe('profileSlice', () => {
	test('setProfileData', () => {
		const state: DeepPartial<ProfileSchema> = {
			formData: {
				username: 'Some username',
			},
		};

		expect(profileReducer(state as ProfileSchema, profileActions.setProfileData({ age: '22' }))).toEqual({
			...state,
			formData: {
				username: 'Some username',
				age: '22',
			},
		});
	});

	test('cancelEdit', () => {
		const state: DeepPartial<ProfileSchema> = {
			readOnly: false,
			data: {
				age: '22',
			},
			formData: {
				age: '44',
			},
			validateErrors: [],
		};

		expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
			readOnly: true,
			formData: {
				age: '22',
			},
			data: {
				age: '22',
			},
		});
	});

	test('setPassword', () => {
		const state: DeepPartial<ProfileSchema> = {
			readOnly: true,
		};

		expect(profileReducer(state as ProfileSchema, profileActions.changeReadOnly())).toEqual({
			readOnly: false,
		});
	});

	test('undefined state', () => {
		expect(profileReducer(undefined, profileActions.setProfileData({ age: '22' }))).toEqual({
			loading: false,
			readOnly: true,
			formData: {
				age: '22',
			},
		});
		expect(profileReducer(undefined, profileActions.cancelEdit())).toEqual({
			loading: false,
			readOnly: true,
		});
		expect(profileReducer(undefined, profileActions.changeReadOnly())).toEqual({
			loading: false,
			readOnly: false,
		});
	});
});
