import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { ArticleRating } from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from '@/app/provider/Store';
import { ArticleRatingType } from '../model/types/articleRating';

export default {
	title: 'features/ArticleRating',
	component: ArticleRating,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [
		withMock,
		StoreDecorator({
			user: {
				authData: {
					id: '1',
				},
			},
		} as StateSchema),
	],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

const articleRating: Array<ArticleRatingType> = [
	{
		rating: 3,
		articleId: '1',
	},
];

export const ArticleRatingStory = Template.bind({});
ArticleRatingStory.args = {
	articleId: '1',
};
ArticleRatingStory.parameters = {
	mockData: [
		{
			url: `${__API__}/rating-article?articleId=1&userId=1`,
			method: 'GET',
			status: 200,
			response: articleRating,
		},
	],
};
