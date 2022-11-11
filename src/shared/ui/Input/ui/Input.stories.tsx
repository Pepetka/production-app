import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input, InputTheme } from './Input';

export default {
	title: 'shared/Input',
	component: Input,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputWithoutPlaceholder = Template.bind({});
InputWithoutPlaceholder.args = {
	placeholder: 'placeholder',
};

export const InputWithoutPlaceholderWithValue = Template.bind({});
InputWithoutPlaceholderWithValue.args = {
	placeholder: 'placeholder',
	value: 'Some value',
};

export const InputWithPlaceholder = Template.bind({});
InputWithPlaceholder.args = {
	floatPlaceholder: 'floatPlaceholder',
};

export const InputWithPlaceholderWithValue = Template.bind({});
InputWithPlaceholderWithValue.args = {
	floatPlaceholder: 'floatPlaceholder',
	value: 'Some value',
};

export const InputWithoutPlaceholderInvert = Template.bind({});
InputWithoutPlaceholderInvert.args = {
	placeholder: 'placeholder',
	theme: InputTheme.INVERT,
};

export const InputWithoutPlaceholderInvertWithValue = Template.bind({});
InputWithoutPlaceholderInvertWithValue.args = {
	placeholder: 'placeholder',
	theme: InputTheme.INVERT,
	value: 'Some value',
};

export const InputWithPlaceholderInvert = Template.bind({});
InputWithPlaceholderInvert.args = {
	floatPlaceholder: 'floatPlaceholder',
	theme: InputTheme.INVERT,
};

export const InputWithPlaceholderInvertWithValue = Template.bind({});
InputWithPlaceholderInvertWithValue.args = {
	floatPlaceholder: 'floatPlaceholder',
	theme: InputTheme.INVERT,
	value: 'Some value',
};
