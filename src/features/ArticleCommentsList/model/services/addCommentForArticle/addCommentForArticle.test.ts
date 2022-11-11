import { describe, expect, test } from '@jest/globals';
import { Comment } from 'entities/Comment';
import { TestAsyncThunk } from 'shared/lib/testAsyncThunk/testAsyncThunk';
import { StateSchema } from 'app/provider/Store';
import { addCommentForArticle } from './addCommentForArticle';

describe('addCommentForArticle', () => {
	const state: DeepPartial<StateSchema> = {
		user: {
			authData: {
				id: 'user id',
			},
		},
		article: {
			article: {
				id: 'article id',
			},
		},
	};

	test('fulfilled', async () => {
		const data: Comment = {
			id: 'comment id',
			text: 'some text',
			user: {
				username: 'some name',
				id: 'user id',
				avatar: 'some avatar',
			},
		};

		const thunk = new TestAsyncThunk(addCommentForArticle, state);
		thunk.api.post.mockReturnValue(Promise.resolve({ data, statusText: 'OK' }));
		const result = await thunk.callThunk('some comment');

		expect(thunk.api.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toEqual('fulfilled');
		expect(result.payload).toEqual(data);
	});

	test('rejected with 403', async () => {
		const thunk = new TestAsyncThunk(addCommentForArticle, state);
		thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk('some comment');

		expect(thunk.api.post).toHaveBeenCalled();
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(result.meta.requestStatus).toEqual('rejected');
		expect(result.payload).toEqual('Send comment error');
	});
});
