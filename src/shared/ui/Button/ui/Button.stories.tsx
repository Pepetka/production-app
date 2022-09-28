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

export const ButtonClear = Template.bind({});
ButtonClear.args = {
	theme: ButtonTheme.CLEAR,
	children: 'Button',
};

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
	theme: ButtonTheme.PRIMARY,
	children: 'Button',
};

export const ButtonOutline = Template.bind({});
ButtonOutline.args = {
	theme: ButtonTheme.OUTLINE,
	children: 'Button',
};
