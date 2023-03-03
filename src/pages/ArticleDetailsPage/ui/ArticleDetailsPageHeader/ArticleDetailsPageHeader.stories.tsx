import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from '@/app/provider/Store';
import { articleReducer } from '@/entities/Article';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

export default {
	title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
	component: ArticleDetailsPageHeader,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => <ArticleDetailsPageHeader {...args} />;

const state: DeepPartial<StateSchema> = {
	user: {
		authData: {
			id: 'some id',
		},
	},
	article: {
		article: {
			user: {
				id: 'some id',
			},
		},
	},
};

const reducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	article: articleReducer,
};

export const ArticleDetailsPageHeaderWithAuth = Template.bind({});
ArticleDetailsPageHeaderWithAuth.args = {};
ArticleDetailsPageHeaderWithAuth.decorators = [StoreDecorator(state as StateSchema, reducers as ReducersMapObject<StateSchema>)];

export const ArticleDetailsPageHeaderWithoutAuth = Template.bind({});
ArticleDetailsPageHeaderWithoutAuth.args = {};
ArticleDetailsPageHeaderWithoutAuth.decorators = [
	StoreDecorator(
		{
			user: {
				authData: {
					id: 'some another id',
				},
			},
		} as StateSchema,
		reducers as ReducersMapObject<StateSchema>,
	),
];
