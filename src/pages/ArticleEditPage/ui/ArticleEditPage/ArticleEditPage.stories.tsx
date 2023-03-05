import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from '@/app/provider/Store';
import { Article, ArticleBlockType, ArticleType } from '@/entities/Article';
import { UserRole } from '@/shared/const/role';
import { editableArticleDetailsReducer } from '@/features/EditableArticleDetails';
import ArticleEditPage from './ArticleEditPage';

export default {
	title: 'pages/ArticleEditPage',
	component: ArticleEditPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [
		StoreDecorator({
			user: {
				authData: {
					id: '1',
				},
			},
		} as StateSchema),
	],
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage />;

const article: Article = {
	userId: 'user',
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
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur culpa distinctio et placeat' +
					' praesentium, quasi tempora? Fugiat quasi, voluptatum.',
			],
			type: ArticleBlockType.TEXT,
		},
	],
	type: [ArticleType.IT],
	subtitle: 'Subtitle',
	createdAt: '12.12.2022',
	img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
	views: 10101,
};

const state = (loading: boolean, error?: string): DeepPartial<StateSchema> => ({
	editableArticleDetails: {
		loading,
		error,
		readOnly: true,
		data: article,
		formData: article,
	},
});

const reducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	editableArticleDetails: editableArticleDetailsReducer,
};

export const ArticleEditPageStory = Template.bind({});
ArticleEditPageStory.decorators = [StoreDecorator(state(false) as StateSchema, reducers as ReducersMapObject<StateSchema>)];

export const ArticleEditPageLoading = Template.bind({});
ArticleEditPageLoading.decorators = [StoreDecorator(state(true) as StateSchema, reducers as ReducersMapObject<StateSchema>)];

export const ArticleEditPageError = Template.bind({});
ArticleEditPageError.decorators = [StoreDecorator(state(false, 'Error message') as StateSchema, reducers as ReducersMapObject<StateSchema>)];
