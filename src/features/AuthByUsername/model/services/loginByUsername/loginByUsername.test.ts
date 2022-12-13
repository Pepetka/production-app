import { describe, expect, test } from '@jest/globals';
import { User, userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/testAsyncThunk/testAsyncThunk';
import { loginByUsername } from './loginByUsername';
import { UserRole } from '@/shared/const';

describe('loginByUsername', () => {
	test('fulfilled', async () => {
		const userValue: User = { id: 'some id', username: 'some username', role: UserRole.USER };

		const thunk = new TestAsyncThunk(loginByUsername);
		thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
		const result = await thunk.callThunk({ username: 'some username', password: 'some password' });

		expect(thunk.api.post).toHaveBeenCalled();
		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(result.meta.requestStatus).toEqual('fulfilled');
		expect(result.payload).toEqual({ id: 'some id', username: 'some username', role: UserRole.USER });
	});

	test('rejected with 403', async () => {
		const thunk = new TestAsyncThunk(loginByUsername);
		thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk({ username: 'some username', password: 'some password' });

		expect(thunk.api.post).toHaveBeenCalled();
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(result.meta.requestStatus).toEqual('rejected');
		expect(result.payload).toEqual('Login error');
	});
});
