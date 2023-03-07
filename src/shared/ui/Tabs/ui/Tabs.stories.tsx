import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tabs } from './Tabs';

export default {
	title: 'shared/Tabs',
	component: Tabs,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

const tabs = {
	1: 'First',
	2: 'Second',
	3: 'Third',
};

export const TabsStory = Template.bind({});
TabsStory.args = {
	tabs,
	selected: ['1'],
};

export const TabsInvert = Template.bind({});
TabsInvert.args = {
	tabs,
	selected: ['1'],
	inverted: true,
};
