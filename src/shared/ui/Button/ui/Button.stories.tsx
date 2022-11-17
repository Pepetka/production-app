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

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
	theme: ButtonTheme.SECONDARY,
	children: 'Button',
};
export const ButtonSecondaryInverted = Template.bind({});
ButtonSecondaryInverted.args = {
	theme: ButtonTheme.SECONDARY,
	children: 'Button',
	inverted: true,
};

export const ButtonOutlinePrimary = Template.bind({});
ButtonOutlinePrimary.args = {
	theme: ButtonTheme.OUTLINE_PRIMARY,
	children: 'Button',
};
export const ButtonOutlinePrimaryInverted = Template.bind({});
ButtonOutlinePrimaryInverted.args = {
	theme: ButtonTheme.OUTLINE_PRIMARY,
	children: 'Button',
	inverted: true,
};

export const ButtonOutlineSecondary = Template.bind({});
ButtonOutlineSecondary.args = {
	theme: ButtonTheme.OUTLINE_SECONDARY,
	children: 'Button',
};
export const ButtonOutlineSecondaryInverted = Template.bind({});
ButtonOutlineSecondaryInverted.args = {
	theme: ButtonTheme.OUTLINE_SECONDARY,
	children: 'Button',
	inverted: true,
};
