import { describe, expect, test } from '@jest/globals';
import { TestAsyncThunk } from '@/shared/lib/testAsyncThunk/testAsyncThunk';
import { Article } from '@/entities/Article';
import { StateSchema } from '@/app/provider/Store';
import { fetchArticlesList } from './fetchArticlesList';

describe('fetchArticlesList', () => {
	const state: DeepPartial<StateSchema> = {
		articlesPage: {
			limit: 10,
			page: 2,
		},
	};

	test('fulfilled', async () => {
		const data: Array<DeepPartial<Article>> = [
			{
				id: 'article 1',
				title: 'title 1',
			},
			{
				id: 'article 2',
				title: 'title 2',
			},
			{
				id: 'article 3',
				title: 'title 3',
			},
		];

		const thunk = new TestAsyncThunk(fetchArticlesList, state);
		thunk.api.get.mockReturnValue(Promise.resolve({ data, statusText: 'OK' }));
		const result = await thunk.callThunk({});

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toEqual('fulfilled');
		expect(result.payload).toEqual(data);
	});

	test('rejected with 403', async () => {
		const thunk = new TestAsyncThunk(fetchArticlesList, state);
		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk({});

		expect(thunk.api.get).toHaveBeenCalled();
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(result.meta.requestStatus).toEqual('rejected');
		expect(result.payload).toEqual('Server error');
	});
});
