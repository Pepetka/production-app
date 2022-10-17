import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/Store';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import LoginForm from './LoginForm';

export default {
	title: 'features/LoginForm',
	component: LoginForm,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

const initialState: DeepPartial<StateSchema> = {
	login: {
		loading: false,
		error: null,
		username: 'Username',
		password: 'Password',
	},
};

const initialStateError: DeepPartial<StateSchema> = {
	login: {
		loading: false,
		error: 'Some Error message',
		username: 'Username',
		password: 'Password',
	},
};

const initialStateLoading: DeepPartial<StateSchema> = {
	login: {
		loading: true,
		error: null,
		username: 'Username',
		password: 'Password',
	},
};

const asyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	login: loginReducer,
};

export const LoginFormStory = Template.bind({});
LoginFormStory.args = {};
LoginFormStory.decorators = [
	StoreDecorator(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>),
];

export const LoginFormError = Template.bind({});
LoginFormError.args = {};
LoginFormError.decorators = [
	StoreDecorator(initialStateError as StateSchema, asyncReducers as ReducersMapObject<StateSchema>),
];

export const LoginFormLoading = Template.bind({});
LoginFormLoading.args = {};
LoginFormLoading.decorators = [
	StoreDecorator(initialStateLoading as StateSchema, asyncReducers as ReducersMapObject<StateSchema>),
];
