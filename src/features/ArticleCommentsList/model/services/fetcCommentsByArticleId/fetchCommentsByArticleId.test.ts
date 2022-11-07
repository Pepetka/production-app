import { describe, expect, test } from '@jest/globals';
import { TestAsyncThunk } from 'shared/lib/testAsyncThunk/testAsyncThunk';
import { Comment } from 'entities/Comment';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

describe('fetchCommentsByArticleId', () => {
	test('fulfilled', async () => {
		const data: Comment = {
			id: 'comment id',
			text: 'some text',
			user: {
				username: 'some name',
				id: 'user id',
			},
		};

		const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
		thunk.api.get.mockReturnValue(Promise.resolve({ data, statusText: 'OK' }));
		const result = await thunk.callThunk({ articleId: 'comment id' });

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toEqual('fulfilled');
		expect(result.payload).toEqual(data);
	});

	test('rejected with 403', async () => {
		const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk({ articleId: 'some id' });

		expect(thunk.api.get).toHaveBeenCalled();
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(result.meta.requestStatus).toEqual('rejected');
		expect(result.payload).toEqual('Server error');
	});
});
