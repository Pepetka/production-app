import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Textarea, TextareaTheme } from './Textarea';

export default {
	title: 'shared/Textarea',
	component: Textarea,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const TextareaWithoutPlaceholder = Template.bind({});
TextareaWithoutPlaceholder.args = {
	placeholder: 'placeholder',
};

export const TextareaWithoutPlaceholderWithValue = Template.bind({});
TextareaWithoutPlaceholderWithValue.args = {
	placeholder: 'placeholder',
	value: 'Some value',
};

export const TextareaWithPlaceholder = Template.bind({});
TextareaWithPlaceholder.args = {
	floatPlaceholder: 'floatPlaceholder',
};

export const TextareaWithPlaceholderWithValue = Template.bind({});
TextareaWithPlaceholderWithValue.args = {
	floatPlaceholder: 'floatPlaceholder',
	value: 'Some value',
};

export const TextareaWithoutPlaceholderInvert = Template.bind({});
TextareaWithoutPlaceholderInvert.args = {
	placeholder: 'placeholder',
	theme: TextareaTheme.INVERT,
};

export const TextareaWithoutPlaceholderInvertWithValue = Template.bind({});
TextareaWithoutPlaceholderInvertWithValue.args = {
	placeholder: 'placeholder',
	theme: TextareaTheme.INVERT,
	value: 'Some value',
};

export const TextareaWithPlaceholderInvert = Template.bind({});
TextareaWithPlaceholderInvert.args = {
	floatPlaceholder: 'floatPlaceholder',
	theme: TextareaTheme.INVERT,
};

export const TextareaWithPlaceholderInvertWithValue = Template.bind({});
TextareaWithPlaceholderInvertWithValue.args = {
	floatPlaceholder: 'floatPlaceholder',
	theme: TextareaTheme.INVERT,
	value: 'Some value',
};
