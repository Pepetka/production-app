import { ComponentStory, ComponentMeta } from '@storybook/react';
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

export const AppLinkPrimary = Template.bind({});
AppLinkPrimary.args = {
	theme: AppLinkTheme.PRIMARY,
	children: 'Link',
};

export const AppLinkSecondary = Template.bind({});
AppLinkSecondary.args = {
	theme: AppLinkTheme.SECONDARY,
	children: 'Link',
};

export const AppLinkRed = Template.bind({});
AppLinkRed.args = {
	theme: AppLinkTheme.RED,
	children: 'Link',
};
