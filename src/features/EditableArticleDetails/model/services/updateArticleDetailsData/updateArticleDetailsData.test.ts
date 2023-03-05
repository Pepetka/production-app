import { describe, expect, test } from '@jest/globals';
import { TestAsyncThunk } from '@/shared/lib/testAsyncThunk/testAsyncThunk';
import { Article, ArticleBlockType, ArticleType } from '@/entities/Article';
import { StateSchema } from '@/app/provider/Store';
import { updateArticleDetailsData } from './updateArticleDetailsData';

describe('updateArticleDetailsData', () => {
	const data = (articleTitle?: string): DeepPartial<Article> => ({
		id: '1',
		title: articleTitle,
		subtitle: 'subtitle',
		img: 'some img',
		type: [ArticleType.IT],
		userId: '1',
		blocks: [
			{
				id: '0',
				type: ArticleBlockType.TEXT,
				title: 'Something block title',
				paragraphs: [''],
			},
		],
	});

	const state = (id?: string, articleTitle?: string): DeepPartial<StateSchema> => ({
		user: {
			authData: {
				id: '1',
			},
		},
		editableArticleDetails: {
			formData: { ...data(articleTitle), id },
		},
	});

	test('fulfilled', async () => {
		const thunk = new TestAsyncThunk(updateArticleDetailsData, state('1', 'Title'));
		thunk.api.put.mockReturnValue(Promise.resolve({ data: data('Title') }));
		const result = await thunk.callThunk();

		expect(thunk.api.put).toHaveBeenCalled();
		expect(result.meta.requestStatus).toEqual('fulfilled');
		expect(result.payload).toEqual(data('Title'));
	});

	test('fulfilled new article', async () => {
		const thunk = new TestAsyncThunk(updateArticleDetailsData, state(undefined, 'Title'));
		thunk.api.post.mockReturnValue(Promise.resolve({ data: data('Title') }));
		const result = await thunk.callThunk();

		expect(thunk.api.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toEqual('fulfilled');
		expect(result.payload).toEqual(data('Title'));
	});

	test('rejected', async () => {
		const thunk = new TestAsyncThunk(updateArticleDetailsData, state(undefined, 'Title'));
		thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk();

		expect(thunk.api.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toEqual('rejected');
	});

	test('rejected validateErrors', async () => {
		const thunk = new TestAsyncThunk(updateArticleDetailsData, state());
		thunk.api.post.mockReturnValue(Promise.resolve({ data: data() }));
		const result = await thunk.callThunk();

		expect(thunk.api.post).not.toHaveBeenCalled();
		expect(result.meta.requestStatus).toEqual('rejected');
	});
});
