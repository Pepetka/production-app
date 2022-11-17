import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

export default {
	title: 'components/ArticleDetailsPageHeader',
	component: ArticleDetailsPageHeader,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => <ArticleDetailsPageHeader {...args} />;

export const ArticleDetailsPageHeaderStory = Template.bind({});
ArticleDetailsPageHeaderStory.args = {};
