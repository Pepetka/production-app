import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LoginModal } from './LoginModal';

export default {
	title: 'features/LoginModal',
	component: LoginModal,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const LoginModalStory = Template.bind({});
LoginModalStory.args = {
	isOpen: true,
	onCloseModal: () => {},
};
