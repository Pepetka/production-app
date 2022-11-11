import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { StateSchema } from 'app/provider/Store';
import { ReducersMapObject } from '@reduxjs/toolkit';
import AddCommentForm from './AddCommentForm';

export default {
	title: 'features/AddCommentForm',
	component: AddCommentForm,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

const state: DeepPartial<StateSchema> = {
	addCommentForm: {
		text: 'Some text',
	},
};

const reducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	addCommentForm: addCommentFormReducer,
};

export const AddCommentFormStory = Template.bind({});
AddCommentFormStory.args = {
	onSendComment: () => {},
};
AddCommentFormStory.decorators = [
	StoreDecorator(state as StateSchema, reducers as ReducersMapObject<StateSchema>),
];
