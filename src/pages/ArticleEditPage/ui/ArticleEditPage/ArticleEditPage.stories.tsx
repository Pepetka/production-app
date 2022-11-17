import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleEditPage from './ArticleEditPage';

export default {
	title: 'components/ArticleEditPage',
	component: ArticleEditPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage />;

export const ArticleEditPageStory = Template.bind({});
ArticleEditPageStory.args = {};
