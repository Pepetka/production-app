import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from 'app/provider/Store';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import { ArticleSortField, ArticlesView, ArticleType } from 'entities/Article';
import { ArticlesPageFilters } from './ArticlesPageFilters';

export default {
	title: 'pages/ArticlesPage/ArticlesPageFilters',
	component: ArticlesPageFilters,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />;

const state: DeepPartial<StateSchema> = {
	articlesPage: {
		sort: ArticleSortField.TITLE,
		order: 'desc',
		type: ArticleType.ALL,
		search: 'search data',
		view: ArticlesView.BIG,
	},
};

const reducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	articlesPage: articlesPageReducer,
};

export const ArticlesPageFiltersStory = Template.bind({});
ArticlesPageFiltersStory.args = {};
ArticlesPageFiltersStory.decorators = [
	StoreDecorator(state as StateSchema, reducers as ReducersMapObject<StateSchema>),
];
