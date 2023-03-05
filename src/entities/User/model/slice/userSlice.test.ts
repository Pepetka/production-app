import { describe, expect, test } from '@jest/globals';
import { UserRole } from '@/shared/const/role';
import { UserSchema } from '../types/userSchema';
import { userActions, userReducer } from './userSlice';

describe('userSlice', () => {
	test('setAuthData', () => {
		const state: UserSchema = {
			authData: {
				id: 'some id',
				username: 'some username',
				role: UserRole.USER,
			},
			_init: true,
		};

		expect(
			userReducer(
				state,
				userActions.setAuthData({
					username: 'username',
					id: 'id',
					avatar: 'avatar',
					role: UserRole.USER,
				}),
			),
		).toEqual({
			...state,
			authData: {
				username: 'username',
				id: 'id',
				avatar: 'avatar',
				role: UserRole.USER,
			},
		});
	});

	test('setAuthData', () => {
		const state: UserSchema = {
			authData: {
				id: 'some id',
				username: 'some username',
				role: UserRole.USER,
			},
			_init: true,
		};

		expect(userReducer(state, userActions.removeAuthData())).toEqual({
			...state,
			authData: undefined,
		});
	});

	test('initAuthData', () => {
		const state: UserSchema = {
			authData: {
				id: 'some id',
				username: 'some username',
				role: UserRole.USER,
			},
			_init: false,
		};

		expect(userReducer(state, userActions.initAuthData())).toEqual({
			...state,
			_init: true,
		});
	});

	test('undefined state', () => {
		expect(
			userReducer(
				undefined,
				userActions.setAuthData({
					username: 'username',
					id: 'id',
					avatar: 'avatar',
					role: UserRole.USER,
				}),
			),
		).toEqual({
			authData: {
				username: 'username',
				id: 'id',
				avatar: 'avatar',
				role: UserRole.USER,
			},
			_init: false,
		});
		expect(userReducer(undefined, userActions.removeAuthData())).toEqual({
			authData: undefined,
			_init: false,
		});
		expect(userReducer(undefined, userActions.initAuthData())).toEqual({
			_init: true,
		});
	});
});
