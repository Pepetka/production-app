import { ComponentMeta, ComponentStory } from '@storybook/react';
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

export const ButtonClearInverted = Template.bind({});
ButtonClearInverted.args = {
	theme: ButtonTheme.CLEAR,
	children: 'Button',
	inverted: true,
};

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
	theme: ButtonTheme.PRIMARY,
	children: 'Button',
};
export const ButtonPrimaryInverted = Template.bind({});
ButtonPrimaryInverted.args = {
	theme: ButtonTheme.PRIMARY,
	children: 'Button',
	inverted: true,
};

export const ButtonOutline = Template.bind({});
ButtonOutline.args = {
	theme: ButtonTheme.OUTLINE,
	children: 'Button',
};
export const ButtonOutlineInverted = Template.bind({});
ButtonOutlineInverted.args = {
	theme: ButtonTheme.OUTLINE,
	children: 'Button',
	inverted: true,
};
