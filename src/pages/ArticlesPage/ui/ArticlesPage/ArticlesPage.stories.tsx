import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StateSchema } from 'app/provider/Store';
import { Article, ArticlesView } from 'entities/Article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import ArticlesPage from './ArticlesPage';

export default {
	title: 'pages/ArticlesPage',
	component: ArticlesPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

const state = (view: ArticlesView): DeepPartial<StateSchema> => {
	const entities: Record<string, any> = {};

	new Array(8).fill(0).map((_, i) => (
		{
			title: `some title ${i}`,
			id: i.toString(),
			type: [ArticleType.IT],
			img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
			user: {
				id: 'some user id',
				username: 'some username',
			},
			createdAt: 'date',
			views: 100,
			subtitle: 'subtitle',
			blocks: [
				{
					id: '1',
					paragraphs: [
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam explicabo nostrum quam quas! Ab accusantium architecto blanditiis dignissimos, exercitationem, harum minima nesciunt perferendis quos rem similique, sint voluptate. Aspernatur culpa deserunt odio. Consequatur facilis fugit hic illo magnam pariatur possimus repellendus rerum veniam, vitae. Ea facere quaerat quibusdam suscipit?',
					],
					type: ArticleBlockType.TEXT,
				},
			],
		}
	)).forEach((el) => {
		entities[el.id] = el;
	});

	return {
		articlesPage: {
			view,
			loading: false,
			ids: ['0', '1', '2', '3', '4', '5', '6', '7'],
			entities,
		},
	};
};

const stateLoading = (view: ArticlesView): DeepPartial<StateSchema> => ({
	articlesPage: {
		view,
		loading: false,
		ids: [],
		entities: {},
	},
});

const reducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	articlesPage: articlesPageReducer,
};

export const ArticlesPageSmall = Template.bind({});
ArticlesPageSmall.args = {};
ArticlesPageSmall.decorators = [
	StoreDecorator(state(ArticlesView.SMALL) as StateSchema, reducers as ReducersMapObject<StateSchema>),
];

export const ArticlesPageSmallLoading = Template.bind({});
ArticlesPageSmallLoading.args = {};
ArticlesPageSmallLoading.decorators = [
	StoreDecorator(stateLoading(ArticlesView.SMALL) as StateSchema, reducers as ReducersMapObject<StateSchema>),
];

export const ArticlesPageBig = Template.bind({});
ArticlesPageBig.args = {};
ArticlesPageBig.decorators = [
	StoreDecorator(state(ArticlesView.BIG) as StateSchema, reducers as ReducersMapObject<StateSchema>),
];

export const ArticlesPageBigLoading = Template.bind({});
ArticlesPageBigLoading.args = {};
ArticlesPageBigLoading.decorators = [
	StoreDecorator(stateLoading(ArticlesView.BIG) as StateSchema, reducers as ReducersMapObject<StateSchema>),
];
