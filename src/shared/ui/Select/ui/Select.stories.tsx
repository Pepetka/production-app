import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select, SelectTheme } from './Select';

export default {
	title: 'shared/Select',
	component: Select,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectPrimary = Template.bind({});
SelectPrimary.args = {
	placeholder: 'Some Label',
	options: [
		'1 option',
		'2 option',
		'3 option',
	],
	theme: SelectTheme.PRIMARY,
};

export const SelectInvert = Template.bind({});
SelectInvert.args = {
	placeholder: 'Some Label',
	options: [
		'1 option',
		'2 option',
		'3 option',
	],
	theme: SelectTheme.INVERT,
	textInvert: true,
};
