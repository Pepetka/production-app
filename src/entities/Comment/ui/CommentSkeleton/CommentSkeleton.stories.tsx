import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentSkeleton } from './CommentSkeleton';

export default {
	title: 'entities/Comment/CommentSkeleton',
	component: CommentSkeleton,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof CommentSkeleton>;

const Template: ComponentStory<typeof CommentSkeleton> = (args) => (
	<CommentSkeleton {...args} />
);

export const CommentSkeletonStory = Template.bind({});
CommentSkeletonStory.args = {};
