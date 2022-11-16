import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlesTypeTabs } from './ArticlesTypeTabs';

export default {
	title: 'components/ArticlesTypeTabs',
	component: ArticlesTypeTabs,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticlesTypeTabs>;

const Template: ComponentStory<typeof ArticlesTypeTabs> = (args) => <ArticlesTypeTabs {...args} />;

export const ArticlesTypeTabsStory = Template.bind({});
ArticlesTypeTabsStory.args = {};
