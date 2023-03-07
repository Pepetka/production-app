import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from './Modal';

export default {
	title: 'shared/Modal',
	component: Modal,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalStory = Template.bind({});
ModalStory.args = {
	isOpen: true,
	children:
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, autem dolorum enim molestias quaerat quam saepe sapiente sunt. Blanditiis consectetur culpa dolorem dolorum esse labore officia quam reiciendis voluptatem voluptatum.',
};
