import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleSkeleton } from './ArticleSkeleton';

export default {
	title: 'entities/Article/ArticleSkeleton',
	component: ArticleSkeleton,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleSkeleton>;

const Template: ComponentStory<typeof ArticleSkeleton> = (args) => <ArticleSkeleton />;

export const ArticleSkeletonStory = Template.bind({});
ArticleSkeletonStory.args = {};
