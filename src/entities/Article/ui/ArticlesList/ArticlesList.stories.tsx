import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlesList } from './ArticlesList';

export default {
	title: 'components/ArticlesList',
	component: ArticlesList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticlesList>;

const Template: ComponentStory<typeof ArticlesList> = (args) => <ArticlesList {...args} />;

export const ArticlesListStory = Template.bind({});
ArticlesListStory.args = {};
