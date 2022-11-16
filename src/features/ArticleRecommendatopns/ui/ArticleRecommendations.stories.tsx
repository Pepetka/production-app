import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleRecommendations } from './ArticleRecommendations';

export default {
	title: 'components/ArticleRecommendations',
	component: ArticleRecommendations,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleRecommendations>;

const Template: ComponentStory<typeof ArticleRecommendations> = (args) => <ArticleRecommendations {...args} />;

export const ArticleRecommendationsStory = Template.bind({});
ArticleRecommendationsStory.args = {};