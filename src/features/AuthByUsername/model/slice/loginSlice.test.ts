import { describe, expect, test } from '@jest/globals';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
	test('setUsername', () => {
		const state: LoginSchema = {
			error: undefined,
			username: '',
			loading: false,
			password: '',
		};

		expect(loginReducer(state, loginActions.setUsername('username'))).toEqual({
			...state,
			username: 'username',
		});
	});

	test('setPassword', () => {
		const state: LoginSchema = {
			error: undefined,
			username: '',
			loading: false,
			password: '',
		};

		expect(loginReducer(state, loginActions.setPassword('password'))).toEqual({
			...state,
			password: 'password',
		});
	});

	test('setPassword', () => {
		const state: LoginSchema = {
			error: undefined,
			username: 'username',
			loading: false,
			password: 'password',
		};

		expect(loginReducer(state, loginActions.clearLogin())).toEqual({
			...state,
			password: '',
			username: '',
		} as LoginSchema);
	});

	test('undefined state', () => {
		expect(
			loginReducer(undefined, loginActions.setUsername('username')),
		).toEqual({
			username: 'username',
			loading: false,
			password: '',
		} as LoginSchema);
		expect(
			loginReducer(undefined, loginActions.setPassword('password')),
		).toEqual({
			username: '',
			loading: false,
			password: 'password',
		} as LoginSchema);
		expect(loginReducer(undefined, loginActions.clearLogin())).toEqual({
			username: '',
			loading: false,
			password: '',
		} as LoginSchema);
	});
});
