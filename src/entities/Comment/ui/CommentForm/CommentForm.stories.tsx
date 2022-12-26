import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from '@/app/provider/Store';
import { commentFormReducer } from '../../model/slice/commentFormSlice';
import CommentForm from './CommentForm';

export default {
	title: 'entities/CommentForm',
	component: CommentForm,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof CommentForm>;

const Template: ComponentStory<typeof CommentForm> = (args) => (
	<CommentForm {...args} />
);

const state: DeepPartial<StateSchema> = {
	commentForm: {
		text: 'Some text',
	},
};

const reducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	commentForm: commentFormReducer,
};

export const AddCommentFormStory = Template.bind({});
AddCommentFormStory.args = {
	onSendComment: () => {},
};
AddCommentFormStory.decorators = [
	StoreDecorator(
		state as StateSchema,
		reducers as ReducersMapObject<StateSchema>,
	),
];
