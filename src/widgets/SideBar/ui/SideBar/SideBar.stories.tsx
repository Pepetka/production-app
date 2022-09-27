import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/provider/Theme';
import { SideBar } from './SideBar';

export default {
	title: 'widgets/SideBar',
	component: SideBar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const SideBarLight = Template.bind({});
SideBarLight.decorators = [
	StyleDecorator(Theme.LIGHT_THEME),
];
export const SideBarDark = Template.bind({});
SideBarDark.decorators = [
	StyleDecorator(Theme.DARK_THEME),
];
