import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from 'app/provider/Store';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { ArticleType } from 'entities/Article';
import { ArticleRecommendations } from './ArticleRecommendations';
import { articleRecommendationsReducer } from '../model/slice/articleRecommendationsSlice';

export default {
	title: 'features/ArticleRecommendations',
	component: ArticleRecommendations,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleRecommendations>;

const Template: ComponentStory<typeof ArticleRecommendations> = (args) => <ArticleRecommendations {...args} />;

const state = (loading: boolean, error?: string): DeepPartial<StateSchema> => (
	{
		articleRecommendations: {
			ids: [
				'1', '2', '3', '4',
			],
			entities: {
				1: {
					user: {
						id: 'some user id 1',
						username: 'Username',
					},
					id: '1',
					type: [ArticleType.IT],
					img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
					views: 1000,
					createdAt: 'date',
					title: 'Some title',
					blocks: [],
					subtitle: 'Some subtitle',
				},
				2: {
					user: {
						id: 'some user id 2',
						username: 'Username',
					},
					id: '2',
					type: [ArticleType.IT],
					img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
					views: 1000,
					createdAt: 'date',
					title: 'Some title',
					blocks: [],
					subtitle: 'Some subtitle',
				},
				3: {
					user: {
						id: 'some user id 3',
						username: 'Username',
					},
					id: '3',
					type: [ArticleType.IT],
					img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
					views: 1000,
					createdAt: 'date',
					title: 'Some title',
					blocks: [],
					subtitle: 'Some subtitle',
				},
				4: {
					user: {
						id: 'some user id 4',
						username: 'Username',
					},
					id: '4',
					type: [ArticleType.IT],
					img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
					views: 1000,
					createdAt: 'date',
					title: 'Some title',
					blocks: [],
					subtitle: 'Some subtitle',
				},
			},
			loading: false,
			error,
		},
	}
);

const stateLoading: DeepPartial<StateSchema> = {
	articleRecommendations: {
		ids: [],
		entities: {},
		loading: true,
	},
};

const reducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	articleRecommendations: articleRecommendationsReducer,
};

export const ArticleRecommendationsStory = Template.bind({});
ArticleRecommendationsStory.args = {};
ArticleRecommendationsStory.decorators = [
	StoreDecorator(state(false) as StateSchema, reducers as ReducersMapObject<StateSchema>),
];

export const ArticleRecommendationsLoading = Template.bind({});
ArticleRecommendationsLoading.args = {};
ArticleRecommendationsLoading.decorators = [
	StoreDecorator(stateLoading as StateSchema, reducers as ReducersMapObject<StateSchema>),
];

export const ArticleRecommendationsError = Template.bind({});
ArticleRecommendationsError.args = {};
ArticleRecommendationsError.decorators = [
	StoreDecorator(state(false, 'Some error') as StateSchema, reducers as ReducersMapObject<StateSchema>),
];
