import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/provider/Theme';
import { Button, ButtonTheme } from './Button';

export default {
	title: 'shared/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ClearLight = Template.bind({});
ClearLight.args = {
	theme: ButtonTheme.CLEAR,
	children: 'Button',
};
export const ClearDark = Template.bind({});
ClearDark.args = {
	theme: ButtonTheme.CLEAR,
	children: 'Button',
};
ClearDark.decorators = [
	StyleDecorator(Theme.DARK_THEME),
];

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
	theme: ButtonTheme.PRIMARY,
	children: 'Button',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
	theme: ButtonTheme.PRIMARY,
	children: 'Button',
};
PrimaryDark.decorators = [
	StyleDecorator(Theme.DARK_THEME),
];

export const OutlineLight = Template.bind({});
OutlineLight.args = {
	theme: ButtonTheme.OUTLINE,
	children: 'Button',
};
export const OutlineDark = Template.bind({});
OutlineDark.args = {
	theme: ButtonTheme.OUTLINE,
	children: 'Button',
};
OutlineDark.decorators = [
	StyleDecorator(Theme.DARK_THEME),
];
