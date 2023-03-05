import { describe, expect, test } from '@jest/globals';
import { TestAsyncThunk } from '@/shared/lib/testAsyncThunk/testAsyncThunk';
import { Article, ArticleType } from '@/entities/Article';
import { StateSchema } from '@/app/provider/Store';
import { fetchArticleDetailsData } from './fetchArticleDetailsData';

describe('fetchArticleDetailsData', () => {
	const state: DeepPartial<StateSchema> = {
		user: {
			authData: {
				id: '1',
			},
		},
	};

	test('fulfilled', async () => {
		const data: DeepPartial<Article> = {
			id: '1',
			title: 'title',
			subtitle: 'subtitle',
			type: [ArticleType.IT],
			userId: '1',
		};

		const thunk = new TestAsyncThunk(fetchArticleDetailsData, state);
		thunk.api.get.mockReturnValue(Promise.resolve({ data }));
		const result = await thunk.callThunk('1');

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toEqual('fulfilled');
		expect(result.payload).toEqual(data);
	});

	test('fulfilled new article', async () => {
		const data: DeepPartial<Article> = {
			id: '1',
			title: 'title',
			subtitle: 'subtitle',
			type: [ArticleType.IT],
			userId: '1',
		};

		const thunk = new TestAsyncThunk(fetchArticleDetailsData, state);
		thunk.api.get.mockReturnValue(Promise.resolve({ data }));
		const result = await thunk.callThunk(undefined);

		expect(thunk.api.get).not.toHaveBeenCalled();
		expect(result.meta.requestStatus).toEqual('fulfilled');
		expect(result.payload).toEqual({
			img: '',
			title: '',
			subtitle: '',
			userId: state.user!.authData!.id,
			user: state.user!.authData,
			type: [],
			blocks: [],
			views: 0,
			createdAt: new Date().toLocaleDateString(),
		});
	});

	test('rejected', async () => {
		const thunk = new TestAsyncThunk(fetchArticleDetailsData, state);
		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk('1');

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toEqual('rejected');
	});
});
