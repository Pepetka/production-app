import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlesListSkeleton } from './ArticlesListSkeleton';

export default {
	title: 'components/ArticlesListSkeleton',
	component: ArticlesListSkeleton,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticlesListSkeleton>;

const Template: ComponentStory<typeof ArticlesListSkeleton> = (args) => <ArticlesListSkeleton {...args} />;

export const ArticlesListSkeletonStory = Template.bind({});
ArticlesListSkeletonStory.args = {};
