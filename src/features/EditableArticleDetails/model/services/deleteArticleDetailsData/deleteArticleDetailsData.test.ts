import { describe, expect, test } from '@jest/globals';
import { TestAsyncThunk } from '@/shared/lib/testAsyncThunk/testAsyncThunk';
import { Article, ArticleBlockType, ArticleType } from '@/entities/Article';
import { StateSchema } from '@/app/provider/Store';
import { deleteArticleDetailsData } from './deleteArticleDetailsData';

describe('deleteArticleDetailsData', () => {
	const data = (id?: string): DeepPartial<Article> => ({
		id,
		title: 'title',
		subtitle: 'subtitle',
		img: 'some img',
		type: [ArticleType.IT],
		userId: '1',
		user: undefined,
		blocks: [
			{
				id: '0',
				type: ArticleBlockType.TEXT,
				title: 'Something block title',
				paragraphs: [''],
			},
		],
	});

	const state = (id?: string): DeepPartial<StateSchema> => ({
		user: {
			authData: {
				id: '1',
			},
		},
		editableArticleDetails: {
			formData: data(id),
		},
	});

	test('fulfilled', async () => {
		const thunk = new TestAsyncThunk(deleteArticleDetailsData, state('1'));
		thunk.api.delete.mockReturnValue(Promise.resolve({ data: data('1') }));
		const result = await thunk.callThunk();

		expect(thunk.api.delete).toHaveBeenCalled();
		expect(result.meta.requestStatus).toEqual('fulfilled');
		expect(result.payload).toEqual(data('1'));
	});

	test('fulfilled new article', async () => {
		const thunk = new TestAsyncThunk(deleteArticleDetailsData, state());
		thunk.api.delete.mockReturnValue(Promise.resolve({ data: data('1') }));
		const result = await thunk.callThunk();

		expect(thunk.api.delete).not.toHaveBeenCalled();
		expect(result.meta.requestStatus).toEqual('fulfilled');
		expect(result.payload).toEqual(data());
	});

	test('rejected', async () => {
		const thunk = new TestAsyncThunk(deleteArticleDetailsData, state('1'));
		thunk.api.delete.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk();

		expect(thunk.api.delete).toHaveBeenCalled();
		expect(result.meta.requestStatus).toEqual('rejected');
	});
});
