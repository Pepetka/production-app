import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from 'app/provider/Store';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { articleReducer } from 'entities/Article/model/slice/articleSlice';
import { commentsReducer } from 'features/ArticleCommentsList';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
	title: 'pages/ArticleDetailsPage/ArticleDetailsPage',
	component: ArticleDetailsPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

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
	comments: {
		ids: ['1', '2', '3'],
		loading,
		error,
		entities: {
			1: {
				id: '1',
				user: {
					id: '1',
					username: 'username',
				},
				text: 'some comment',
			},
			2: {
				id: '2',
				user: {
					id: '2',
					username: 'username',
				},
				text: 'some comment',
			},
			3: {
				id: '3',
				user: {
					id: '3',
					username: 'username',
				},
				text: 'some comment',
			},
		},
	},
});

const reducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	article: articleReducer,
	comments: commentsReducer,
};

export const ArticleDetailsPageStory = Template.bind({});
ArticleDetailsPageStory.args = {};
ArticleDetailsPageStory.decorators = [
	StoreDecorator(state(false) as StateSchema, reducers as ReducersMapObject<StateSchema>),
];

export const ArticleDetailsPageLoading = Template.bind({});
ArticleDetailsPageLoading.args = {};
ArticleDetailsPageLoading.decorators = [
	StoreDecorator(state(true) as StateSchema, reducers as ReducersMapObject<StateSchema>),
];

export const ArticleDetailsPageError = Template.bind({});
ArticleDetailsPageError.args = {};
ArticleDetailsPageError.decorators = [
	StoreDecorator(state(false, 'some error') as StateSchema, reducers as ReducersMapObject<StateSchema>),
];
