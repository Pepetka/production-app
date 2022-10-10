import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './Input';

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

export const InputWithPlaceholder = Template.bind({});
InputWithPlaceholder.args = {
	floatPlaceholder: 'floatPlaceholder',
};
