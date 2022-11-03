import { describe, expect, test } from '@jest/globals';
import { TestAsyncThunk } from 'shared/lib/testAsyncThunk/testAsyncThunk';
import { Article } from '../../types/article';
import { fetchArticleById } from './fetchArticleById';

describe('fetchArticleById', () => {
	test('fulfilled', async () => {
		const data: DeepPartial<Article> = {
			id: 'article id',
			title: 'some title',
		};

		const thunk = new TestAsyncThunk(fetchArticleById);
		thunk.api.get.mockReturnValue(Promise.resolve({ data, statusText: 'OK' }));
		const result = await thunk.callThunk({ id: 'article id' });

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toEqual('fulfilled');
		expect(result.payload).toEqual(data);
	});

	test('rejected with 403', async () => {
		const thunk = new TestAsyncThunk(fetchArticleById);
		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk({ id: 'some id' });

		expect(thunk.api.get).toHaveBeenCalled();
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(result.meta.requestStatus).toEqual('rejected');
		expect(result.payload).toEqual('Server error');
	});
});
