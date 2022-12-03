import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from 'app/provider/Store';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { articleReducer } from 'entities/Article/model/slice/articleSlice';
import { ArticleType, ArticleBlockType, Article } from 'entities/Article';
import withMock from 'storybook-addon-mock';
import { UserRole } from 'entities/User';
import { Comment } from 'entities/Comment';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
	title: 'pages/ArticleDetailsPage/ArticleDetailsPage',
	component: ArticleDetailsPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [withMock],
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

const comments: Array<Comment> = [
	{
		id: '1',
		user: {
			username: 'user',
			role: UserRole.USER,
			id: 'user',
		},
		text: 'some comment',
	},
	{
		id: '2',
		user: {
			username: 'admin',
			role: UserRole.ADMIN,
			id: 'admin',
		},
		text: 'some comment',
	},
	{
		id: '3',
		user: {
			username: 'user',
			role: UserRole.USER,
			id: 'user',
		},
		text: 'some comment',
	},
];

const articles: Array<Article> = [
	{
		user: {
			username: 'user',
			role: UserRole.USER,
			id: 'user',
		},
		id: '1',
		title: 'title',
		blocks: [
			{
				id: '1',
				title: 'Title',
				paragraphs: [
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur culpa distinctio et placeat'
					+ ' praesentium, quasi tempora? Fugiat quasi, voluptatum.',
				],
				type: ArticleBlockType.TEXT,
			},
		],
		type: [ArticleType.IT],
		subtitle: 'Subtitle',
		createdAt: '12.12.2022',
		img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
		views: 10101,
	},
	{
		user: {
			username: 'user',
			role: UserRole.USER,
			id: 'user',
		},
		id: '2',
		title: 'title',
		blocks: [
			{
				id: '1',
				title: 'Title',
				paragraphs: [
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur culpa distinctio et placeat'
					+ ' praesentium, quasi tempora? Fugiat quasi, voluptatum.',
				],
				type: ArticleBlockType.TEXT,
			},
		],
		type: [ArticleType.IT],
		subtitle: 'Subtitle',
		createdAt: '12.12.2022',
		img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
		views: 10101,
	},
	{
		user: {
			username: 'admin',
			role: UserRole.ADMIN,
			id: 'admin',
		},
		id: '3',
		title: 'title',
		blocks: [
			{
				id: '1',
				title: 'Title',
				paragraphs: [
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur culpa distinctio et placeat'
					+ ' praesentium, quasi tempora? Fugiat quasi, voluptatum.',
				],
				type: ArticleBlockType.TEXT,
			},
		],
		type: [ArticleType.IT],
		subtitle: 'Subtitle',
		createdAt: '12.12.2022',
		img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
		views: 10101,
	},
	{
		user: {
			username: 'user',
			role: UserRole.USER,
			id: 'user',
		},
		id: '4',
		title: 'title',
		blocks: [
			{
				id: '1',
				title: 'Title',
				paragraphs: [
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur culpa distinctio et placeat'
					+ ' praesentium, quasi tempora? Fugiat quasi, voluptatum.',
				],
				type: ArticleBlockType.TEXT,
			},
		],
		type: [ArticleType.IT],
		subtitle: 'Subtitle',
		createdAt: '12.12.2022',
		img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
		views: 10101,
	},
];

const state = (loading: boolean, error?: string): DeepPartial<StateSchema> => ({
	article: {
		loading,
		error,
		article: {
			title: 'Some title 1',
			id: '1',
			type: [ArticleType.IT, ArticleType.MATH],
			img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
			user: {
				id: 'some user id',
				username: 'some username',
			},
			createdAt: 'date',
			views: 100,
			subtitle: 'Subtitle',
			blocks: [
				{
					id: '1',
					paragraphs: [
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam explicabo nostrum quam quas! Ab accusantium architecto blanditiis dignissimos, exercitationem, harum minima nesciunt perferendis quos rem similique, sint voluptate. Aspernatur culpa deserunt odio. Consequatur facilis fugit hic illo magnam pariatur possimus repellendus rerum veniam, vitae. Ea facere quaerat quibusdam suscipit?',
					],
					type: ArticleBlockType.TEXT,
				},
			],
		},
	},
});

const reducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	article: articleReducer,
};

export const ArticleDetailsPageStory = Template.bind({});
ArticleDetailsPageStory.args = {
	storybookId: '1',
};
ArticleDetailsPageStory.decorators = [
	StoreDecorator(state(false) as StateSchema, reducers as ReducersMapObject<StateSchema>),
];
ArticleDetailsPageStory.parameters = {
	mockData: [
		{
			url: `${__API__}/articles?_limit=4`,
			method: 'GET',
			status: 200,
			response: articles,
		},
		{
			url: `${__API__}/comments?articleId=1&_expand=user`,
			method: 'GET',
			status: 200,
			response: comments,
		},
	],
};

export const ArticleDetailsPageLoading = Template.bind({});
ArticleDetailsPageLoading.args = {
	storybookId: '1',
};
ArticleDetailsPageLoading.decorators = [
	StoreDecorator(state(true) as StateSchema, reducers as ReducersMapObject<StateSchema>),
];
ArticleDetailsPageLoading.parameters = {
	mockData: [
		{
			url: `${__API__}/articles?_limit=4`,
			method: 'GET',
			status: 200,
			response: articles,
		},
		{
			url: `${__API__}/comments?articleId=1&_expand=user`,
			method: 'GET',
			status: 200,
			response: comments,
		},
	],
};

export const ArticleDetailsPageError = Template.bind({});
ArticleDetailsPageError.args = {
	storybookId: '1',
};
ArticleDetailsPageError.decorators = [
	StoreDecorator(state(false, 'some error') as StateSchema, reducers as ReducersMapObject<StateSchema>),
];
ArticleDetailsPageError.parameters = {
	mockData: [
		{
			url: `${__API__}/articles?_limit=4`,
			method: 'GET',
			status: 200,
			response: articles,
		},
		{
			url: `${__API__}/comments?articleId=1&_expand=user`,
			method: 'GET',
			status: 200,
			response: comments,
		},
	],
};
