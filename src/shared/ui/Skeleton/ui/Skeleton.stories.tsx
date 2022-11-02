import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Skeleton } from './Skeleton';

export default {
	title: 'shared/Skeleton',
	component: Skeleton,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const SkeletonStory = Template.bind({});
SkeletonStory.args = {
	height: 50,
	width: 200,
};

export const SkeletonSquare = Template.bind({});
SkeletonSquare.args = {
	height: 100,
	width: 100,
};

export const SkeletonCircle = Template.bind({});
SkeletonCircle.args = {
	height: 100,
	width: 100,
	circle: true,
};

export const SkeletonWithBorderRadius = Template.bind({});
SkeletonWithBorderRadius.args = {
	height: 50,
	width: 200,
	border: 5,
};
