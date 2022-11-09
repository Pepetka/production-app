import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlesListItem } from './ArticlesListItem';

export default {
	title: 'components/ArticlesListItem',
	component: ArticlesListItem,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticlesListItem>;

const Template: ComponentStory<typeof ArticlesListItem> = (args) => <ArticlesListItem {...args} />;

export const ArticlesListItemStory = Template.bind({});
ArticlesListItemStory.args = {};
