import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Comment, commentFormReducer } from '@/entities/Comment';
import { StateSchema } from '@/app/provider/Store';
import { ArticleComments } from './ArticleComments';
import { UserRole } from '@/shared/const';

export default {
	title: 'features/ArticleComments',
	component: ArticleComments,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [withMock],
} as ComponentMeta<typeof ArticleComments>;

const Template: ComponentStory<typeof ArticleComments> = (args) => <ArticleComments {...args} />;

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

const state: DeepPartial<StateSchema> = {
	user: {
		authData: {
			id: 'some id',
		},
	},
};

const reducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	commentForm: commentFormReducer,
};

export const ArticleCommentsStory = Template.bind({});
ArticleCommentsStory.args = {
	articleId: '1',
};
ArticleCommentsStory.decorators = [
	StoreDecorator(state as StateSchema, reducers as ReducersMapObject<StateSchema>),
];
ArticleCommentsStory.parameters = {
	mockData: [
		{
			url: `${__API__}/comments?articleId=1&_expand=user`,
			method: 'GET',
			status: 200,
			response: comments,
		},
	],
};
