import {
	describe, expect, test, jest,
} from '@jest/globals';
import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/Store';
import { User, userActions } from 'entities/User';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { TestAsyncThunk } from 'shared/lib/testAsyncThunk/testAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
	test('fulfilled', async () => {
		const userValue: User = { id: 'some id', username: 'some username' };
		mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk({ username: 'some username', password: 'some password' });

		expect(mockedAxios.post).toHaveBeenCalled();
		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
		expect(thunk.dispatch).toHaveBeenCalledWith(loginActions.clearLogin());
		expect(thunk.dispatch).toHaveBeenCalledTimes(4);
		expect(result.meta.requestStatus).toEqual('fulfilled');
		expect(result.payload).toEqual({ id: 'some id', username: 'some username' });
	});

	test('rejected with 403', async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk({ username: 'some username', password: 'some password' });

		expect(mockedAxios.post).toHaveBeenCalled();
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(result.meta.requestStatus).toEqual('rejected');
		expect(result.payload).toEqual('Login error');
	});
});
