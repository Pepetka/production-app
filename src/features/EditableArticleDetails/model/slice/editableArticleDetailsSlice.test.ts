import { describe, expect, test } from '@jest/globals';
import { ArticleBlockType, ArticleType } from '@/entities/Article';
import { EditableArticleDetailsSchema } from '../types/articleDetailsSchema';
import { editableArticleDetailsActions, editableArticleDetailsReducer } from './editableArticleDetailsSlice';

describe('editableArticleDetailsSlice', () => {
	test('setTypes', () => {
		const state: DeepPartial<EditableArticleDetailsSchema> = {
			formData: {
				type: [ArticleType.IT],
			},
		};

		expect(editableArticleDetailsReducer(state as EditableArticleDetailsSchema, editableArticleDetailsActions.setTypes(ArticleType.ECONOMY))).toEqual(
			{
				...state,
				formData: {
					type: [ArticleType.IT, ArticleType.ECONOMY],
				},
			},
		);
	});

	test('setAvatar', () => {
		const state: DeepPartial<EditableArticleDetailsSchema> = {
			formData: {
				img: '',
			},
		};

		expect(editableArticleDetailsReducer(state as EditableArticleDetailsSchema, editableArticleDetailsActions.setAvatar('avatar'))).toEqual({
			...state,
			formData: {
				img: 'avatar',
			},
		});
	});

	test('setTitle', () => {
		const state: DeepPartial<EditableArticleDetailsSchema> = {
			formData: {
				title: '',
			},
		};

		expect(editableArticleDetailsReducer(state as EditableArticleDetailsSchema, editableArticleDetailsActions.setTitle('title'))).toEqual({
			...state,
			formData: {
				title: 'title',
			},
		});
	});

	test('setSubtitle', () => {
		const state: DeepPartial<EditableArticleDetailsSchema> = {
			formData: {
				subtitle: '',
			},
		};

		expect(editableArticleDetailsReducer(state as EditableArticleDetailsSchema, editableArticleDetailsActions.setSubtitle('subtitle'))).toEqual({
			...state,
			formData: {
				subtitle: 'subtitle',
			},
		});
	});

	test('setTextParagraphsData', () => {
		const state: DeepPartial<EditableArticleDetailsSchema> = {
			formData: {
				blocks: [
					{
						id: '1',
						type: ArticleBlockType.TEXT,
						title: '1',
						paragraphs: [''],
					},
				],
			},
		};

		expect(
			editableArticleDetailsReducer(
				state as EditableArticleDetailsSchema,
				editableArticleDetailsActions.setTextParagraphsData({ id: '1', paragraphs: 'Some paragraph\nSome paragraph' }),
			),
		).toEqual({
			...state,
			formData: {
				blocks: [
					{
						id: '1',
						type: ArticleBlockType.TEXT,
						title: '1',
						paragraphs: ['Some paragraph', 'Some paragraph'],
					},
				],
			},
		});
	});

	test('setTextTitle', () => {
		const state: DeepPartial<EditableArticleDetailsSchema> = {
			formData: {
				blocks: [
					{
						id: '1',
						type: ArticleBlockType.TEXT,
						title: '1',
						paragraphs: [''],
					},
				],
			},
		};

		expect(
			editableArticleDetailsReducer(state as EditableArticleDetailsSchema, editableArticleDetailsActions.setTextTitle({ id: '1', title: 'title' })),
		).toEqual({
			...state,
			formData: {
				blocks: [
					{
						id: '1',
						type: ArticleBlockType.TEXT,
						title: 'title',
						paragraphs: [''],
					},
				],
			},
		});
	});

	test('setCode', () => {
		const state: DeepPartial<EditableArticleDetailsSchema> = {
			formData: {
				blocks: [
					{
						id: '1',
						type: ArticleBlockType.CODE,
						code: '',
					},
				],
			},
		};

		expect(
			editableArticleDetailsReducer(state as EditableArticleDetailsSchema, editableArticleDetailsActions.setCode({ id: '1', code: 'code' })),
		).toEqual({
			...state,
			formData: {
				blocks: [
					{
						id: '1',
						type: ArticleBlockType.CODE,
						code: 'code',
					},
				],
			},
		});
	});

	test('setImgTitle', () => {
		const state: DeepPartial<EditableArticleDetailsSchema> = {
			formData: {
				blocks: [
					{
						id: '1',
						type: ArticleBlockType.IMG,
						title: '',
						src: '',
					},
				],
			},
		};

		expect(
			editableArticleDetailsReducer(state as EditableArticleDetailsSchema, editableArticleDetailsActions.setImgTitle({ id: '1', imgTitle: 'title' })),
		).toEqual({
			...state,
			formData: {
				blocks: [
					{
						id: '1',
						type: ArticleBlockType.IMG,
						title: 'title',
						src: '',
					},
				],
			},
		});
	});

	test('setImg', () => {
		const state: DeepPartial<EditableArticleDetailsSchema> = {
			formData: {
				blocks: [
					{
						id: '1',
						type: ArticleBlockType.IMG,
						title: '',
						src: '',
					},
				],
			},
		};

		expect(
			editableArticleDetailsReducer(state as EditableArticleDetailsSchema, editableArticleDetailsActions.setImg({ id: '1', img: 'img' })),
		).toEqual({
			...state,
			formData: {
				blocks: [
					{
						id: '1',
						type: ArticleBlockType.IMG,
						title: '',
						src: 'img',
					},
				],
			},
		});
	});

	test('changeReadOnly', () => {
		const state: DeepPartial<EditableArticleDetailsSchema> = {
			readOnly: false,
		};

		expect(editableArticleDetailsReducer(state as EditableArticleDetailsSchema, editableArticleDetailsActions.changeReadOnly(true))).toEqual({
			...state,
			readOnly: true,
		});
	});

	test('addBlock', () => {
		const state: DeepPartial<EditableArticleDetailsSchema> = {
			formData: {
				blocks: [
					{
						id: '0',
						type: ArticleBlockType.CODE,
						code: '',
					},
				],
			},
		};

		expect(
			editableArticleDetailsReducer(state as EditableArticleDetailsSchema, editableArticleDetailsActions.addBlock(ArticleBlockType.CODE)),
		).toEqual({
			...state,
			formData: {
				blocks: [
					{
						id: '0',
						type: ArticleBlockType.CODE,
						code: '',
					},
					{
						id: '1',
						type: ArticleBlockType.CODE,
						code: '',
					},
				],
			},
		});
	});

	test('deleteBlock', () => {
		const state: DeepPartial<EditableArticleDetailsSchema> = {
			formData: {
				blocks: [
					{
						id: '1',
						type: ArticleBlockType.CODE,
						code: '',
					},
				],
			},
		};

		expect(editableArticleDetailsReducer(state as EditableArticleDetailsSchema, editableArticleDetailsActions.deleteBlock('1'))).toEqual({
			...state,
			formData: {
				blocks: [],
			},
		});
	});
});
