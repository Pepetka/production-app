import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/provider/Theme';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
	title: 'shared/AppLink',
	component: AppLink,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		to: '/',
	},
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const AppLinkPrimaryDark = Template.bind({});
AppLinkPrimaryDark.args = {
	theme: AppLinkTheme.PRIMARY,
	children: 'Link',
};
AppLinkPrimaryDark.decorators = [
	StyleDecorator(Theme.DARK_THEME),
];
export const AppLinkPrimaryLight = Template.bind({});
AppLinkPrimaryLight.args = {
	theme: AppLinkTheme.PRIMARY,
	children: 'Link',
};

export const AppLinkSecondaryDark = Template.bind({});
AppLinkSecondaryDark.args = {
	theme: AppLinkTheme.SECONDARY,
	children: 'Link',
};
AppLinkSecondaryDark.decorators = [
	StyleDecorator(Theme.DARK_THEME),
];
export const AppLinkSecondaryLight = Template.bind({});
AppLinkSecondaryLight.args = {
	theme: AppLinkTheme.SECONDARY,
	children: 'Link',
};
