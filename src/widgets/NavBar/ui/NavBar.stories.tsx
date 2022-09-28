import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavBar } from './NavBar';

export default {
	title: 'widgets/NavBar',
	component: NavBar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const NavBarStory = Template.bind({});
NavBarStory.args = {};
