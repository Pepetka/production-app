import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Drawer } from './Drawer';

export default {
	title: 'shared/Drawer',
	component: Drawer,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const DrawerStory = Template.bind({});
DrawerStory.args = {
	isOpen: true,
	children:
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, autem dolorum enim molestias quaerat quam saepe sapiente sunt. Blanditiis consectetur culpa dolorem dolorum esse labore officia quam reiciendis voluptatem voluptatum.',
};
