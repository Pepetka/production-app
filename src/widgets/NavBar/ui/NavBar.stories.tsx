import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/provider/Theme';
import { NavBar } from './NavBar';

export default {
	title: 'widgets/NavBar',
	component: NavBar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const NavBarLight = Template.bind({});
NavBarLight.decorators = [
	StyleDecorator(Theme.LIGHT_THEME),
];
export const NavBarDark = Template.bind({});
NavBarDark.decorators = [
	StyleDecorator(Theme.DARK_THEME),
];
