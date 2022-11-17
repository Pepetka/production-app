import { describe, expect, test } from '@jest/globals';
import { TestAsyncThunk } from 'shared/lib/testAsyncThunk/testAsyncThunk';
import { Article, ArticleType } from 'entities/Article';
import { fetchRecommendations } from './fetchRecommendations';

describe('fetchRecommendations', () => {
	test('fulfilled', async () => {
		const data: DeepPartial<Article> = {
			id: 'some id',
			img: 'some img',
			type: [ArticleType.MATH, ArticleType.ECONOMY],
		};

		const thunk = new TestAsyncThunk(fetchRecommendations);
		thunk.api.get.mockReturnValue(Promise.resolve({ data, statusText: 'OK' }));
		const result = await thunk.callThunk();

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toEqual('fulfilled');
		expect(result.payload).toEqual(data);
	});

	test('rejected with 403', async () => {
		const thunk = new TestAsyncThunk(fetchRecommendations);
		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk();

		expect(thunk.api.get).toHaveBeenCalled();
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(result.meta.requestStatus).toEqual('rejected');
		expect(result.payload).toEqual('Server error');
	});
});
