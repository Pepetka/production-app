import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Article, ArticleBlockType, ArticleType } from '@/entities/Article';
import { UserRole } from '@/shared/const/role';
import { ArticleRecommendations } from './ArticleRecommendations';

export default {
	title: 'features/ArticleRecommendations',
	component: ArticleRecommendations,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleRecommendations>;

const Template: ComponentStory<typeof ArticleRecommendations> = (args) => <ArticleRecommendations {...args} />;

const articles: Array<Article> = [
	{
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
	},
	{
		userId: 'user',
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
	},
	{
		userId: 'admin',
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
	},
	{
		userId: 'user',
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
	},
];

export const ArticleRecommendationsStory = Template.bind({});
ArticleRecommendationsStory.args = {};
ArticleRecommendationsStory.parameters = {
	mockData: [
		{
			url: `${__API__}/articles?_limit=4`,
			method: 'GET',
			status: 200,
			response: articles,
		},
	],
};
