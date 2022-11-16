import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tabs } from './Tabs';

export default {
	title: 'components/Tabs',
	component: Tabs,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const TabsStory = Template.bind({});
TabsStory.args = {};
