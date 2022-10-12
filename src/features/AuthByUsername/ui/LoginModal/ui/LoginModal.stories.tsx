import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/Store';
import { LoginModal } from './LoginModal';

export default {
	title: 'features/LoginModal',
	component: LoginModal,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

const initialState: DeepPartial<StateSchema> = {
	login: {
		loading: false,
		error: null,
		username: '',
		password: '',
	},
};

export const LoginModalStory = Template.bind({});
LoginModalStory.args = {
	isOpen: true,
	onCloseModal: () => {},
};
LoginModalStory.decorators = [
	StoreDecorator(initialState as StateSchema),
];
