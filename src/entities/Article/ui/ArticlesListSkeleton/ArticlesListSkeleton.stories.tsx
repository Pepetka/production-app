import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlesView } from 'entities/Article';
import { ArticlesListSkeleton } from './ArticlesListSkeleton';

export default {
	title: 'entities/ArticlesListSkeleton',
	component: ArticlesListSkeleton,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticlesListSkeleton>;

const Template: ComponentStory<typeof ArticlesListSkeleton> = (args) => <ArticlesListSkeleton {...args} />;

export const ArticlesListSkeletonSmall = Template.bind({});
ArticlesListSkeletonSmall.args = {
	view: ArticlesView.SMALL,
};

export const ArticlesListSkeletonBig = Template.bind({});
ArticlesListSkeletonBig.args = {
	view: ArticlesView.BIG,
};