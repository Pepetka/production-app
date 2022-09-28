import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SideBar } from './SideBar';

export default {
	title: 'widgets/SideBar',
	component: SideBar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const SideBarStory = Template.bind({});
SideBarStory.args = {};
