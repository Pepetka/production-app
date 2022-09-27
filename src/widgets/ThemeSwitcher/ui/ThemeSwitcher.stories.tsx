import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/provider/Theme';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
	title: 'widgets/ThemeSwitcher',
	component: ThemeSwitcher,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const ThemeSwitcherLight = Template.bind({});
ThemeSwitcherLight.decorators = [
	StyleDecorator(Theme.LIGHT_THEME),
];
export const ThemeSwitcherDark = Template.bind({});
ThemeSwitcherDark.decorators = [
	StyleDecorator(Theme.DARK_THEME),
];
