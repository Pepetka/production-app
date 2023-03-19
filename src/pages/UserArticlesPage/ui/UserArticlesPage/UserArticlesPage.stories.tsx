import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/provider/Store';
import { ArticlesView, ArticleType, ArticleBlockType } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { userArticlesPageReducer } from '../../model/slice/userArticlesPageSlice';
import UserArticlesPage from './UserArticlesPage';

export default {
	title: 'pages/UserArticlesPage',
	component: UserArticlesPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof UserArticlesPage>;

const Template: ComponentStory<typeof UserArticlesPage> = (args) => <UserArticlesPage />;

const state = (view: ArticlesView): DeepPartial<StateSchema> => {
	const entities: Record<string, any> = {};

	new Array(8)
		.fill(0)
		.map((_, i) => ({
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
		}))
		.forEach((el) => {
			entities[el.id] = el;
		});

	return {
		userArticlesPage: {
			view,
			loading: false,
			ids: ['0', '1', '2', '3', '4', '5', '6', '7'],
			entities,
			hasMore: false,
		},
	};
};

const stateLoading = (view: ArticlesView): DeepPartial<StateSchema> => ({
	userArticlesPage: {
		view,
		loading: true,
		ids: [],
		entities: {},
	},
});

const reducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	userArticlesPage: userArticlesPageReducer,
};

export const UserArticlesPageSmall = Template.bind({});
UserArticlesPageSmall.args = {};
UserArticlesPageSmall.decorators = [StoreDecorator(state(ArticlesView.SMALL) as StateSchema, reducers as ReducersMapObject<StateSchema>)];

export const UserArticlesPageSmallLoading = Template.bind({});
UserArticlesPageSmallLoading.args = {};
UserArticlesPageSmallLoading.decorators = [
	StoreDecorator(stateLoading(ArticlesView.SMALL) as StateSchema, reducers as ReducersMapObject<StateSchema>),
];

export const UserArticlesPageBig = Template.bind({});
UserArticlesPageBig.args = {};
UserArticlesPageBig.decorators = [StoreDecorator(state(ArticlesView.BIG) as StateSchema, reducers as ReducersMapObject<StateSchema>)];

export const UserArticlesPageBigLoading = Template.bind({});
UserArticlesPageBigLoading.args = {};
UserArticlesPageBigLoading.decorators = [StoreDecorator(stateLoading(ArticlesView.BIG) as StateSchema, reducers as ReducersMapObject<StateSchema>)];
