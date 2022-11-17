import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextSize, TextTheme } from './Text';

export default {
	title: 'shared/Text',
	component: Text,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextPrimaryM = Template.bind({});
TextPrimaryM.args = {
	title: 'Some text title',
	text: 'Some text content',
};

export const TextPrimaryInvertM = Template.bind({});
TextPrimaryInvertM.args = {
	invert: true,
	title: 'Some text title',
	text: 'Some text content',
};

export const TextErrorM = Template.bind({});
TextErrorM.args = {
	theme: TextTheme.ERROR,
	title: 'Some text title',
	text: 'Some text content',
};

export const TextPrimaryL = Template.bind({});
TextPrimaryL.args = {
	title: 'Some text title',
	text: 'Some text content',
	size: TextSize.L,
};

export const TextPrimaryInvertL = Template.bind({});
TextPrimaryInvertL.args = {
	invert: true,
	title: 'Some text title',
	text: 'Some text content',
	size: TextSize.L,
};

export const TextErrorL = Template.bind({});
TextErrorL.args = {
	theme: TextTheme.ERROR,
	title: 'Some text title',
	text: 'Some text content',
	size: TextSize.L,
};
