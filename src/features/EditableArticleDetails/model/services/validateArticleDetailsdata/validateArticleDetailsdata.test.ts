import { describe, expect, test } from '@jest/globals';
import { Article, ArticleBlockType, ArticleType } from '@/entities/Article';
import { ValidateEditableArticleDetailsError } from '../../consts/consts';
import { validateArticleDetailsData } from './validateArticleDetailsData';

describe('validateArticleDetailsData', () => {
	const data: DeepPartial<Article> = {
		id: '1',
		title: 'title',
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
	};

	test('fulfilled', () => {
		expect(validateArticleDetailsData(data as Article)).toEqual([]);
	});

	test('rejected', () => {
		expect(
			validateArticleDetailsData({
				...data,
				title: '',
				blocks: [
					{
						id: '0',
						type: ArticleBlockType.TEXT,
						title: '',
						paragraphs: [''],
					},
				],
				type: [],
			} as Article).sort(),
		).toEqual(
			[
				ValidateEditableArticleDetailsError.REQUIRE_ARTICLE_HEADER_DATA,
				ValidateEditableArticleDetailsError.REQUIRE_BLOCKS_DATA,
				ValidateEditableArticleDetailsError.REQUIRE_ARTICLE_TYPES,
			].sort(),
		);
	});
});
