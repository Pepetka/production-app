import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextTheme } from './Text';

export default {
	title: 'shared/Text',
	component: Text,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextPrimary = Template.bind({});
TextPrimary.args = {
	title: 'Some text title',
	text: 'Some text content',
};

export const TextError = Template.bind({});
TextError.args = {
	theme: TextTheme.ERROR,
	title: 'Some text title',
	text: 'Some text content',
};
